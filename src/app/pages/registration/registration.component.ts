import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  users: any[] = [];
  router: any;
  constructor(private http: HttpClient, router: Router){}
  saveUser(): void {
    const fname = (document.getElementById('fName') as HTMLInputElement).value;
    const lname = (document.getElementById('lName') as HTMLInputElement).value;
    const phone_number= (document.getElementById('phone_number') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
  
    const payload = { fname, lname, phone_number, email, address, password};
  
    this.http.post<any>('http://localhost:3000/api/v1/users', payload).subscribe(
      (response) => {
        this.router.navigateByUrl('/signin')
      },
      (error) => {
        // console.error('Error saving crop:', error);
      }
    );
    // Clear the form inputs
    (document.getElementById('fname') as HTMLInputElement).value = '';
    (document.getElementById('lname') as HTMLInputElement).value = '';
    (document.getElementById('phone_number') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('address') as HTMLInputElement).value = '';
    (document.getElementById('password') as HTMLInputElement).value = '';
  }
}
