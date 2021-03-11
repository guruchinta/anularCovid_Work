import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HcBaseComponent } from '../hc-base/hc-base.component';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.scss']
})
export class UpdatepasswordComponent  extends HcBaseComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  constructor(public userService: UserService, public authService:AuthService) {
    super( authService, userService);
   }

  ngOnInit(): void {
    super.ngOnInit(
    )
  }

  

  public updatePassword(value):void{
    value['userName']=this.userProfile.username;
    
    this.userService.updatePassword(value).subscribe(( ref )=>{
      if(ref.success){
        alert("Password Updated Successfully");
        this.form.reset();
      }
    })
    // console.log(value);
  }

  public onCancel():void{

  }
}
