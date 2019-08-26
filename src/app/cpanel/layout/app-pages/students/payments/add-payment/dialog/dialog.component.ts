import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
  date1: Date,
  date2: Date
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [MatDialogModule]
})
export class DialogComponent implements OnInit {

  animal: string;
  name: string;
  date1: string;
  date2 : string;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public confPayData: DialogData) {
                console.log(this.confPayData);
              }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
