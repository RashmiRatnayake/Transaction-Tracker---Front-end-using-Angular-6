import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
   // console.log(this.data)
  }

}
