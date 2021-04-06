import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): any {
    return this._http.get(this._albumUrl).pipe(
      map(res => res.json())
    );
    
  }

}
