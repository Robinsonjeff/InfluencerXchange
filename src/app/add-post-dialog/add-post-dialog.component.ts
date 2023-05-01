import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent {

  constructor( private dialog: MatDialog) {
      
    }

  
    closeDialog(){
      const dialogRef = this.dialog.closeAll();
    }

    addPost(){
      return;
    }

}
