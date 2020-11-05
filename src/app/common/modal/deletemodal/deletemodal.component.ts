import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.scss']
})
export class DeletemodalComponent implements OnInit {

  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
  }
  confirm(){
    this.todoservice.DeleteSociete().subscribe((res: any) => {
    });
  }

}
