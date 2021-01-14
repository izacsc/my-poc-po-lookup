import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
})
export class SamplePoLookupBasicComponent {
  reactiveForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {
    this.createReactiveForm();
  }

  createReactiveForm(): void {
    this.reactiveForm = this.fb.group({
      lookup: new FormControl(),
      input: new FormControl(),
    });
  }

  saveForm(): void {
    console.log('salvei');
    console.log('lookup', this.reactiveForm?.controls.lookup.value);
    console.log('input', this.reactiveForm?.controls.input.value);
  }
}
