import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBUndHLwgtcpfcNpa2jiu8hidpN8sN2Ww0',
  authDomain: 'usersapp-619e5.firebaseapp.com',
  projectId: 'usersapp-619e5',
  storageBucket: 'usersapp-619e5.appspot.com',
  messagingSenderId: '648261598410',
  appId: '1:648261598410:web:6d0a0b96852a20aeffc833',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
