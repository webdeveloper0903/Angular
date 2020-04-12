import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  productItems = [
    {productName: "watch", url: "", price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
    {productName: "shoose", url: "", price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
    {productName: "car", url: "", price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
    {productName: "cycle", url: "", price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
    {productName: "phone", url: "", price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
    {productName: "laptop", url: "", price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
    {productName: "applephone", url: "", price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
    {productName: "ball", url: "", price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
    {productName: "book", url: "", price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
