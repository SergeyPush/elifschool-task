import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function getTypeOrmConfig(
  configService: ConfigService,
): TypeOrmModuleOptions {
  return {
    url: configService.get('DB_URL'),
    type: 'postgres',
    // host: configService.get('DB_HOST'),
    // port: +configService.get('DB_PORT'),
    // username: configService.get('DB_USERNAME'),
    // password: configService.get('DB_PASSWORD'),
    // database: configService.get('DB_NAME'),
    autoLoadEntities: true,
    synchronize: true,
  };
}
