import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';




// import {MatIconModule, MatIconRegistry} from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { NotesContainerComponent } from './Components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './Components/archive-container/archive-container.component';
import { TrashContainerComponent } from './Components/trash-container/trash-container.component';
import { DashboardLayoutComponent } from './Components/dashboard-layout/dashboard-layout.component';
import { NotecardComponent } from './Components/notecard/notecard.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { FundooHeaderComponent } from './Components/fundoo-header/fundoo-header.component';
import { SideNavbarComponent } from './Components/side-navbar/side-navbar.component';
import { SearchNotePipe } from './Components/pipe/search-note.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotesContainerComponent,
    ArchiveContainerComponent,
    TrashContainerComponent,
    DashboardLayoutComponent,
    NotecardComponent,
    CreatenoteComponent,
    FundooHeaderComponent,
    SideNavbarComponent,
    SearchNotePipe,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
