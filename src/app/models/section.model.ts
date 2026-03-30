import { Type } from '@angular/core';

export interface SectionCard<T = any> {
    id: number;
    title: string;
    description: string;
    component?: Type<any>; // clase del componente
    extraData?: T; //modelo especifico
}

export interface DynamicSection<T> {
    data: T;
}