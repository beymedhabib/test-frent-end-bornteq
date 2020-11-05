import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailspageComponent implements OnInit {
  constructor(private Activatedroute: ActivatedRoute, private todoservice: TodoService) { }
  id = this.Activatedroute.snapshot.paramMap.get('i');
  societe = JSON.parse(localStorage.getItem('societes')) || [];
  data;
  ngOnInit(): void {
    this.getone();
  }
  getone() {
    this.todoservice.getpostbyid().subscribe((res: any) => {
      this.data = res;
    });
  }

}
