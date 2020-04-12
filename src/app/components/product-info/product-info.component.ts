import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from "@angular/router";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  nameFromURL;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nameFromURL = this.route.snapshot.params['productName'];
  }

}
