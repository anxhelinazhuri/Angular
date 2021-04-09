import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm: NgForm;
  constructor(private router: Router) { }

  ngOnInit(): void { }

  // tslint:disable-next-line:typedef
  onBack(){ this.router.navigate(['/']); }

  // tslint:disable-next-line:typedef
  onSubmit(Form: NgForm){
    console.log('Congrats, Form Submitted');
    console.log(this.addPropertyForm);
  }
}
