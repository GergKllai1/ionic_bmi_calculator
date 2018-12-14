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
})