import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
  private users: User[] = [
    new User('Mehdine', 'Capet', 'mehdine.capet@outlook.fr'),
    new User('Brayan', 'Capet', 'brayan.capet@outlook.fr'),
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
