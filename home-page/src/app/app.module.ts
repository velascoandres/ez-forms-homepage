import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';
// Pipes
import { HasChildrenPipe } from './pipes/has-children.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LateralMenuComponent,
    NavBarComponent,
    MenuItemComponent,
    ListItemComponent,
    HasChildrenPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
