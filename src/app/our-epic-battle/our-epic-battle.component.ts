import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-epic-battle',
  templateUrl: './our-epic-battle.component.html',
  styleUrls: ['./our-epic-battle.component.css']
})
export class OurEpicBattleComponent implements OnInit {

  isMenuofAlways: boolean = false;
  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem('menuflag', 'menuclick');
  }

}
