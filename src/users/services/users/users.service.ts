import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'emrecan', email: 'emrecan@emrecan.com' },
    { username: 'ulas', email: 'ulas@ulas.com' },
    { username: 'mert', email: 'mert@mert.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
  }

  fetchUserByID(id: number) {
    return { id: id, username: 'emrecan', email: 'emrecan@emrecan.com' };
  }
}
