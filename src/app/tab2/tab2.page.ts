import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  styles: [
    `
      .scan-result {
        background-color: #eee;
        padding: 1em;
        font-size: 2em;
      }
    `,
  ],
  providers: [BarcodeScanner],
})
export class Tab2Page {
  scannedText: string;
  format: string;

  constructor(public barcodeScanner: BarcodeScanner) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        if (barcodeData.cancelled) {
          this.setValues('', '(cancelled)');
        } else {
          this.setValues(
            barcodeData.text || '???',
            barcodeData.format || '???'
          );
        }
      })
      .catch((err) => {
        this.setValues(`Error ${err}`, '');
      });
  }

  clear() {
    this.setValues('', '');
  }

  setValues(s, f) {
    this.scannedText = s;
    this.format = f;
  }
}
