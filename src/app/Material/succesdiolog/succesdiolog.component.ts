import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-succesdiolog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './succesdiolog.component.html',
  styleUrl: './succesdiolog.component.scss',
})
export class SuccesdiologComponent {
  constructor(
    public dialogRef: MatDialogRef<SuccesdiologComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  okButton(): void {
    this.dialogRef.close();
  }
}
