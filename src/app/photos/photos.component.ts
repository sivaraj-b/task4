import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  constructor(private appServices: AppServices, private route: ActivatedRoute){}
  photos:any;
  value!:any;
  ngOnInit(){
    this.value = this.route.snapshot.params['foo'];

    if (this.value != '')
      this.appServices.fetchPhotoSer(Number(this.value)).subscribe((data: object)=>{
        this.photos = data;
      })
    else
      this.appServices.fetchPhotoSer().subscribe((data: object)=>{
        this.photos = data;
      })
      // console.log(this.posts);
  }
}
