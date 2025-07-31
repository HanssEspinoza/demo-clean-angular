import {
  ApplicationConfig,
  makeEnvironmentProviders,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { GetAllUsers } from './feature/users/application/get-all-users';
import { UserRepository } from './feature/users/domain/repositories/user-repository';
import { UserApiService } from './feature/users/infrastructure/user-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes),
    {
      provide: UserRepository,
      useExisting: UserApiService,
    },
    makeEnvironmentProviders([GetAllUsers]),
  ],
};
