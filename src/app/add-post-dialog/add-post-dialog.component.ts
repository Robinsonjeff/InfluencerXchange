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

      let userId = "";
      let accountType = "";

      this.service.getLoggedInAccount().subscribe((account) =>
      {
        userId = account.profile.username;
        accountType = account.profile.accountType;
      });


      this.service.createPost({userId,title,body,price,accountType}).subscribe((response:any) => {
      })



      const dialogReg = this.dialog.closeAll();
      


    }

}
