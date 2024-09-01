import { Component } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISerena';
  isMenuofAlways: boolean = false;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };

//  myImage:string="../assets/images/background-new.jpg"

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  constructor()
  {
    if (sessionStorage.getItem('menuflag') == 'menuclick') {
      this.isMenuofAlways=true;
    }
    else{
      this.isMenuofAlways=false;
      sessionStorage.clear();
    }
}
}
