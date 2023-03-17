import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) {}

  getUserByLogin(login: string) {
    return this.http.get<any>(this.url + login).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
