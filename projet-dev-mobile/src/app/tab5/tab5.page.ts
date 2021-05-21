import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  private trueFormControl = new FormControl(false);
  private falseFormControl = new FormControl(false);
  constructor() { }

  ngOnInit() {
  }

  onSearchInput($event: any) {
  }
  onSearchCancel($event: any) {
  }
}
