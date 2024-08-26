import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TelegramService } from '../../../../services/telegram.service';
import { SignupService } from '../../../../services/signup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-step5',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class SignupStep5Component implements OnInit {
  cycle: number = 28;
  skip: boolean = false;

  constructor(
    public router: Router,
    private telegramService: TelegramService,
    private signupService: SignupService
  ) {}

  ngOnInit(): void {
    this.telegramService.ready();
    this.telegramService.MainButton.setText('Завершить');
    this.telegramService.MainButton.show();
    this.telegramService.MainButton.onClick(() => this.onFinish());
    this.telegramService.BackButton.show();
    this.telegramService.BackButton.onClick(() => this.router.navigate(['/signup/4']));
  }

  onFinish(): void {
    if (this.skip) {
      this.signupService.setStepData('step5', null);
    } else {
      this.signupService.setStepData('step5', this.cycle);
    }
    // Заглушка для будущего сохранения данных
    console.log(this.signupService.getAllStepsData);
    this.router.navigate(['/']);
  }
}
