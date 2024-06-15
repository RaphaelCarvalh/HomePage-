import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1 = false;
    showPassword = false;
    constructor() { }

    ngOnInit() {}

    togglePasswordVisibility(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.showPassword = input.checked;
      }
}
