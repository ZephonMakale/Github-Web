import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../services/profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;

  constructor(private profService: ProfileServiceService) {}

  // tslint:disable-next-line:typedef
  getuserName(username: string) {
    this.profService
      .getuserName(username)
      .subscribe((profile) => (this.profile = profile));
    console.log(this.profile);
    this.profService
      .getRepos(username)
      .subscribe((repos) => (this.repos = repos));
    console.log(this.repos);
  }

  ngOnInit(): void {
    this.getuserName('ZephonMakale');
  }
}
