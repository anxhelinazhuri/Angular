import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  // tslint:disable-next-line:typedef
  onBack(){ this.router.navigate(['/']); }
}
