import { Component, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiResponse } from './interface.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css'],
  providers: [NgbModal],
  standalone: true,
  imports:[
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export default class PlannerComponent {
  currentDate: Date = new Date();
  selectedFoods: any[] = [];
  dataToShowInModal: ApiResponse | null = null;
  searchTerm: string = '';

  constructor(private modalService: NgbModal, private http: HttpClient, private cd: ChangeDetectorRef) {}

  incrementDate() {
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.cd.markForCheck();
  }

  decrementDate() {
    this.currentDate.setDate(this.currentDate.getDate() - 1);
    this.cd.markForCheck();
  }


  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  clearResults() {
    if (this.dataToShowInModal) {
      this.dataToShowInModal = { type: 'someValidType', products: [] };
    }
  }
  onProductCheckboxChange(product: any, event: any): void {
    // Aquí puedes manejar el cambio de estado de la casilla de verificación
    // Por ejemplo, puedes guardar el estado en un objeto o actualizar el estado del producto en el arreglo
    console.log('Producto:', product);
    console.log('Estado de la casilla:', event.target.checked);
  }

  search(): void {
    this.http.get<ApiResponse>(`https://s7-clone-production.up.railway.app/search/food?query=${this.searchTerm}`).subscribe(
      (data: ApiResponse) => {
        this.dataToShowInModal = data;
        console.log('API data:', data);
        this.cd.detectChanges();
      },
      error => {
        console.error('Error  API:', error);
      }
    );
  }
}
