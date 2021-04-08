import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  template: `
    <p>
      Unable to dispense cash at the moment, sorry.
    </p>
  `,
  styles: [
  ]
})
export class WithdrawComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
