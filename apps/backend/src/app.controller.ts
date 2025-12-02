import { Public } from '@mguay/nestjs-better-auth';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  @Public()
  health() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version,
      environment: process.env.NODE_ENV,
      database: {
        status: 'connected',
        uptime: process.uptime(),
      },
    };
  }
}
