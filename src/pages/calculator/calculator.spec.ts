import { TestBed } from '@angular/core/testing';
import { CalculatorPage } from "./calculator";
import { IonicModule, Platform, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock } from "ionic-mocks";


describe("CalculatorPage", () => {
    let fixture, calculatorpage

    beforeEach(() => {
        TestBed.configureTestingModule( {
            declarations: [ CalculatorPage ],
            imports: [IonicModule.forRoot(CalculatorPage)],
            providers: [
                { provide: Platform, useFactory: () => PlatformMock.instance() },
                { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
                { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
                { provide: NavController, useFactory: () => NavControllerMock.instance() },
                { provide: NavParams, useFactory: () => NavParamsMock.instance() },
            ]
        })
        fixture = TestBed.createComponent(CalculatorPage);
        calculatorpage = fixture.componentInstance;
        calculatorpage.height = 180;
    })

    it('should create a calculator page', () => {
        expect(calculatorpage).toBeTruthy;
        expect(calculatorpage instanceof CalculatorPage).toEqual(true);
    })


    it('calculate should return obese', () => {
        calculatorpage.weight = 190

        calculatorpage.calculateBMI();

        expect(calculatorpage.bmiValue).toEqual(58.64);
        expect(calculatorpage.bmiMessage).toEqual('obese')
    });

    it('calculate should return overweight', () => {
        calculatorpage.weight = 90

        calculatorpage.calculateBMI();

        expect(calculatorpage.bmiValue).toEqual(27.78);
        expect(calculatorpage.bmiMessage).toEqual('overweight')
    });


    it('calculate should return normal', () => {
        calculatorpage.weight = 80

        calculatorpage.calculateBMI();
        expect(calculatorpage.bmiValue).toEqual(24.69);
        expect(calculatorpage.bmiMessage).toEqual('normal weight')
    });

    it('calculate should return underweight', () => {
        calculatorpage.weight = 9

        calculatorpage.calculateBMI();
        expect(calculatorpage.bmiValue).toEqual(2.78);
        expect(calculatorpage.bmiMessage).toEqual('underweight')
    });

    it('calculate should with imperial method', () => {
        calculatorpage.method = 'Imperial'
        calculatorpage.weight = 200

        calculatorpage.calculateBMI();
        expect(calculatorpage.bmiValue).toEqual(4.34);
        expect(calculatorpage.bmiMessage).toEqual('underweight')
    });

    it('should change to imperial on switch method', () => {
        calculatorpage.switchCounting()

        calculatorpage.weightOption = 'pounds';
        calculatorpage.heightOption = 'inches';
        calculatorpage.method = 'Imperial';
        calculatorpage.weight = 0;
        calculatorpage.height= 0;
    })

    it('should change to metric on switch method', () => {
        calculatorpage.method = 'Imperial';
        calculatorpage.switchCounting()

        calculatorpage.weightOption = 'kgs';
        calculatorpage.heightOption = 'cms';
        calculatorpage.method = 'Metric';
        calculatorpage.weight = 0;
        calculatorpage.height= 0;
    })

})