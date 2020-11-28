import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
  .footer{
    background:grey;
    height:80px;
    font-size:15px;
    color:#ffffff;
    padding:30px
  }`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
