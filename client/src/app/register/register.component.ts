import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // for receiving input value from Parent to child
  @Input() usersFromHomeComponent : any;
  // to emit event from child to Parent
  @Output() cancelRegister = new EventEmitter()
  model: any = {}
  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
