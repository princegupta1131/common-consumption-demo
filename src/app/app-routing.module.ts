import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCardComponent } from './feature-component/group-card/group-card.component';
import { LibraryCardComponent } from './feature-component/library-card/library-card.component';
import { LibraryCardV2Component } from './feature-component/library-card-v2/library-card-v2.component';
import { LibraryCardV3Component } from './feature-component/library-card-v3/library-card-v3.component';
import { LibraryCardV4Component } from './feature-component/library-card-v4/library-card-v4.component';
import { MemberCardComponent } from './feature-component/member-card/member-card.component';
import { CourseCardComponent } from './feature-component/course-card/course-card.component';
import { CourseCuriculumCardComponent } from './feature-component/course-curiculum-card/course-curiculum-card.component';
import { HomeComponent } from './feature-component/home/home.component';
import { MyCourseCardComponent } from './feature-component/my-course-card/my-course-card.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    // HomeComponent,
    // GroupCardComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'group-card', component: GroupCardComponent },
      { path: 'library-card', component: LibraryCardComponent },
      { path: 'library-card-v2', component: LibraryCardV2Component },
      { path: 'library-card-v3', component: LibraryCardV3Component },
      { path: 'library-card-v4', component: LibraryCardV4Component },
      { path: 'member-card', component: MemberCardComponent },
      { path: 'course-card', component: CourseCardComponent },
      { path: 'course-curiculum-card', component: CourseCuriculumCardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'my-course-card', component: MyCourseCardComponent },
      { path: '**', redirectTo: 'home' },

    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})

export class AppRoutingModule { }