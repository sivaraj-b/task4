import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  constructor(private appServices: AppServices, private route:ActivatedRoute){}
  albums:any;
  value!:any;
  ngOnInit(){
    this.value = this.route.snapshot.params['foo'];
    if (this.value != '')
      this.appServices.fetchAlbumSer(Number(this.value)).subscribe((data: object)=>{
        this.albums = data;
      })
    else
      this.appServices.fetchAlbumSer().subscribe((data: object)=>{
        this.albums = data;
      })
      // console.log(this.posts);
  }
}