import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserService } from '../_services';


@Component({ templateUrl: 'home.component.html',
styleUrls: ['./home.component.css']}
)
export class HomeComponent {
    loading = false;
    users: User[];
    active: 1;
    constructor(private userService: UserService) { }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit(): void {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}
