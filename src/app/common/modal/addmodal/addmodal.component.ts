import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.scss']
})
export class AddmodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddmodalComponent>,
              private todoservice: TodoService) { }
  SocieteForm: FormGroup;
  ngOnInit(): void {
    this.SocieteForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
      userId: new FormControl(1, Validators.required),
    });
  }
  add() {
    this.todoservice.AddSociete(this.SocieteForm.value).subscribe((res: any) => {
      console.log(res);

    },
    (err) => {
      console.log(err);

    });

  }
}
