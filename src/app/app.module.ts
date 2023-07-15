import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layouts/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './modules/post/post.component';
import { MarkdownModule, MarkdownService, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, PostComponent],
  exports: [MatToolbarModule, MatSidenavModule],
  providers: [MarkdownService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          headerIds: true,
          headerPrefix: '',
          renderer: new MarkedRenderer(),
          xhtml: false
        },
      },
    }),
    LayoutModule,
    CoreModule
  ],
})
export class AppModule {}
