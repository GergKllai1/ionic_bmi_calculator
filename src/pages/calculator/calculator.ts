import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { empty } from 'rxjs/Observer';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: any;
  weightOption: string;
  heightOption: string;
  method: string;
  switcher: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.weightOption = 'kg';
    this.heightOption= 'cm';
    this.method = 'Metric';
    this.switcher = false;
  }

  calculateBMI(){
    this.switcher = true
    if( this.weight > 0 && this.height > 0 ) {
      let calculation;
      if(this.method == "Metric"){
        calculation = this.weight / ( this.height / 100 * this.height / 100 );
      }else if (this.method == "Imperial") {
        calculation = this.weight * 703 / ( this.height * this.height );
      };
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

  switchCounting() {
    this.switcher = false
    if(this.method == 'Metric') {
      this.weightOption = 'pounds';
      this.heightOption = 'inches';
      this.method = 'Imperial';
      this.weight = 0;
      this.height= 0;
    }else{
      this.weightOption = 'kgs';
      this.heightOption = 'cms';
      this.method = 'Metric';
      this.weight = 0;
      this.height= 0;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

}
