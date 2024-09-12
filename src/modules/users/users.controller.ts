import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('protousers')
export class ProtousersController {
  @GrpcMethod('UserService', 'getUsers')
  getUsers() {
    return {
      users: [
        {
          id: 1,
          name: 'John',
        },
        {
          id: 2,
          name: 'Roger',
        },
      ],
    };
  }

  @GrpcMethod('UserService', 'getUserById')
  getUsersById(data: any) {
    return {
      id: null,
      name: `Someone with ${data?.userId}'s id`,
    };
  }
}
