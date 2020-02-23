import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-stepper-overview-example',
  templateUrl: 'stepper-overview-example.component.html',
  styleUrls: ['stepper-overview-example.component.scss']
})
export class StepperOverviewExampleComponent implements OnInit {
  formGroup: FormGroup;
  isNonLinear = false;
  isNonEditable = false;
  disableRipple = false;

  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.nameFormGroup = this.formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
    });

    this.emailFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.email]
    });
  }
}
