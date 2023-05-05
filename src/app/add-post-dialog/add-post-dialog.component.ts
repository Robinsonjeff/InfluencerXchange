import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  loading: boolean = false;

  constructor( private dialog: MatDialog, private service:SharedService, private sb: MatSnackBar) {
  
    }

  
    closeDialog(){
      this.dialog.closeAll();
    }

    addPost(title:string,body:string,price:string){

      let userId = "";
      let accountType = "";

      if(!title || !body || !price){
        this.loading = false;
        this.sb.open(
          "Invalid post, try again.",
          "Close",
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          }
        )
        return;
      }

      this.service.getLoggedInAccount().subscribe((account) =>
      {
        userId = account.profile.username;
        accountType = account.profile.accountType;
      });

      this.loading = true;
      this.service.createPost({userId,title,body,price,accountType}).subscribe((response:any) => 
      {
        if(response.success == true)
        {
          this.loading = false;
          this.dialog.closeAll();

          this.sb.open(
            "Post succefully made",
            "Close",
            {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            }
          )
        } 
        else 
        {
          this.loading = false;
          this.dialog.closeAll();
          this.sb.open(
            "Unsuccessful post, try again",
            "Close",
            {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            }
          )
        }
  
      })


    }

}
