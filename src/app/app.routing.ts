import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { AdminComponent } from './admin/admin.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'new',
    component: NewProjectComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
