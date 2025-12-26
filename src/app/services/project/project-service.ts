import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private readonly projects: Project[] = [
    {
      id: 1,
      title: 'Acme Platform',
      subtitle: 'Web application server for managing students and teachers',
      description: 'Acme is a framework based on Spring Boot used during my studies to learn how to create rest services with Java..',
      imgUrl: 'https://imgs.search.brave.com/IFaHHI459eI0NZneM6i-3erSiJJLG107qbQoxT7q-a4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE2MTQ0NzcucG5n',
      gitUrl: 'https://github.com/1337KR3W/DP2-G27-Acme'

    },
    {
      id: 2,
      title: 'Virtual Knowledge',
      subtitle: 'Web application in Angular',
      description: 'Virtual Knowledge is a web app that uses ReqRes public API for managing user data using Angular and Material Design..',
      imgUrl: 'assets/image/projects/virtual-knowledge.png',
      gitUrl: 'https://github.com/1337KR3W/Virtualknowledge-Frontend'

    },
    {
      id: 3,
      title: 'getyt',
      subtitle: 'YouTube streams tool',
      description: 'getyt is a tool designed to work with Youtube streams.',
      imgUrl: 'assets/image/projects/getyt.png',
      gitUrl: 'https://github.com/1337KR3W/getyt'

    },

    {
      id: 4,
      title: 'Tkinter timer',
      subtitle: 'Timer using Tkinter',
      description: 'Digital timer developed using Tkinter with Python.',
      imgUrl: 'assets/image/projects/tkinter-timer.png',
      gitUrl: 'https://github.com/1337KR3W/tkinter_timer'

    },
    {
      id: 5,
      title: 'PySide6 timer',
      subtitle: 'Timer using PySide6',
      description: 'Pomodoro timer using PySide6 with Python.',
      imgUrl: 'assets/image/projects/pyside6-timer.png',
      gitUrl: 'https://github.com/1337KR3W/pyside6_timer'

    },
    {
      id: 6,
      title: 'Flet timer',
      subtitle: 'Simple timer using Flet',
      description: 'Timer app developed with Flet and Python.',
      imgUrl: 'assets/image/projects/flet-timer.png',
      gitUrl: 'https://github.com/1337KR3W/flet_timer'

    },
    {
      id: 7,
      title: 'Netscanner',
      subtitle: 'Network scanner',
      description: 'Netscanner is a tool that uses arp packets to discover connected hosts to a private network.',
      imgUrl: 'assets/image/projects/netscanner.png',
      gitUrl: 'https://github.com/1337KR3W/netscanner'

    },
    {
      id: 8,
      title: 'Pynotech',
      subtitle: 'Notepad using PySide6',
      description: 'Pynotech a notepad developed using PySide6 in my Bachelors Thesis (TFG).',
      imgUrl: 'assets/image/projects/pynotech.png',
      gitUrl: 'https://github.com/1337KR3W/pyNotech'
    },
  ];
  constructor() { }
  getProjects(): Project[] {
    return this.projects;
  }

}
