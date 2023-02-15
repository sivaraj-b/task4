import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppServices{
    httpdata: any;
    constructor(private http: HttpClient) { }
    fetchPostSer(param?: number){
        if(param){
            // console.log(param)
            return this.http.get("https://jsonplaceholder.typicode.com/posts?id="+param);
        }
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
        }
    fetchAlbumSer(param?: number){
        if(param)
            return this.http.get("https://jsonplaceholder.typicode.com/albums?id="+param);
        return this.http.get("https://jsonplaceholder.typicode.com/albums");
        }
    fetchCommentSer(param?: number){
        if(param)
            return this.http.get("https://jsonplaceholder.typicode.com/comments?id="+param);
        return this.http.get("https://jsonplaceholder.typicode.com/comments");
        }
    fetchPhotoSer(param?: number){
        if(param)
            return this.http.get("https://jsonplaceholder.typicode.com/photos?id="+param);
        return this.http.get("https://jsonplaceholder.typicode.com/photos");
        }
    fetchTodoSer(param?: number){
        if(param)
            return this.http.get("https://jsonplaceholder.typicode.com/todos?id="+param);
        return this.http.get("https://jsonplaceholder.typicode.com/todos");
        }
    fetchUserSer(param?: number){
        if(param)
            return this.http.get("https://jsonplaceholder.typicode.com/users?id="+param);
        return this.http.get("https://jsonplaceholder.typicode.com/users");
        }
}