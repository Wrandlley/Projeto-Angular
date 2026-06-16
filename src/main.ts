import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig) // <-- Corrigido: injetando o appConfig sem vírgulas órfãs
  .catch((err) => console.error(err));
