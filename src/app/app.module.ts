import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonConsumptionModule} from 'common-consumption-bootcamp';
import { HomeComponent } from './feature-component/home/home.component';
import { GroupCardComponent } from './feature-component/group-card/group-card.component';
import { LibraryCardComponent } from './feature-component/library-card/library-card.component';
import { LibraryCardV2Component } from './feature-component/library-card-v2/library-card-v2.component';
import { LibraryCardV3Component } from './feature-component/library-card-v3/library-card-v3.component';
import { LibraryCardV4Component } from './feature-component/library-card-v4/library-card-v4.component';
import { MemberCardComponent } from './feature-component/member-card/member-card.component';
import { CourseCardComponent } from './feature-component/course-card/course-card.component';
import { CourseCuriculumCardComponent } from './feature-component/course-curiculum-card/course-curiculum-card.component';
import { MyCourseCardComponent } from './feature-component/my-course-card/my-course-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupCardComponent,
    LibraryCardComponent,
    LibraryCardV2Component,
    LibraryCardV3Component,
    LibraryCardV4Component,
    MemberCardComponent,
    CourseCardComponent,
    CourseCuriculumCardComponent,
    MyCourseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonConsumptionModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
