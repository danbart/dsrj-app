import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Fiscalia from '../interfaces/fiscalia';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URL_HOST = 'http://localhost:8888/dsrj-api/api';

  constructor(private http: HttpClient) {}

  getMethod(endPoint: string, prms?: any) {
    let params = new HttpParams();
    if (prms) {
      const keyParams = Object.keys(prms);
      for (const p of keyParams) {
        params = params.append(p, prms[p]);
      }
    }
    const url = this.URL_HOST + endPoint;
    return this.http.get(url, { params }).toPromise();
  }

  postMethod(endPoint: string, data: any, prms?: any) {
    let params = new HttpParams();
    if (prms) {
      const keyParams = Object.keys(prms);
      for (const p of keyParams) {
        params = params.append(p, prms[p]);
      }
    }
    // const url = this.URL_HOST + endPoint;
    const url = '/api';
    return this.http.post(url, data, { params }).toPromise();
  }

  putMethod(endPoint: string, data: any, prms?: any) {
    let params = new HttpParams();
    if (prms) {
      const keyParams = Object.keys(prms);
      for (const p of keyParams) {
        params = params.append(p, prms[p]);
      }
    }
    const url = this.URL_HOST + endPoint;
    return this.http.put(url, data, { params }).toPromise();
  }

  getFiscalias(): Promise<Fiscalia[]> {
    return new Promise((resolve, reject) => {
      this.getMethod('/directory')
        .then((res) => {
          let fiscalias = res as Fiscalia[];
          resolve(fiscalias);
        })
        .catch((err) => {
          reject('Error al recibir el listado');
        });
    });
  }

  getFiscaliasId(id: number): Promise<Fiscalia> {
    return new Promise((resolve, reject) => {
      this.getMethod(`/directory/${id}`)
        .then((res) => {
          let fiscalias = res as Fiscalia;
          resolve(fiscalias);
        })
        .catch((err) => {
          reject('Error al recibir registro');
        });
    });
  }

  postFiscalia(data: Fiscalia): Promise<Fiscalia> {
    return new Promise((resolve, reject) => {
      this.postMethod(`/directory/`, data)
        .then((res) => {
          let fiscalias = res as Fiscalia;
          resolve(fiscalias);
        })
        .catch((err) => {
          reject('Error al crear el registro');
        });
    });
  }

  putFiscalia(id: number, data: Fiscalia): Promise<Fiscalia> {
    return new Promise((resolve, reject) => {
      this.putMethod(`/directory/${id}`, data)
        .then((res) => {
          let fiscalias = res as Fiscalia;
          resolve(fiscalias);
        })
        .catch((err) => {
          reject('Error al actualizar el registro');
        });
    });
  }
}
