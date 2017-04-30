import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';


@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts:Post[];

  constructor(private postsService: PostsService){
    this.name = 'My name is Shaikh';
    this.email = 'shaikh@gmail.com';
    this.address = {
      street: '154/E west rampura',
      city: 'Dhaka',
      country: 'Bangladesh'
    }
    this.hobbies = ['Cricket','Racing Game','Learning New Tech'];
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobies(){
		if(this.showHobbies == true){
			this.showHobbies = false;
		}else{
			this.showHobbies = true;
		}
	}

  addHoby(hobby){
    this.hobbies.push(hobby);
  }
  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

}

interface address {
	street: string,
	city: string,
	country:string
}
interface Post{
  id:number,
  title:string,
  body:string
}
