import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;

    // Prepare the request payload
    const payload = {
      email: email,
      password: password
    };

    // Make the API call for authentication
    this.http.post<any>('http://localhost:3000/api/v1/login', payload).subscribe(
      (response: any) => {
        // Handle the successful login response here
        console.log('Login successful:', response);

        // Redirect to the dashboard component
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        // Handle the login error response here
        alert("wrong username or password");
      }
    );
  }
}
