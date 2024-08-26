import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TelegramService } from '../../../../services/telegram.service';
import { SignupService } from '../../../../services/signup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-step3',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class SignupStep3Component implements OnInit {
  date: string = '';
  skip: boolean = false;

  constructor(
    public router: Router,
    private telegramService: TelegramService,
    private signupService: SignupService
  ) {}

  ngOnInit(): void {
    this.telegramService.ready();
    this.telegramService.MainButton.setText('Продолжить');
    this.telegramService.MainButton.show();
    this.telegramService.MainButton.onClick(() => this.onContinue());
    this.telegramService.BackButton.show();
    this.telegramService.BackButton.onClick(() => this.router.navigate(['/signup/2']));
  }

  onContinue(): void {
    if (this.skip) {
      this.signupService.setStepData('step3', null);
    } else {
      this.signupService.setStepData('step3', this.date);
    }
    this.router.navigate(['/signup/4']);
  }
}
