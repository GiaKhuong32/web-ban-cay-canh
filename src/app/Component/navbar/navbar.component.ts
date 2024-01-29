import {ChangeDetectorRef, Component, ElementRef, inject, Input, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule,} from "@angular/forms";
import {Router} from "@angular/router";
import {CayCanh} from "../../model/tree";
import {SharedModule} from "../../shared/shared.module";
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    SharedModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public route:Router, private authService: AuthService) {
  }
  naviage(){
    this.route.navigate([''])
  }
  navigate(path: string){
    this.route.navigateByUrl('/home'+path);
  }

  signOutWithGoogle() {
    this.authService.signOutWithGoogle();
    this.route.navigate(['']).then();
  }

  @Input() itemcard: CayCanh[] = [];
}

