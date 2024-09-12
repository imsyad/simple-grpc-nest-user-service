import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('credential')
export class CredentialController {
  @GrpcMethod('CredentialService', 'GetCredentials')
  getCredential() {
    return {
      id: 1,
      detailCredential: 'eha2.23usihAHUSD-Ia9SD8A0hd0',
    };
  }
}
