import { Component, OnInit } from '@angular/core';

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
    currentImage = 0;
    showImage = true;
    updateImage (){
        setInterval(
            ()=>{
                this.currentImage++;
                this.currentImage = this.currentImage % this.anlagen.length;
            },5000
        );
    }
  

    anlagen = [
        {
            'Name': 'Asia Linh',
            'Ort': '65232 Taunusstein',
            'Text': 'Photovoltaikanlage auf Gastronomiebetrieb',
            'Module': 'IBC Solar',
            'Wechselrichter': 'Fronius',
            'Leistung': '9,9 kWp',
            'Inbetriebnahme': '10.2016',
            'Bilder':2
        },{
            'Name': 'Erich Cretti',
            'Ort': '55278 Weinolsheim',
            'Text': 'Photovoltaikanlage auf EFH',
            'Module': 'IBC Solar',
            'Speicher': 'E3DC',
            'Leistung': '15,1 kWp',
            'Inbetriebnahme': '10.2019',
            'Bilder':2
        },{
            'Name': 'EVIM Idstein',
            'Ort': '65510 Idstein',
            'Text': 'Photovoltaikanlage auf Gewerbebetrieb',
            'Module': 'IBC Solar',
            'Wechselrichter': 'SMA',
            'Leistung': '99,96 kWp',
            'Inbetriebnahme': '12.2015',
            'Bilder': 2
        },{
            'Name': 'GFI Lorsch',
            'Ort': '64653 Lorsch',
            'Text': 'Photovoltaikanlage auf Gewerbebetrieb',
            'Module': 'LG Solar',
            'Wechselrichter': 'Huawei',
            'Leistung': '19,88 kWp',
            'Inbetriebnahme': '10.2020',
            'Bilder': 1
        },{
            'Name': 'Halecker Hünstetten',
            'Ort': '65510 Hünstetten',
            'Text': 'Photovoltaikanlage auf EFH',
            'Module': 'Aleo Solar',
            'Speicher': 'Huawei',
            'Leistung': '9,97 kWp',
            'Inbetriebnahme': '10.2015',
            'Bilder': 4
        /*    
                6.) Lipecky Notstrom
            64665 Alsbach-Hähnlein
            Photovoltaikanlage auf Gewerbebetrieb
            Module: LG Solar
            Wechselrichter: Huawei
            Leistung: 21,3 kWp
            Inbetriebnahme:  10.2020
            
                7.) I20151_Dinges
            63322 Rödermark
            Photovoltaikanlage auf MFH
            Module: LG Solar
            Wechselrichter: Huawei
            Leistung: 15,62 kWp
            Inbetriebnahme: 08.2020
            */
        }
    ];
}
