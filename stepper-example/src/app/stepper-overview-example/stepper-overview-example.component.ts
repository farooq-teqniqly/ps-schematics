import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


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

  steps = [
    {label: 'Confirm your name', content: 'Last name, First name.'},
    {label: 'Confirm your contact information', content: '123-456-7890'},
    {label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV'},
    {label: 'You are now done', content: 'Finished!'}
  ];

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          firstNameFormCtrl: ['', Validators.required],
          lastNameFormCtrl: ['', Validators.required],
        }),
        this.formBuilder.group({
          emailFormCtrl: ['', Validators.email]
        }),
      ])
    });

    this.nameFormGroup = this.formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
    });

    this.emailFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.email]
    });
  }
}
