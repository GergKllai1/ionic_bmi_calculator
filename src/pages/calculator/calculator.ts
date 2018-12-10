import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;
  counting: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calculateBMI(){
    if( this.weight > 0 && this.height > 0 ) {
      let calculation = this.weight / ( this.height / 100 * this.height / 100 );
      this.bmiValue = parseFloat( calculation.toFixed( 2 ) );
      this.setBMIMessage();
    }
  }

  private setBMIMessage() {
    if ( this.bmiValue < 18.5 ) {
      this.bmiMessage = "underweight"
    }
    else if ( this.bmiValue > 18.5 && this.bmiValue < 25 ) {
      this.bmiMessage = "normal weight"
    }
    else if ( this.bmiValue > 25 ) {
      this.bmiMessage = "overweight"
    }
    else if ( this.bmiValue > 30 ) {
      this.bmiMessage = "obese"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

}
