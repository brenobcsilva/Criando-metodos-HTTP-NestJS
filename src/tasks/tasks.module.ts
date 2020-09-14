import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { Task.Service } from './shared/task.service';

@Module({
  controllers: [TasksController],
  providers: [Task.Service]
})
export class TasksModule {}
