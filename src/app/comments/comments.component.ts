import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  constructor(private appServices: AppServices, private route: ActivatedRoute){}
  comments:any;
  value!:any;
  ngOnInit(){
    this.value = this.route.snapshot.params['foo'];

    if (this.value != '')
      this.appServices.fetchCommentSer(Number(this.value)).subscribe((data: object)=>{
        this.comments = data;
      })
    else
      this.appServices.fetchCommentSer().subscribe((data: object)=>{
        this.comments = data;
      })
      // console.log(this.posts);
  }
}
