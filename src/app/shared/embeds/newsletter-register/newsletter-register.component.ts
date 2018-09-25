import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-register',
  templateUrl: './newsletter-register.component.html',
  styleUrls: ['./newsletter-register.component.css']
})
export class NewsletterRegisterComponent implements OnInit {
  isSubmitting: boolean = false;
  nsForm: FormGroup;
  submitSuccess: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<NewsletterRegisterComponent>,
    private apiService: ApiService,
    private fb: FormBuilder,
  ) {
    this.nsForm = this.fb.group({
      'email':['',[Validators.required, Validators.email]],
      'name':['']
    });
  }

  ngOnInit() {
  }

  submitInfo(){
    const info = this.nsForm.value;
    this.isSubmitting = true;
    this.apiService.post("/",info).subscribe( data=> {
      this.isSubmitting = false;
      this.submitSuccess = true;
    },
    err=> {
      console.log("FUCK");
      this.isSubmitting = false;
    })
  }

}
