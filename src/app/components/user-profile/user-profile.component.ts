import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "Kl Rahul"
  jobProfile = "Software Developer"
  salary = 500000
  isButtonDisabled = true

  onChange(e:Event){
    const value = (e.target as HTMLInputElement).value
    console.log("called")

  }

}
