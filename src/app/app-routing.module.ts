import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { DashboardLayoutComponent } from './Components/dashboard-layout/dashboard-layout.component';
import { ArchiveContainerComponent } from './Components/archive-container/archive-container.component';
import { TrashContainerComponent } from './Components/trash-container/trash-container.component';
import { SideNavbarComponent } from './Components/side-navbar/side-navbar.component';
import { NotesContainerComponent } from './Components/notes-container/notes-container.component';
import { NotecardComponent } from './Components/notecard/notecard.component';
import { EditComponent } from './Components/edit/edit.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:DashboardLayoutComponent,
    children:
    [
      {
        path:'notes',
        component:NotesContainerComponent
      },
      {
        path:'archive',
        component:ArchiveContainerComponent
      },
      {
        path:'trash',
        component:TrashContainerComponent
      },
      {
        path:'createnotes',
        component:CreatenoteComponent
      },
      
    ]
  },
  {
    path:'navbar',
    component:SideNavbarComponent
  },
  {
    path:'createnotes',
    component:CreatenoteComponent
  },
  {
    path:'notecard',
    component:NotecardComponent
  },
  {
    path:'notes',
    component:NotesContainerComponent
  },
  {
    path:'edit',
    component:EditComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
