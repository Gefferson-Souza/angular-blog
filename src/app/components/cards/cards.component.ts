import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardImg: string = 'https://placehold.co/4000';
  cardTitle: string = 'Title component';
  cardDescription: string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus inventore quos laudantium velit! Vero quo suscipit magnam quae! Blanditiis quae minus cumque enim eveniet debitis officia dolorem ipsa, error eaque.';

  constructor() { }

  ngOnInit(): void {
  }

}
