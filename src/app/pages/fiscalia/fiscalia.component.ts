import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import Fiscalia from '../../interfaces/fiscalia';
import { ApiService } from '../../services/api.service';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-fiscalia',
  templateUrl: './fiscalia.component.html',
  styleUrls: ['./fiscalia.component.css'],
})
export class FiscaliaComponent implements OnInit {
  fiscalia = {} as Fiscalia;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.apiService
      .getFiscaliasId(this.activatedRoute.snapshot.params.id)
      .then((res) => {
        this.fiscalia = res;
      });
  }

  openModal() {
    this.dialog.open(CreateComponent, {
      width: '480px',
      data: this.fiscalia,
    });
  }
}
