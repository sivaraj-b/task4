import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {
  
  constructor(private route:ActivatedRoute, private appServices: AppServices){}
  todos:any;
  value:any;
  ngOnInit(){
    this.value = this.route.snapshot.params['foo'];
    if (this.value != '')
      this.appServices.fetchTodoSer(Number(this.value)).subscribe((data: object)=>{
        this.todos = data;
      })
    else
      this.appServices.fetchTodoSer().subscribe((data: object)=>{
        this.todos = data;
      })
  }
}
