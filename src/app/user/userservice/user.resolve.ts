import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { IUser } from '../../core/model/user'
import { UserService } from './user.service'

// import { IUser } from './user'
// import { UserService } from './user.service'

@Injectable()
export class UserResolve implements Resolve<IUser> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log('UserResolve resolve userId = '+ route.paramMap.get('userId'));
    return this.userService.getUser(route.paramMap.get('userId'))
  }
}
