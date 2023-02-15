import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { AppServices } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';


const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'todos', component: TodosComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
