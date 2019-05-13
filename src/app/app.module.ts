import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatRadioModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {UserIndicatorComponent} from './user-indicator/user-indicator.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor, JwtInterceptor} from './_interceptors';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreditsComponent} from './credits/credits.component';
import {AlertComponent} from './alert/alert.component';
import {RegisterComponent} from './register/register.component';
import {StudentHomeComponent} from './student-home/student-home.component';
import {TeacherHomeComponent} from './teacher-home/teacher-home.component';
import {AdminConsoleComponent} from './admin-console/admin-console.component';
import {LogoutComponent} from './logout/logout.component';
import {AddTeacherComponent} from './admin-console/teacher-management/add-teacher/add-teacher.component';
import {ErrorMessageComponent} from './error-message/error-message.component';
import {ServiceErrorMessageComponent} from './service-error-message/service-error-message.component';
import {TeacherListComponent} from './admin-console/teacher-management/teacher-list/teacher-list.component';
import {UserReferenceComponent} from './user-reference/user-reference.component';
import {TeacherComponent} from './teacher/teacher.component';
import {TeachersComponent} from './teachers/teachers.component';
import {CustomMatPaginatorIntl} from './_internationalization/custom-mat-paginator-intl';
import {TeacherManagementComponent} from './admin-console/teacher-management/teacher-management.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {registerLocaleData} from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
import {MockComponent} from './admin-console/mock/mock.component';
// tslint:disable-next-line:max-line-length
import {TeacherDetailComponent} from './teacher-detail/teacher-detail.component';
import {ExamManagementComponent} from './teacher-home/exam-management/exam-management.component';
import {ExamDetailComponent} from './teacher-home/exam-management/exam-detail/exam-detail.component';
import {AddExamComponent} from './teacher-home/exam-management/add-exam/add-exam.component';

registerLocaleData(localeZhHans);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserIndicatorComponent,
    LoginComponent,
    HomeComponent,
    CreditsComponent,
    AlertComponent,
    RegisterComponent,
    StudentHomeComponent,
    TeacherHomeComponent,
    AdminConsoleComponent,
    LogoutComponent,
    AddTeacherComponent,
    ErrorMessageComponent,
    ServiceErrorMessageComponent,
    ServiceErrorMessageComponent,
    TeacherListComponent,
    UserReferenceComponent,
    TeacherComponent,
    TeachersComponent,
    TeacherManagementComponent,
    MockComponent,
    ExamManagementComponent,
    ExamDetailComponent,
    AddExamComponent,
    TeacherDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    PdfViewerModule,
    MatRadioModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'zh-Hans' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
