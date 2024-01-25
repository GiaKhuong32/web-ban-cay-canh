import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(routes), importProvidersFrom(TuiRootModule), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"caycanh-f192a","appId":"1:952585444598:web:36021cfcd7ac1d5e25a0d7","storageBucket":"caycanh-f192a.appspot.com","apiKey":"AIzaSyCi_oHJ8it5-HWgRDFgclF-Hf9486Pw3X8","authDomain":"caycanh-f192a.firebaseapp.com","messagingSenderId":"952585444598"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))]
};
