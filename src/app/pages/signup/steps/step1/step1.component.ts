import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TelegramService } from '../../../../services/telegram.service';
import { SignupService } from '../../../../services/signup.service';

@Component({
  selector: 'app-signup-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class SignupStep1Component implements OnInit {
  constructor(
    public router: Router,
    private telegramService: TelegramService,
  ) {}

  ngOnInit(): void {
    this.telegramService.ready();
    this.telegramService.MainButton.setText('Продолжить');
    this.telegramService.MainButton.show();
    this.telegramService.MainButton.onClick(() => this.onContinue());
  }

  onContinue(): void {
    this.router.navigate(['/signup/2']);
  }
}
