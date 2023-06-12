import { Component,Input } from '@angular/core';
interface Option {
  value: any;
  label: string;
}
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent{

  constructor() { }

  @Input() value: any[] = [];
  @Input() readonly: boolean = false;

  options: Option[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' },
    // Add more options as needed
  ];

  selectedValues: any[] = [];

  ngOnInit() {
    this.selectedValues = this.value.slice();
    console.log("selectedValuesngonint",this.selectedValues);
  }

  isSelected(optionValue: any): boolean {
    console.log("selectedValues",this.selectedValues);
    return this.selectedValues.includes(optionValue);
  }

  toggleSelection(optionValue: any): void {
    const index = this.selectedValues.indexOf(optionValue);
    if (index > -1) {
      this.selectedValues.splice(index, 1);
      console.log("splice",this.selectedValues);
    } else {
      this.selectedValues.push(optionValue);
    }
  }

}
