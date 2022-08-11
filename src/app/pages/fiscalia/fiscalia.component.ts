import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Fiscalia from '../../interfaces/fiscalia';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-fiscalia',
  templateUrl: './fiscalia.component.html',
  styleUrls: ['./fiscalia.component.css'],
})
export class FiscaliaComponent implements OnInit {
  fiscalia = {} as Fiscalia;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiService
      .getFiscaliasId(this.activatedRoute.snapshot.params.id)
      .then((res) => {
        this.fiscalia = res;
        console.log(res);
      });
  }
}
