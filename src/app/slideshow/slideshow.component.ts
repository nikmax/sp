import { Component, OnInit } from '@angular/core';
import an from '../../assets/anlagen/anlagen.json';

/**
 * add in tsconfig.json
 *   to "compilerOptions"
 * 
 *       "resolveJsonModule": true, 
 *       "esModuleInterop": true
 */
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.updateImage();
    }
    anlagen = an;
    currentImage = 0;
    showImage = true;
    updateImage (){
        setInterval(
            ()=>{
                this.currentImage++;
                this.currentImage = this.currentImage % this.anlagen.length;
                this.showImage = false;
                setTimeout(()=>{this.showImage = true;}, 10);
            },5000
        );
    }
  
}
