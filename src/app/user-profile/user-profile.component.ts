import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  bool = true;
  showMovie: boolean = true;
  onMovie() {this.showMovie = !this.showMovie}
  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'Java or not Java....',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() { }

  ngOnInit() {
  }
  onAfficher() {
    this.bool = !this.bool;
  }
}
