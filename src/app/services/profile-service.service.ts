import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Repos } from '../repos';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {


  constructor(public http: HttpClient) {

   }
// tslint:disable-next-line:typedef
getuserNme(username: string) {
  return this.http.get('https://api.github.com/users/' + username + '?access_token=' + environment.apiKey);
}
// tslint:disable-next-line:typedef
getRepos(username: string) {
  return this.http.get('https://api.github.com/users/' + username + '/repos?access_token=' + environment.apiKey);
}
}
