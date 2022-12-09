import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ListComponent } from './components/list/list.component';
import { GenerationSelectComponent } from './components/generation-select/generation-select.component';

@NgModule({
  declarations: [AppComponent, SearchInputComponent, ListComponent, GenerationSelectComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
