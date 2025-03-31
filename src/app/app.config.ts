import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideNgIconsConfig } from '@ng-icons/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideNgIconsConfig({
      size: "1.5em",
    }), provideFirebaseApp(() => initializeApp({"projectId":"app-log-c59c3","appId":"1:818004666223:web:eb5f744456c4d8eff26a9a","databaseURL":"https://app-log-c59c3-default-rtdb.firebaseio.com","storageBucket":"app-log-c59c3.firebasestorage.app","apiKey":"AIzaSyAHGZoJfEIKswog2X57eOF6RerOiz_cP4o","authDomain":"app-log-c59c3.firebaseapp.com","messagingSenderId":"818004666223","measurementId":"G-8WP47SZJVY"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
