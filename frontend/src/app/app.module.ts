import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';
import { AppComponent } from './app.component';
import { StoryblokService } from './storyblok.service';
import { StoryblokDirective } from './storyblok.directive';
import { GridComponent } from './grid/grid.component';
import { PageComponent } from './page/page.component';
import { FeatureComponent } from './feature/feature.component';
import { TeaseComponent } from './tease/tease.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StoryblokDirective,
    TeaseComponent,
    GridComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    DynamicModule.withComponents([
      PageComponent,
      TeaseComponent,
      GridComponent,
      FeatureComponent
    ])
  ],
  providers: [
    StoryblokService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
