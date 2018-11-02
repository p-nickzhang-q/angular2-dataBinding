import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms';

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

  name: string = 'tom';

  searchInput: FormControl = new FormControl();

  birthday = new Date();

  pi = 3.1415926;

  constructor() {
    Observable.from([1, 2, 3, 4]).filter(e => e % 2 == 0).map(e => e * e).subscribe(
      e => console.log(e),
      err => console.log(err),
      () => console.log('结束了')
    );

    this.searchInput.valueChanges.debounceTime(500).subscribe(
      v => console.log(v)
    );

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

  onkey(v: string) {
    console.log(v);
  }

}
