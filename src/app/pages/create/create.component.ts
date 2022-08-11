import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { FiscaliaClass } from './fiscaliaModel';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  formFiscalia = {} as FormGroup;
  fiscaliaClass = new FiscaliaClass();

  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.functionForm();
  }

  functionForm() {
    this.formFiscalia = this.fb.group({
      fiscaliaName: [, Validators.required],
      addresLine: [, Validators.required],
      city: [, Validators.required],
      state: [, Validators.required],
      country: [, Validators.required],
      zone: [, Validators.required],
      phone: [, Validators.required],
      phone2: [, Validators.required],
    });
  }

  save() {
    this.apiService
      .postFiscalia(this.fiscaliaClass)
      .then((res) => console.log(res));
  }
}
