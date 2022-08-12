import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Fiscalia from 'src/app/interfaces/fiscalia';
import { ApiService } from '../../services/api.service';
import { FiscaliaClass } from './fiscaliaModel';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  isUpdate = false;
  formFiscalia = {} as FormGroup;
  fiscaliaClass = new FiscaliaClass();

  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: Fiscalia,
    public apiService: ApiService
  ) {
    if (data != null) {
      this.fiscaliaClass = data;
      this.isUpdate = true;
    }
  }

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
    this.apiService.postFiscalia(this.fiscaliaClass).then((res) => {
      console.log(res);
      this.dialogRef.close();
    });
  }

  update(id: number) {
    this.apiService.putFiscalia(id, this.fiscaliaClass).then((res) => {
      console.log(res);
      this.dialogRef.close();
    });
  }
}
