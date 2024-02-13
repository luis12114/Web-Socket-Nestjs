import { Module } from '@nestjs/common';
import { GateWayModule } from './websockets/websocket.module';
@Module({
  imports: [GateWayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
