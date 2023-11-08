import { Component, OnInit } from '@angular/core';
import { data } from '../../data/data'
import { Title } from '@angular/platform-browser';

interface BigCard {
  id: string;
  title: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  bigCard: BigCard = {
    id: "",
    title: "",
    img: '',
    description: ''
  };
  smallCards: BigCard[] = [{
    id: "",
    title: "",
    img: '',
    description: ''
  }];

  constructor() { }

  ngOnInit(): void {
    this.setDataValues()
  }
  setDataValues(): void {
    const ultimasPostagens = data.filter((item: BigCard, index) => index >= (data.length - 4)
    )
    this.bigCard = ultimasPostagens[3];
    this.smallCards = ultimasPostagens.filter((item, index) => index < 3)
  }
}
