import { Role } from './role.enum'

export interface IUser {
  id: string
  email: string
  name: {
    first: string
    middle: string
    last: string
  }
  picture: string
  role: Role
  userStatus: boolean
  username: string
  location: string
  dateOfBirth: Date
  address: {
    line1: string
    line2: string
    city: string
    state: string
    zip: string
  }
  //phones: IPhone[]
}

// export interface IPhone {
//   type: string
//   number: string
//   id: number
// }

export class User implements IUser {
  constructor(
    public id = '',
    public email = '',
    public name = { first: '', middle: '', last: '' },
    public picture = '',
    public role = Role.None,
    public dateOfBirth = null,
    public userStatus = false,
    public username = '',
    public location = '',
    public address = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
    },
    //public phones = []
  ) {}

  static BuildUser(user: IUser) {
    if (!user) {
      return new User()
    }

    return new User(
      user.id,
      user.email,
      user.name,
      user.picture,
      user.role,
      user.dateOfBirth,
      user.userStatus,
      user.username,
      user.location,
      user.address,
      //user.phones
    )
  }

  get fullName() {
    return `${this.name.first} ${this.name.middle} ${this.name.last}`
  }
}
