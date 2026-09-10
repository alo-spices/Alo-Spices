import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {

  inquiryForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.inquiryForm = this.fb.group({

      fullName: [
        '',
        Validators.required
      ],

      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ],

      location: [
        '',
        Validators.required
      ],

      message: [
        '',
        Validators.required
      ]

    });

  }

  onSubmit(): void {

    if (this.inquiryForm.valid) {

      console.log(this.inquiryForm.value);

      alert('Inquiry Submitted Successfully');

      this.inquiryForm.reset();

    } else {

      this.inquiryForm.markAllAsTouched();

    }

  }

}
