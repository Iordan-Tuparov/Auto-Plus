import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  createForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      model: [''],
      year: [''],
      horsePower: [''],
      imageUrl: [''],
      information: [''],
    });
  }

  createSubmit(): void {
    console.log(this.createForm.value);
  }
}
