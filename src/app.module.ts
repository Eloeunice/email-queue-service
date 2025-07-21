import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { EmailQueueModule } from './email-queue/email-queue.module';

@Module({
  imports: [AuthModule, EmailModule, EmailQueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
