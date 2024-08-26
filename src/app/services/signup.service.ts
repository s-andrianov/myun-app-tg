import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  // Объект для хранения данных всех шагов
  private stepsData: { [key: string]: any } = {};

  constructor() { }

  // Метод для записи данных из шага
  setStepData(step: string, data: any): void {
    this.stepsData[step] = data;
  }

  // Метод для получения данных из всех шагов
  getAllStepsData(): { [key: string]: any } {
    return this.stepsData;
  }
}

