import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropdownList :any= [];
  dropdownSettings:IDropdownSettings={};
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Item1' , select: true},
      { item_id: 2, item_text: 'Item2', select: true },
      { item_id: 3, item_text: 'Item3' },
      { item_id: 4, item_text: 'Item4' },
      { item_id: 5, item_text: 'Item5' }
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
    
  }
}
