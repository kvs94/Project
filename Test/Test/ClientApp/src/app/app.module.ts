import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './system/pages/home/home.component';
import { NotFoundComponent } from './system/pages/not-found/not-found.component';
import { NavComponent } from './system/components/nav/nav.component';
import { FooterComponent } from './system/components/footer/footer.component';
import { LoginGuard } from './system/guards/login.guard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule, MatSnackBarModule } from '@angular/material';
import { AuthDialog } from './system/components/auth-dialog/auth-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MessageComponent } from './system/components/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
	NotFoundComponent,
	NavComponent,
	FooterComponent,
	AuthDialog,
	MessageComponent
  ],
  entryComponents: [
	AuthDialog,
	MessageComponent
  ],
  imports: [
	AppRoutingModule, 
	BrowserModule,
	FormsModule,
	HttpClientModule, 
	BrowserAnimationsModule,
	AngularFontAwesomeModule,
	MatToolbarModule,
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatDialogModule,
	MatInputModule,
	MatIconModule,
	MatSnackBarModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
