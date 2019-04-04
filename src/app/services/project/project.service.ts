import { Injectable } from '@angular/core';
import { Project } from '../../project.model';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectsById(projectId: string) {
    console.log(this.database.object('projects/' + projectId));
    return this.database.object('projects/' + projectId);
  }

}
