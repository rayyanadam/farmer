import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})

export class CropsComponent implements OnInit {
  n:number = 1;
  crops: any[] = [];
  router: any;
  location: any;

  constructor(private http: HttpClient, router: Router, location: Location ) {}

  //----------------------------insert crops--------------------
  saveCrop(): void {
    const name = (document.getElementById('cropName') as HTMLInputElement).value;
    const quantity = (document.getElementById('cropQuantity') as HTMLInputElement).value;
    const price = (document.getElementById('cropPrice') as HTMLInputElement).value;
    const description = (document.getElementById('cropDescription') as HTMLTextAreaElement).value;
  
    const payload = { name, quantity, price, description };
  
    this.http.post<any>('http://localhost:3000/api/v1/crops', payload).subscribe(
      (response) => {
        this.router.navigate(['/crops']);
      },
      (error) => {
        // console.error('Error saving crop:', error);
      }
    );
    // Clear the form inputs
    (document.getElementById('cropName') as HTMLInputElement).value = '';
    (document.getElementById('cropQuantity') as HTMLInputElement).value = '';
    (document.getElementById('cropPrice') as HTMLInputElement).value = '';
    (document.getElementById('cropDescription') as HTMLTextAreaElement).value = '';
    document.getElementById('insert-crops')?.classList.remove('show');// Close the modal
  }
  

  // -------------------------get all crops--------------------------
  ngOnInit(): void {
    this.getCrops();
  }
  getCrops(): void {
    this.http.get<any>('http://localhost:3000/api/v1/crops').subscribe(
      (response) => {
        this.crops = response.crops;
      },
      (error) => {
        console.error('Error retrieving crop data:', error);
      }
    );
  }

  //----------------------get description by id-----------------------
  cropDescription: string | null = null;
  openModal(cropId: number): void {
    this.http.get<any>(`http://localhost:3000/api/v1/crops/${cropId}`).subscribe(
      (response) => {
        const crop = response.crop;
        this.cropDescription = crop.description;
        document.getElementById('description-crops')?.classList.add('show');
      },
      (error) => {
        console.error('Error retrieving crop data:', error);
      }
    );
  }
  closeModal(): void {
    this.cropDescription = null;
    document.getElementById('description-crops')?.classList.remove('show');
  }

  //--------------------------update crops-----------------
  //open modal
  openEditModal(cropId: number): void {
    this.http.get<any>(`http://localhost:3000/api/v1/crops/${cropId}`).subscribe(
      (response) => {
        const crop = response.crop;
        // Set the input values based on the crop data
        (document.getElementById('cropName') as HTMLInputElement).value = crop.name;
        (document.getElementById('cropQuantity') as HTMLInputElement).value = crop.quantity;
        (document.getElementById('cropPrice') as HTMLInputElement).value = crop.price;
        (document.getElementById('cropDescription') as HTMLTextAreaElement).value = crop.description;
        
        // Show the edit modal using CSS/JavaScript
        document.getElementById('edit-crops')?.classList.add('show');
      },
      (error) => {
        console.error('Error retrieving crop data:', error);
      }
    );
  }
  
  //update
  updateCrop(): void {
    const cropId = this.selectedCropId; // Use the selected crop ID variable
    const name = (document.getElementById('cropName') as HTMLInputElement).value;
    const quantity = (document.getElementById('cropQuantity') as HTMLInputElement).value;
    const price = (document.getElementById('cropPrice') as HTMLInputElement).value;
    const description = (document.getElementById('cropDescription') as HTMLTextAreaElement).value;
  
    const requestBody = { name, quantity, price, description };
  
    this.http.put<any>(`http://localhost:3000/api/v1/crops/${cropId}`, requestBody).subscribe(
      (response) => {
        console.log('Crop data updated successfully:', response);
        // Close the edit modal
        document.getElementById('edit-crops')?.classList.remove('show');
      },
      (error) => {
        console.error('Error updating crop data:', error);
      }
    );
  }
  


  //-----------------------delete crop---------------------
  selectedCropId: number | null = null;
  openDeleteModal(cropId: number): void {
    this.selectedCropId = cropId;
    // Show the delete modal using CSS/JavaScript
    document.getElementById('delete-crops')?.classList.add('show');
  }

  //delete 
  deleteCrop(): void {
    if (this.selectedCropId) {
      const cropId = this.selectedCropId;
  
      this.http.delete<any>(`http://localhost:3000/api/v1/crops/${cropId}`).subscribe(
        (response) => {
          // console.log('Crop data deleted successfully:', response);
          // Close the delete modal
          document.getElementById('delete-crops')?.classList.remove('show');
          this.router.navigate(['/crops']);
        },
        (error) => {
          console.error('Error deleting crop data:', error);
        }
      );
    }
  }

}

