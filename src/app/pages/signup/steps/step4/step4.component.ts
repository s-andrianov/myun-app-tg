import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TelegramService } from '../../../../services/telegram.service';
import { SignupService } from '../../../../services/signup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-step4',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class SignupStep4Component implements OnInit {
  duration: number = 5;
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
    this.telegramService.BackButton.onClick(() => this.router.navigate(['/signup/3']));
  }

  onContinue(): void {
    if (this.skip) {
      this.signupService.setStepData('step4', null);
    } else {
      this.signupService.setStepData('step4', this.duration);
    }
    this.router.navigate(['/signup/5']);
  }
}
