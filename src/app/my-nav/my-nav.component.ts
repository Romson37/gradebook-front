import { Component , OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../auth/token-storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {
  info: any;
  private roles: string[];
  private authority: string;
  otherTheme: boolean = false;

 
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private translate: TranslateService,private breakpointObserver: BreakpointObserver,private token: TokenStorageService) {}
  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_STUDENT') {
          this.authority = 'student';
          return false;
        }
        else if (role === 'ROLE_TEACHER') {
          this.authority = 'teacher';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
