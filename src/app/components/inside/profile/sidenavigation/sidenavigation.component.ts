import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {

  @Input() data :any;
  constructor() {
    //console.log("userdata:",this.data);
   }

  ngOnInit() {
    console.log(this.data);
  }

}
