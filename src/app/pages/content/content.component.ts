import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  contentImg: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0'

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get('id');
    });
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null): void {
    const response = data.filter(item => item.id === id)[0];

    if(response){
      this.contentImg = response.img;
      this.contentTitle = response.title;
      this.contentDescription = response.description;
    }
  }

}
