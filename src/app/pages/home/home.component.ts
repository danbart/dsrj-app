import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Fiscalia from '../../interfaces/fiscalia';
import { ApiService } from '../../services/api.service';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fiscalias: Fiscalia[] = [];

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.getFiscalias().then((res) => (this.fiscalias = res));
  }

  openModal() {
    this.dialog.open(CreateComponent, {
      width: '480px',
    });
  }
}
