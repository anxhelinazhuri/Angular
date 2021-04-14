import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {TabsetComponent, TabsModule} from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IPropertyBase} from '../../model/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
// @ViewChild('Form') addPropertyForm: NgForm;
@ViewChild('formTabs') formTabs: TabsetComponent;

addPropertyForm: FormGroup;

propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
propertyView: IPropertyBase = {
  Id: null,
  Name: '',
  Price: null,
  SellRent: null,
  PType: null,
  FType: null,
  BHK: null,
  BuiltArea: null,
  City: null,
  RTM: null
};
  constructor(private fb: FormBuilder, private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  // tslint:disable-next-line:typedef
  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({
      SellRent: [null, Validators.required],
      PType: [null, Validators.required],
      Name: [null, Validators.required],
      Price: [null, Validators.required],
      BuiltArea: [null, Validators.required]
    });
  }
  // tslint:disable-next-line:typedef
  onBack(){ this.router.navigate(['/']); }

  // tslint:disable-next-line:typedef
  onSubmit( ){
    console.log('Congrats, Form Submitted');
    console.log('SellRent=' + this.addPropertyForm.value.SellRent);
    console.log(this.addPropertyForm);
  }

  // tslint:disable-next-line:typedef
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
