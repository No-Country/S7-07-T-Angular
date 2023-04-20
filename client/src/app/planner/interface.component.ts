export interface ApiResponse {
  type: string;
  products: {
    id: number;
    title: string;
    image: string;
    imageType: string;
  }[];
}
