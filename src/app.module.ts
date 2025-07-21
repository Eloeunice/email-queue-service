import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { EmailQueueModule } from './email-queue/email-queue.module';

@Module({
  imports: [AuthModule, EmailModule, EmailQueueModule],
=======

@Module({
  imports: [],
>>>>>>> f0fab57be98d3c55de9c09e489722201c44a34e4
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
