import { Injectable } from '@angular/core';
import { SectionCard } from '../../models/section.model';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { WorksComponent } from '../../components/works/works.component';
import { CertsAndEducationComponent } from '../../components/certs-and-education/certs-and-education.component';
import { GithubChartComponent } from '../../components/github-chart/github-chart.component';

@Injectable({
  providedIn: 'root',
})
export class SectionService {

  private readonly sections: SectionCard[] = [
    {
      id: 1,
      title: 'About Me',
      description: 'A little about me:',
      component: AboutMeComponent,
      extraData: {
        fullName: 'Jose Joaquin (Pepe) Rojas Romero',
        jobTitle: 'Junior FullStack Developer',
        avatarUrl: './assets/avatar.gif',
        bio: 'Graduated in Software Engineering at the University of Seville (US) at the Higher Technical School of Computer Engineering (ETSII). I have liked computers since I was a child and I am currently professionally dedicated to it, particularly the development of hybrid solutions for mobile phones. I enjoy my free time making music, hosting dedicated servers of some video games and always learning something new.',
        skills: {
          languages: 'Java, Python, TypeScript, Javascript, SQL, Bash, Rust',
          frameworks: 'Angular, Ionic, Spring Boot, Django, Flask, Node.js, Tauri',
          styling: 'Bootstrap, SCSS, Tailwind, HTML',
          tools: 'Docker, Capacitor, GitHub/GitLabs, Jira, Postman, NVM',
          os: 'Windows, Linux, VirtualBox',
          softSkills: 'Teamwork, Problem Solving, Proactivity, Adaptability, Creativity, Planning Process',

        },
        education: {
          university: 'University of Seville',
          degree: 'Software Engineering',
          languages: 'Spanish (Native), English (B2)'
        }
      }
    },
    {
      id: 2,
      title: 'Skills',
      description: 'Technical skills developed during my studies:',
      component: SkillsComponent,
      extraData: [
        { id: 1, name: 'Angular', image: './assets/image/skills/angular.webp' },
        { id: 2, name: 'TypeScript', image: './assets/image/skills/typescript.webp' },
        { id: 3, name: 'Ionic', image: './assets/image/skills/ionic.webp' },
        { id: 4, name: 'Capacitor', image: './assets/image/skills/capacitor.webp' },
        { id: 5, name: 'Spring Boot', image: './assets/image/skills/springboot.webp' },
        { id: 6, name: 'Java', image: './assets/image/skills/java.webp' },
        { id: 7, name: 'Docker', image: './assets/image/skills/docker.webp' },
        { id: 8, name: 'MySQL', image: './assets/image/skills/mysql.webp' },
        { id: 9, name: 'Python', image: './assets/image/skills/python.webp' }
      ]
    },
    {
      id: 3,
      title: 'Projects',
      description: 'Heres a small list with my projects:',
      component: ProjectsComponent,
      extraData: [
        { id: 1, title: 'Turbobtainer', subtitle: 'Rust, Tauri, Angular, Ionic', description: 'Tool for downloading media.', imgUrl: './assets/image/projects/turbobtainer.png', gitUrl: 'https://github.com/1337KR3W/turbobtainer' },
        { id: 2, title: 'Virtual Knowledge', subtitle: 'Angular, Ionic, Typescript, Java, Spring Boot, SQL', description: 'Web app for managing projects and tasks.', imgUrl: './assets/image/projects/virtual-knowledge.png', gitUrl: 'https://github.com/1337KR3W/Virtualknowledge-Frontend' },
        { id: 3, title: 'getyt', subtitle: 'Python, PyTube, Tkinter', description: 'YouTube streams tool.', imgUrl: './assets/image/projects/getyt.png', gitUrl: 'https://github.com/1337KR3W/getyt' },
        { id: 4, title: 'Tkinter timer', subtitle: 'Python, Tkinter', description: 'Timer using Tkinter.', imgUrl: './assets/image/projects/tkinter-timer.png', gitUrl: 'https://github.com/1337KR3W/pyside6_timer' },
        { id: 5, title: 'PySide6 timer', subtitle: 'Python, PySide6', description: 'Timer using PySide6.', imgUrl: './assets/image/projects/pyside6-timer.png', gitUrl: 'https://github.com/1337KR3W/DP2-G27-Acme' },
        { id: 6, title: 'Flet timer', subtitle: 'Python, Flet', description: 'Simple timer using Flet.', imgUrl: './assets/image/projects/flet-timer.png', gitUrl: 'https://github.com/1337KR3W/flet_timer' },
        { id: 7, title: 'Acme Platform', subtitle: 'Java, Maven, Spring Boot', description: 'A platform for students and teachers...', imgUrl: './assets/image/projects/acme.png', gitUrl: 'https://github.com/1337KR3W/DP2-G27-Acme' },
        { id: 8, title: 'Netscanner', subtitle: 'Bash, Arp, Python', description: 'Tool to discover connected hosts via arp packets.', imgUrl: './assets/image/projects/netscanner.png', gitUrl: 'https://github.com/1337KR3W/netscanner' },
        { id: 9, title: 'Pynotech', subtitle: 'Python, PySide6', description: 'Notepad developed for my Bachelors Thesis.', imgUrl: './assets/image/projects/pynotech.png', gitUrl: 'https://github.com/1337KR3W/pyNotech' }
      ]
    },
    {
      id: 4,
      title: 'Work Experience',
      description: 'Professional trajectory and impact:',
      component: WorksComponent,
      extraData: [
        {
          id: 1,
          title: 'Internship as Junior FullStack developer at Insinno España S.L.',
          description: 'Focused on mastering Full Stack development by building responsive frontends and robust backend logic during my internship at Insinno España S.L',
          dateRange: '2025/09/29 - 2026/03/27',
          imgUrl: './assets/image/works/insinno.png',
          linkUrl: 'https://www.linkedin.com/in/josejoaquinsoftware/'
        }
      ]
    },
    {
      id: 5,
      title: 'Certs & Education',
      description: 'Academic background and certifications:',
      component: CertsAndEducationComponent,
      extraData: [
        {
          id: 1,
          title: 'Testing with JUnit, Mockito and Spring Boot',
          subtitle: 'Avante',
          dateRange: '2025/10/20 - 2025/10/24',
          time: '25 hours',
          linkUrl: 'https://www.linkedin.com/in/josejoaquinsoftware/'
        },
        {
          id: 2,
          title: 'Auditoría de Seguridad Informática',
          subtitle: 'Mainjobs',
          dateRange: '2025/03/27 - 2025/05/02',
          time: '60 hours',
          linkUrl: 'https://www.linkedin.com/in/josejoaquinsoftware/'
        }
      ]
    },
    {
      id: 6,
      title: 'GitHub activity',
      description: 'Real-time visualization of my coding activity:',
      component: GithubChartComponent,
      extraData: {
        id: 1,
        title: 'Contribution chart',
        imgUrl: 'https://ghchart.rshah.org/1337KR3W'
      }
    }
  ];

  getSections(): SectionCard[] {
    return this.sections;
  }

  getHeroData() {
    return {
      id: 0,
      title: 'Pepe',
      description: 'Software Engineer',
    };
  }
}