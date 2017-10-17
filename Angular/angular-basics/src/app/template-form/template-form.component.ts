import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  customer: Customer= new Customer();
  
      save(customerForm: NgForm) {
          console.log(customerForm.form);
          console.log('Saved: ' + JSON.stringify(customerForm.value));
      }

}
