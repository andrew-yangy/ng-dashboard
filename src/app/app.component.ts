import { Component } from '@angular/core';
import {Login} from "./models/login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginInfo:Login = {
      first_name:'Andrew',
      last_name:'Yang',
      avatar:'ay.jpeg',
      title:'Senior Developer'
  };
}
