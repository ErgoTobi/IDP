import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSortModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule, MatCardModule} from '@angular/material';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material-module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { ResultoverviewComponent } from './components/resultoverview/resultoverview.component';
import { ResultComponent } from './components/result/result.component';
import { OverviewComponent } from './components/overview/overview.component';
import { OverviewDetailComponent } from './components/overview-detail/overview-detail.component';
import { DeleteDialogComponent } from './components/overview-detail/delete-dialog/delete-dialog.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import {RunComponent} from './components/run/run.component';

import { ResultDetailComponent } from './components/result-detail/result-detail.component';
import { NgxLoadersCssModule } from 'ngx-loaders-css';
import { CreateTestsetDialogComponent } from './components/overview/create-testset-dialog/create-testset-dialog.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AppHeaderComponent } from './app-header.component';
import { PasswordDialogComponent } from './components/overview-detail/password-dialog/password-dialog.component';
import { EncrDecrService } from './encr-decr.service';
import { StopDialogComponent } from './components/run/stop-dialog/stop-dialog.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

// Snazzy Maps


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      WebviewDirective,
      CreateComponent,
      ResultoverviewComponent,
      ResultComponent,
      OverviewComponent,
      OverviewDetailComponent,
      DeleteDialogComponent,
      SettingsDialogComponent,
      RunComponent,
      CreateTestsetDialogComponent,
      AppHeaderComponent,
      PasswordDialogComponent,
      ResultDetailComponent,
      StopDialogComponent,
      LoadingScreenComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        HttpClientModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        }),
        MatDialogModule,
        MaterialModule,
        NgxLoadersCssModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MaterialFileInputModule,
        MatCardModule
  ],
    exports: [
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        DeleteDialogComponent
        ],
    entryComponents: [
        DeleteDialogComponent,
        SettingsDialogComponent,
        CreateTestsetDialogComponent,
        PasswordDialogComponent,
        StopDialogComponent
    ],
  providers: [
      ElectronService,
      EncrDecrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

const apiKey = 'AIzaSyCWpHHjI-mo2Evu6YRUlzMYU0PZs2A7DNc';
