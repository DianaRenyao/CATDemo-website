import {Routes} from '@angular/router';
import {ExamManagementComponent} from './exam-management/exam-management.component';
import {AddExamComponent} from './exam-management/add-exam/add-exam.component';

export const teacherHomeChildRoutes: Routes = [
  { path: '', redirectTo: 'notice-management', pathMatch: 'full' },
  { path: 'exam-management/:courseId', component: ExamManagementComponent },
  { path: 'exam-management/:courseId/chapter/:chapterSequence/add-exam', component: AddExamComponent },
];

