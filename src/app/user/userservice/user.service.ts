import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, throwError as observableThrowError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { environment } from '../../../environments/environment'

import { IUser, User } from '../../core/model/user'
import { CacheService } from '../../core/services/auth/cache.service'
import { IAuthStatus } from '../../core/model/IAuthStatus'
import { AuthService } from '../../core/services/auth/auth.service'
import { transformError } from '../../common/global-error'
import { isBuffer } from 'util'
// import { AuthService, IAuthStatus } from '../../auth/auth.service'
// import { CacheService } from '../../auth/cache.service'
// import { transformError } from '../../common/common'
// import { IUser, User } from './user'

export interface IUsers {
  items: IUser[]
  total: number
}

export interface IUserService {
  currentUser: BehaviorSubject<IUser>
  getCurrentUser(): Observable<IUser>
  getUser(id): Observable<IUser>
  // updateUser(user: IUser): Observable<IUser>
  getUsers(pageSize: number, searchText: string, pagesToSkip: number): Observable<IUsers>
}

@Injectable()
export class UserService extends CacheService implements IUserService {
  currentUser = new BehaviorSubject<IUser>(this.getItem('user') || new User())
  private currentAuthStatus: IAuthStatus;

  // constructor(private httpClient: HttpClient, private authService: AuthService) {
  //   super()
  //   this.currentUser.subscribe(user => this.setItem('user', user))
  //   // this.authService.authStatus.subscribe(
  //   this.authService.currentAuthStatus.subscribe(
  //     authStatus => (this.currentAuthStatus = authStatus)
  //   )
  // }

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    super();
    this.authService.currentAuthStatus.subscribe(y => this.currentAuthStatus = y);
  }

  getCurrentUser(): Observable<IUser> {
    console.log('UserServicegetCurrentUser this.currentAuthStatus.userId = ' + this.currentAuthStatus.userId); 
    const userObservable = this.getUser(this.currentAuthStatus.userId).pipe(
      catchError(transformError)
    )

    console.log('UserServicegetCurrentUser userObservable= ' + userObservable); 
    console.dir(userObservable);

    userObservable.subscribe(
      user => this.currentUser.next(user),
      err => observableThrowError(err)
    )

    console.dir(userObservable);

    return userObservable
  }

  // getUser(id): Observable<IUser> {
  getUser(id): Observable<any> {
    console.log('UserService getUser id ===== ' + id); 

     const testId = id;
    // let serviceUrl = 'http://localhost:8080/api/auth/signin';
    // return this.httpClient.get<IUser>(`${environment.baseUrl}/v1/user/${id}`)
    // let serviceUrl = 'http://localhost:8080/api/user/getUser';

    let serviceUrl = 'http://localhost:8080/api/auth/getUserTest';

    

    // const resObj = this.httpClient.get<IUser>(`${serviceUrl}/${id}`);
    const resObj = this.httpClient.get<any>(`${serviceUrl}`);
    console.dir(resObj);
    return resObj;

    //return this.httpClient.get<IUser>(`${serviceUrl}/${id}`);
    //return IUser;
  }

  // updateUser(user: IUser): Observable<IUser> {
  //   this.setItem('draft-user', user) // cache user data in case of errors

  //   const updateResponse = this.httpClient
  //     .put<IUser>(`${environment.baseUrl}/v1/user/${user.id || 0}`, user)
  //     .pipe(catchError(transformError))

  //   updateResponse.subscribe(
  //     res => {
  //       this.currentUser.next(res)
  //       this.removeItem('draft-user')
  //     },
  //     err => observableThrowError(err)
  //   )

  //   return updateResponse
  // }

  getUsers(pageSize: number, searchText = '', pagesToSkip = 0): Observable<IUsers> {
    console.log('UserService getUsers pageSize = ' + pageSize + ' searchText = ' + searchText);
    let serviceUrl = 'http://localhost:8080/api/user/getAllUsers';
    return this.httpClient.get<IUsers>(`${serviceUrl}`, {
      params: {
        search: searchText,
        offset: pagesToSkip.toString(),
        limit: pageSize.toString(),
      },
    })
  }
}
