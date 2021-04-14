import { Module } from '@nestjs/common';
import { DbModule } from './dbmodule/dbmodule.module';
import { GplModule } from './gplmodule/gplmodule.module';
@Module({
  imports: [GplModule],
  providers: [],
})
export class AppModule {}
