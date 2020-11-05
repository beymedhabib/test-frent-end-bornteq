import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-updatemodal',
  templateUrl: './updatemodal.component.html',
  styleUrls: ['./updatemodal.component.scss']
})
export class UpdatemodalComponent implements OnInit {

  constructor(private todoservice: TodoService) { }
  SocieteupdateForm: FormGroup;
  societe = [];
  ngOnInit(): void {
    this.getone();
    this.SocieteupdateForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
    });
  }
  getone() {
    this.todoservice.getpostbyid().subscribe((res: any) => {
      this.SocieteupdateForm = new FormGroup({
        title: new FormControl(res.title, [Validators.required]),
        body: new FormControl(res.body, Validators.required),
      });
    });
  }
  update(){
this.todoservice.UpdateSociete(this.todoservice.id, this.SocieteupdateForm.value).subscribe();
  }

}
