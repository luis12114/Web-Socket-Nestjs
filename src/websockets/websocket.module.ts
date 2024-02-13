import { Module } from '@nestjs/common';
import { WebSocketGateways } from './websocket.gateway';

@Module({
  providers: [WebSocketGateways],
})
export class GateWayModule {}
