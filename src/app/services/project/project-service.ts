import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private readonly projects: Project[] = [
    {
      id: 1,
      title: 'Pynotech',
      subtitle: 'Notepad using PySide6',
      description: 'Pynotech a notepad developed using PySide6 in my Bachelors Thesis (TFG).',
      imgUrl: 'https://private-user-images.githubusercontent.com/32680720/338114808-9316e2fc-fb30-45b1-a28a-81b99496083b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY1OTkxOTAsIm5iZiI6MTc2NjU5ODg5MCwicGF0aCI6Ii8zMjY4MDcyMC8zMzgxMTQ4MDgtOTMxNmUyZmMtZmIzMC00NWIxLWEyOGEtODFiOTk0OTYwODNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI0VDE3NTQ1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRlN2RjNDg1NjM5MDRkOGRmNTJhMDk2OWU0YzA4YzUzYTc0NzczYjMzYzFlOTJlMjhlMzczYjU0MGI1Mjc1YTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ZBunWwmSqW2hCrG9ThRv9CoGyrr1hWAegc92oy94WeU',
      gitUrl: 'https://github.com/1337KR3W/pyNotech'

    },
    {
      id: 2,
      title: 'Acme Platform',
      subtitle: 'Web application server for managing students and teachers',
      description: 'Acme is a framework based on Spring Boot used during my studies to learn how to create rest services with Java.',
      imgUrl: 'https://imgs.search.brave.com/IFaHHI459eI0NZneM6i-3erSiJJLG107qbQoxT7q-a4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE2MTQ0NzcucG5n',
      gitUrl: 'https://github.com/1337KR3W/DP2-G27-Acme'

    },
    {
      id: 3,
      title: 'Virtual Knowledge',
      subtitle: 'Web application in Angular',
      description: 'Virtual Knowledge is a web app that uses ReqRes public API for managing user data using Angular and Material Design.',
      imgUrl: 'https://private-user-images.githubusercontent.com/32680720/530072995-ea73be93-6c61-459f-b292-1c5b2b49d448.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY2MDI1OTEsIm5iZiI6MTc2NjYwMjI5MSwicGF0aCI6Ii8zMjY4MDcyMC81MzAwNzI5OTUtZWE3M2JlOTMtNmM2MS00NTlmLWIyOTItMWM1YjJiNDlkNDQ4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI0VDE4NTEzMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZmNjg4YWMyNTZkYzFkZjdmZjgwMTJhNjAyZTEwNmY3MjQ3NjUxMTFlM2ZlN2Q5ZTZhOWRmZjI4MzQxYTA3MTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.HHmUTmuNcy5NWVPz-AXCNzouPn6B7jLr65QG5eLvdsI',
      gitUrl: 'https://github.com/1337KR3W/Virtualknowledge-Frontend'

    },
    {
      id: 4,
      title: 'Flet timer',
      subtitle: 'Simple timer using Flet',
      description: 'Timer app developed with Flet and Python.',
      imgUrl: 'https://private-user-images.githubusercontent.com/32680720/338129947-2dbd082f-1d7a-4d5f-86aa-1a6f43bba623.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY2NjYzMTIsIm5iZiI6MTc2NjY2NjAxMiwicGF0aCI6Ii8zMjY4MDcyMC8zMzgxMjk5NDctMmRiZDA4MmYtMWQ3YS00ZDVmLTg2YWEtMWE2ZjQzYmJhNjIzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI1VDEyMzMzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEyZTVkZmU2MjZjMDI4ODRmZTU4ZDFkMzk4ZGU0OGI5ZTJlMTQwOWVkYWU2MmE0N2IwYmE4N2Y5MDFjZjc5MGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.atVXxbE9jh6x3rca8Qp7WqdgpjxMAgRBa7UVbUaqWj0',
      gitUrl: 'https://github.com/1337KR3W/flet_timer'

    },
    {
      id: 5,
      title: 'Tkinter timer',
      subtitle: 'Timer using Tkinter',
      description: 'Digital timer developed using Tkinter with Python.',
      imgUrl: 'https://private-user-images.githubusercontent.com/32680720/338125660-516685a5-16b8-4bc9-b97f-dfc80fc030aa.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY2NjY0NzcsIm5iZiI6MTc2NjY2NjE3NywicGF0aCI6Ii8zMjY4MDcyMC8zMzgxMjU2NjAtNTE2Njg1YTUtMTZiOC00YmM5LWI5N2YtZGZjODBmYzAzMGFhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI1VDEyMzYxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM4YzYwMWYyZmM5NDZlNzYwY2NmOWU2NmRhNzcxMjQ4MGM0MDg5NGZkMGM4Mjc1Yzc5ZDk1ODEwMzdlYmRiMGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.a5YN10W2GHYQsDAQZ9mZT3D5U7lNbxns7oXcBYU19Jo',
      gitUrl: 'https://github.com/1337KR3W/tkinter_timer'

    },
    {
      id: 6,
      title: 'PySide6 timer',
      subtitle: 'Timer using PySide6',
      description: 'Pomodoro timer using PySide6 with Python.',
      imgUrl: 'https://private-user-images.githubusercontent.com/32680720/338121451-cf0fb773-659a-416e-9241-155666da3019.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY2NjY2MTMsIm5iZiI6MTc2NjY2NjMxMywicGF0aCI6Ii8zMjY4MDcyMC8zMzgxMjE0NTEtY2YwZmI3NzMtNjU5YS00MTZlLTkyNDEtMTU1NjY2ZGEzMDE5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI1VDEyMzgzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJiYjdhNDE4YzdkNTIwZjEwOWMwOTc3ZTU3OTRkMTNmZTFhMTE0ZTA0Mzg2NGZkNGRiMDA4YmFjMzY1YTU4NjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.c98e_Keb3qHZ-75qpNOmmQMbn8Lf1Tj8RzkUuvs_mm8',
      gitUrl: 'https://github.com/1337KR3W/pyside6_timer'

    },
    {
      id: 7,
      title: 'getyt',
      subtitle: 'YouTube streams tool',
      description: 'getyt is a tool designed to work with Youtube streams.',
      imgUrl: 'https://private-user-images.githubusercontent.com/32680720/327979415-6599320f-5adf-49fe-8063-786edd7d3416.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY2NjcxNDksIm5iZiI6MTc2NjY2Njg0OSwicGF0aCI6Ii8zMjY4MDcyMC8zMjc5Nzk0MTUtNjU5OTMyMGYtNWFkZi00OWZlLTgwNjMtNzg2ZWRkN2QzNDE2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI1VDEyNDcyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcwZmRiOGNiMDA3ZGJmMDQwNmY3NmNiY2MxNzU2MDIzY2JkYTMyOTZlNmFjOWYwMmE0MTkxMTNjYjE1NjAxNTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Cuov6UPJ7bn3WILMoha4RmEQz7udkt20VPuSTZFnV5w',
      gitUrl: 'https://github.com/1337KR3W/getyt'

    },
    {
      id: 8,
      title: 'Netscanner',
      subtitle: 'Network scanner',
      description: 'Netscanner is a tool that uses arp packets to discover connected hosts to a private network.',
      imgUrl: 'https://private-user-images.githubusercontent.com/32680720/502921633-cc851d58-14de-429c-aab7-eadb0dac7e1c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY2NjY4ODQsIm5iZiI6MTc2NjY2NjU4NCwicGF0aCI6Ii8zMjY4MDcyMC81MDI5MjE2MzMtY2M4NTFkNTgtMTRkZS00MjljLWFhYjctZWFkYjBkYWM3ZTFjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI1VDEyNDMwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU1OWIwNjcxNjA1N2QzYTY5OTIyMTNmZTYzYzI1MjUwZWY4Y2Y4ZmYzNDEwOGZmN2JlZTYxMjdiNWNlN2Y1ZTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.3JZrYptVzBgRCbjP5XD7kumsCdQxohfdTzwK5bo5xd8',
      gitUrl: 'https://github.com/1337KR3W/netscanner'

    },
    {
      id: 9,
      title: 'Pynotech',
      subtitle: 'Notepad using PySide6',
      description: 'Pynotech a notepad developed using PySide6 in my Bachelors Thesis (TFG).',
      imgUrl: 'https://private-user-images.githubusercontent.com/32680720/338114808-9316e2fc-fb30-45b1-a28a-81b99496083b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY1OTkxOTAsIm5iZiI6MTc2NjU5ODg5MCwicGF0aCI6Ii8zMjY4MDcyMC8zMzgxMTQ4MDgtOTMxNmUyZmMtZmIzMC00NWIxLWEyOGEtODFiOTk0OTYwODNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI0VDE3NTQ1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRlN2RjNDg1NjM5MDRkOGRmNTJhMDk2OWU0YzA4YzUzYTc0NzczYjMzYzFlOTJlMjhlMzczYjU0MGI1Mjc1YTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ZBunWwmSqW2hCrG9ThRv9CoGyrr1hWAegc92oy94WeU',
      gitUrl: 'https://github.com/1337KR3W/pyNotech'
    },
  ];
  constructor() { }
  getProjects(): Project[] {
    return this.projects;
  }

}
