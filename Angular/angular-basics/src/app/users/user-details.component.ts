import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from './user.service';
import { IUser } from '../template-form/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.user = this._activatedRoute.snapshot.data['user'];
  }

  private routeSub: Subscription;
  user: IUser;
  errorMessage: string;

  constructor(private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    //let heroId = +this._activatedRoute.snapshot.paramMap.get('id');
    //this.getHero(heroId);    
  }

  ngOnInit() {
    //this.hero = this._activatedRoute.snapshot.data['hero'];
    this.routeSub = this._activatedRoute.params.subscribe(
      params => {
        let userId = +params['id'];
        this.getUser(userId);
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  getUser(id: number) {
    this._userService.getUser(id).subscribe(
      user => this.user = user,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/users']);
  }

  onNext(): void {
    this._router.navigate(['/userDetails', this.user.id++]);
  }

}
