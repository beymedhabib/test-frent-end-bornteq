import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  id ;
  constructor(private http: HttpClient, private route: Router) { }
  AddSociete(data){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
  getpost() {
    return this.http.get('https://jsonplaceholder.typicode.com/user/1/posts');
  }
  getpostbyid(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
  saveid(i) {
    this.id = i;
    return this.id;
  }
  DeleteSociete(){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${this.id}`);
  }
  UpdateSociete(id, data){
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
  }


}
