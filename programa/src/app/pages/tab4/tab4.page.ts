import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProgramasService } from 'src/app/services/programas.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  latitud: number;
  longitud: number;

  constructor(private qrScanner: QRScanner,
    private route: ActivatedRoute,
    private barcodeScanner: BarcodeScanner,
    private datalocal: ProgramasService) { }

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  ionViewDidEnter() {
    // console.log('viewDidEnter');
  }

  ionViewDidLeave() {
    // console.log('viewDidLeave');
  }

  ionViewWillEnter() {
    // console.log('viewWillEnter');
    this.scan();
  }

  ionViewWillLeave() {
    // console.log('viewWillLeave');
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if (!barcodeData.cancelled) {
        this.datalocal.guardarRegistro(barcodeData.format, barcodeData.text);
      }
    }).catch(err => {
      console.log('Error', err);
      this.datalocal.guardarRegistro('QRCode', 'geo:5.031389,-75.451262');
    });
  }

  ngOnInit() {

    //let geo: any = this.route.snapshot.paramMap.get('geo');
    //geo = geo.subscribe(4);
    //geo = geo.split(',');
    //this.latitud = geo[0];
    //this.longitud = geo[1];
    //console.log(this.latitud, this.longitud);

    /*this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));*/
  }

}
