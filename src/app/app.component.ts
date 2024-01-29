import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import { TuiRootModule, TUI_SANITIZER, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./Component/navbar/navbar.component";
import {ContentComponent} from "./Component/content/content.component";
import {CardService} from "./services/card.service";
import {onAuthStateChanged} from "@angular/fire/auth";
import {Auth,} from '@angular/fire/auth';
import {SharedModule} from "./shared/shared.module";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ContentComponent, TuiRootModule, SharedModule, TuiDialogModule, TuiAlertModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  title = 'webbanhang';

  constructor(public auth:Auth, private router: Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        this.router.navigate(['/home']);
        console.log('dang nhap thanh cong',user);
        // ...
      } else {
        // User is signed out
        this.router.navigate(['/login']);
        console.log('chua dang nhap');
      }
    });
  }

}
