import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alreadyadded',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './alreadyadded.component.html',
  styleUrl: './alreadyadded.component.scss'
})
export class AlreadyaddedComponent {
  constructor(
    public dialogRef: MatDialogRef<AlreadyaddedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    
  okButton(): void {
    this.dialogRef.close();
  }

}
