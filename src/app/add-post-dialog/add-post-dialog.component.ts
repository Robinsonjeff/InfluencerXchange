import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent {
  title:string = '';
  body:string = '';
  price:string = '';


  username:string = '';
  accountType = '';

  constructor( private dialog: MatDialog, private service:SharedService) {
  
    }

  
    closeDialog(){
      const dialogRef = this.dialog.closeAll();
    }

    addPost(title:string,body:string,price:string){
      
      this.service.getLoggedInAccount().subscribe((account) =>
      {
        console.log("Inside subscribe");
        this.service.createPost({userId:account.username,title:this.title,body:this.body,price:this.price,accountType:account.accountType});
      });

      const dialogReg = this.dialog.closeAll();
      


    }

}
