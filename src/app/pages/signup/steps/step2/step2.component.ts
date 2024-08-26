import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TelegramService } from '../../../../services/telegram.service';
import { SignupService } from '../../../../services/signup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-step2',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class SignupStep2Component implements OnInit {
  name: string = '';

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
  }

  onContinue(): void {
    this.signupService.setStepData('step2', this.name);
    this.router.navigate(['/signup/3']);
  }
}
