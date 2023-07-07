import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: any[] = [];
  router: any;
  constructor(private http: HttpClient, router: Router) {}

   //--------------------insert user---------------------
   saveUser(): void {
    const fname = (document.getElementById('fName') as HTMLInputElement).value;
    const lname = (document.getElementById('lName') as HTMLInputElement).value;
    const email = (document.getElementById('userEmail') as HTMLInputElement).value;
    const phone_number = (document.getElementById('userPhoneNumber') as HTMLInputElement).value;
    const password = (document.getElementById('userPassword') as HTMLInputElement).value;
    const address = (document.getElementById('userAddress') as HTMLInputElement).value;
  
    const payload = { fname, lname, email, phone_number, password, address };
  
    this.http.post<any>('http://localhost:3000/api/v1/users', payload).subscribe(
      (response) => {
        this.router.navigateByUrl('/crops')
      },
      (error) => {
        // console.error('Error saving crop:', error);
      }
    );
    // Clear the form inputs
    (document.getElementById('fName') as HTMLInputElement).value = '';
    (document.getElementById('lName') as HTMLInputElement).value = '';
    (document.getElementById('userEmail') as HTMLInputElement).value = '';
    (document.getElementById('userPhoneNumber') as HTMLInputElement).value = '';
    (document.getElementById('userPassword') as HTMLInputElement).value = '';
    (document.getElementById('userAddress') as HTMLInputElement).value = '';
    document.getElementById('profile')?.classList.remove('show');// Close the modal
  }

  //get profile
  ngOnInit(): void {
    this.getProfile();
  }
  getProfile(): void {
    this.http.get<any>('http://localhost:3000/api/v1/users').subscribe(
      (response) => {
        this.users = response.users;
      },
      (error) => {
        console.error('Error retrieving user data:', error);
      }
    );
  }

}
