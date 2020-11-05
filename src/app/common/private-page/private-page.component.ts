import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { TodoService } from 'src/app/service/todo.service';
import { AddmodalComponent } from '../modal/addmodal/addmodal.component';
import { DeletemodalComponent } from '../modal/deletemodal/deletemodal.component';
import { UpdatemodalComponent } from '../modal/updatemodal/updatemodal.component';


@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.scss']
})
export class PrivatePageComponent implements OnInit {

  constructor(public dialog: MatDialog, private todoservice: TodoService, private authservice: AuthService) { }
  societes = [] ;
  columnsToDisplay = ['name', 'secteur'];

  ngOnInit(): void {
    this.todoservice.getpost().subscribe((res: any) => {
      this.societes = res ;
      console.log(this.societes);
    });
  }
  addTodo(){
    const dialogRef = this.dialog.open(AddmodalComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  delete(id){
    const dialogRef = this.dialog.open(DeletemodalComponent);
    this.todoservice.saveid(id);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  update(id){
    const dialogRef = this.dialog.open(UpdatemodalComponent);
    this.todoservice.saveid(id);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  logout() {
    this.authservice.Logout();
  }
}
