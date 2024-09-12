import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CredentialModule } from './modules/credential/credential.module';

@Module({
  imports: [UsersModule, CredentialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
