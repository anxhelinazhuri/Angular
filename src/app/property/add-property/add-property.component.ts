import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
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
nextClicked: boolean;
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
      BasicInfo: this.fb.group({
        SellRent: [1, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required]
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required]})
    });
  }
  // ---------------------
  /// Getter methods
  // --------------------------
  // tslint:disable-next-line:typedef
  get BasicInfo(){
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }
  // tslint:disable-next-line:typedef
  get SellRent(){
    return this.BasicInfo.controls.SellRent as FormControl;
  }
  get PriceInfo(){
    return this.addPropertyForm.controls.PriceInfo as FormGroup;
  }
  get Price(){
    return this.PriceInfo.controls.Price as FormControl;
  }

  // tslint:disable-next-line:typedef
  onBack(){ this.router.navigate(['/']); }

  // tslint:disable-next-line:typedef
  onSubmit( ){
    this.nextClicked = true;
    if (this.BasicInfo.invalid){
      this.formTabs.tabs[0].active = true;
      return;
    }
    if (this.PriceInfo.invalid){
      this.formTabs.tabs[1].active = true;
      return;
    }
    console.log('Congrats, Form Submitted');
    console.log('SellRent=' + this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  // tslint:disable-next-line:typedef
  selectTab(NextTabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    if (IsCurrentTabValid){
    this.formTabs.tabs[NextTabId].active = true;
    }
  }
}
