import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: any = {};
  title = 'User Registration Form';
  loginUser(item: any) {
    if (item.valid) {
      alert('User registered successfully');
      console.log(this.user);
    }
  }
}
