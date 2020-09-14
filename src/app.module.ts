import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TaskssModule } from './taskss/taskss.module';

@Module({
  imports: [TasksModule, TaskssModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
