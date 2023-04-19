// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import FooterComponent from 'src/app/components/footer/footer.component';
// import NavbarComponent from 'src/app/components/navbar/navbar.component';

// @Component({
//   selector: 'app-foodsession',
//   templateUrl: './foodsession.component.html',
//   styleUrls: ['./foodsession.component.css'],
//   standalone:true,
//   imports:[
//     CommonModule,
//     NavbarComponent,
//     FooterComponent
//   ]
// })
// export default class FoodsessionComponent {

// }


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiResponse } from './interface.component';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-foodsession',
  templateUrl: './foodsession.component.html',
  styleUrls: ['./foodsession.component.css'],
  providers: [NgbModal],
  standalone: true,
  imports:[
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export default class FoodsessionComponent implements OnInit {
  dataToShowInModal: ApiResponse | null = null;
  searchTerm: string = '';

  constructor(private modalService: NgbModal, private http: HttpClient, private cd: ChangeDetectorRef) {}

  open(content: any) {
    this.dataToShowInModal = this.dataToShowInModal;
    const modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });

  //   setTimeout(() => {
  //     modalRef.close();
  //   }, 10000);
  }

  close() {
    this.modalService.dismissAll();
  }

  clearResults() {
    if (this.dataToShowInModal) {
      this.dataToShowInModal = { type: 'someValidType', products: [] };
    }
  }


  search(): void {
    this.http.get<ApiResponse>(`https://fitbless.onrender.com/search/food?query=${this.searchTerm}`).subscribe(
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

  ngOnInit() {}
}
