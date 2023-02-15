import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(private appServices: AppServices,private route :ActivatedRoute ){}
  posts:any;
  value = this.route.snapshot.params['foo'];
  ngOnInit(){
    this.value = this.route.snapshot.params['foo'];
    if (this.value != '')
      this.appServices.fetchPostSer(Number(this.value)).subscribe((data: object)=>{
        this.posts = data;
      })
    else
      this.appServices.fetchPostSer().subscribe((data: object)=>{
        this.posts = data;
      })
      // console.log(this.posts);
  }
}