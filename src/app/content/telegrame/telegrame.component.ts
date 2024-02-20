
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-telegrame',
  templateUrl: './telegrame.component.html',
  styleUrl: './telegrame.component.css'
})
export class TelegrameComponent {
  selectedImage: string;

  constructor(
    public dialogRef: MatDialogRef<TelegrameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.selectedImage = data.selectedImage;
  }

  closePopup(): void {
    this.dialogRef.close();
  }
}
