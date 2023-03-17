import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean = true;
  themeText: string = 'LIGHT';

  userName: string = '';
  userProfil!: any;

  errorMessage: string = '';

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getUserByLogin('octocat').subscribe((res) => {
      this.userProfil = res;
      console.log(this.userProfil);
    });
  }

  handleToggleTheme() {
    this.themeText = this.themeText == 'LIGHT' ? 'DARK' : 'LIGHT';
    this.isDarkTheme = !this.isDarkTheme;
    console.log('Theme is dark : ' + this.isDarkTheme);
  }

  handleShowUserName() {
    this.api.getUserByLogin(this.userName).subscribe((res) => {
      this.userProfil = res;
      console.log(this.userProfil);
    });
  }
}
