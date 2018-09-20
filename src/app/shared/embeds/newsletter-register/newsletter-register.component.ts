import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-newsletter-register',
  templateUrl: './newsletter-register.component.html',
  styleUrls: ['./newsletter-register.component.css']
})
export class NewsletterRegisterComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<NewsletterRegisterComponent>,
  ) { }

  ngOnInit() {
  }

}
