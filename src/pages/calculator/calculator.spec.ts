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
    })

    it('should create a calculator page', () => {
        expect(calculatorpage).toBeTruthy;
        expect(calculatorpage instanceof CalculatorPage).toEqual(true);
    })

    it('should have a calculator function', () => {
        spyOn(calculatorpage, 'calculateBMI');

        calculatorpage.calculateBMI();

        expect(calculatorpage.calculateBMI).toHaveBeenCalled();
    });

    it('calculate should return obese', () => {
        calculatorpage.height = 180
        calculatorpage.weight = 190

        calculatorpage.calculateBMI();

        expect(calculatorpage.bmiValue).toEqual(58.64);
        expect(calculatorpage.bmiMessage).toEqual('obese')
    });

    it('calculate should return overweight', () => {
        calculatorpage.height = 180
        calculatorpage.weight = 90

        calculatorpage.calculateBMI();

        expect(calculatorpage.bmiValue).toEqual(27.78);
        expect(calculatorpage.bmiMessage).toEqual('overweight')
    });


    it('calculate should return normal', () => {
        calculatorpage.height = 180
        calculatorpage.weight = 80

        calculatorpage.calculateBMI();
        expect(calculatorpage.bmiValue).toEqual(24.69);
        expect(calculatorpage.bmiMessage).toEqual('normal weight')
    });

    it('calculate should return underweight', () => {
        calculatorpage.height = 180
        calculatorpage.weight = 9

        calculatorpage.calculateBMI();
        expect(calculatorpage.bmiValue).toEqual(2.78);
        expect(calculatorpage.bmiMessage).toEqual('underweight')
    });



})