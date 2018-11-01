import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl: string = 'http://placehold.it/400x100';

  size = 2;

  divClass = {
    a: false,
    b: false,
    c: false
  };

  isBig = false;

  isDev = false;

  constructor() {
    setTimeout(() => {
      this.divClass = {
        a: true,
        b: true,
        c: true
      };
      this.isBig = true;
      this.isDev = true;
    }, 3000);
  }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    console.log(event.target.value);//dom对象的值会变,是当前的值
    console.log(event.target.getAttribute('value'));//HTML的value属性值，就是初始化的值，不会改变
  }

}
