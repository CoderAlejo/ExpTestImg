import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {
  ExpTestImgAngularDashboardModule,
  ExpTestImgAngularStatusBarModule,
  ExpTestImgAngularDragDropModule,
  ExpTestImgAngularProgressBarModule,
  ExpTestImgAngularDashboardModalModule,
} from '@ExpTestImg' +
  /angular'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ExpTestImgAngularDashboardModule,
    ExpTestImgAngularStatusBarModule,
    ExpTestImgAngularDashboardModalModule,
    ExpTestImgAngularDragDropModule,
    ExpTestImgAngularProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
