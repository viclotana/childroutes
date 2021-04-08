import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-deposit',
  template: `
    <div>
      <button (click)='coins()'>Deposit Coins</button>
      <button (click)='notes()'>Deposit notes</button>
      <p>
      <router-outlet></router-outlet>
      </p>
    </div>
  `,
styles: ['button {top: 50%; text-align: center;border-radius: 15px; border: 2px solid #73AD21; width: fit-content; margin: 20px; padding: 20px;}']
})
export class DepositComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  coins(){
    this.router.navigate(['coins'], {relativeTo:this.route});
  }

  notes(){
    this.router.navigate(['notes'], {relativeTo:this.route});
  }

}
