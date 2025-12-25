import { Injectable } from '@angular/core';
import { Skill } from 'src/app/models/skill/skill.model';
@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private readonly skills: Skill[] = [
    {
      id: 1,
      name: 'Angular',
      image: 'https://imgs.search.brave.com/DW0w6A0cqSLTNqRY5qJH81dq_dw91FDrnY6Nb2VTbyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY3L0FuZ3VsYXJf/Z3JhZGllbnRfbG9n/by5wbmc'
    },
    {
      id: 2,
      name: 'Typescript',
      image: 'https://imgs.search.brave.com/v2fOtV6b9bnTHIAAGj_oTgILnjCazJ6RCy_X_xZ72c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/Ny90eXBlc2NyaXB0/LWxvZ29fYnJhbmRs/b2dvcy5uZXRfaGcw/cWgucG5n'
    },
    {
      id: 3,
      name: 'Ionic',
      image: 'https://imgs.search.brave.com/7Yw8fXVnV0KyhhCezKwwtXyF0-QA6Fr0fewAA29oDkM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MmE3NDc0YzIyMzM0/M2ZiYzIyMDdjZmUu/cG5n'
    },
    {
      id: 4,
      name: 'Capacitor',
      image: 'https://imgs.search.brave.com/HTHxJIL7LZCDV0j41IwTbzS2WL1LqS17zp1MprZCaG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL2lvbmlj/LXRlYW0vY2FwYWNp/dG9yLWZpbGVzeXN0/ZW0vcmF3L21haW4v/LmdpdGh1Yi9hc3Nl/dHMvbG9nby5wbmc'
    },
    {
      id: 5,
      name: 'Spring Boot',
      image: 'https://imgs.search.brave.com/WaugtfYQHch9zmeHhsPtSQS_FtZXSrUTghx14_YJ4gU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE2MTQzMDIucG5n'
    },
    {
      id: 6,
      name: 'Java',
      image: 'https://imgs.search.brave.com/oJhRYYynp4ntE2pz0UwAZPdUxCm9aU7hgFqu5iLVlSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI4LzIvamF2YS1s/b2dvLXBuZ19zZWVr/bG9nby0yODkzNjIu/cG5n'
    },
    {
      id: 7,
      name: 'Docker',
      image: 'https://imgs.search.brave.com/KX4ePWp9_cg_DBqchD1ZIGnXAvXFq2B3V6hvQpot9z8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL21p/Z3VlbHNvbG9yaW8v/dnNjb2RlLXN5bWJv/bHMvbWFpbi9zcmMv/aWNvbnMvZmlsZXMv/ZG9ja2VyLnN2Zw'
    },
    {
      id: 8,
      name: 'MySQL',
      image: 'https://imgs.search.brave.com/oq60fstgzHDdsFD9Ek7B5ybpRuWiYrImm_vkGhwAdZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzkvMi9teXNxbC1s/b2dvLXBuZ19zZWVr/bG9nby05NjU3OC5w/bmc'
    },
    {
      id: 9,
      name: 'Python',
      image: 'https://imgs.search.brave.com/UURfYnMhrxwpFe2BgJ2GwMXCmu6u5LR5cpoicsOXtd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1B5dGhv/bi1Mb2dvLUZyZWUt/RG93bmxvYWQtUE5H/LnBuZw'
    }
  ];
  constructor() { }
  getSkills(): Skill[] {
    return this.skills;
  }
}
