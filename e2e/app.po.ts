import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName('page-one')).element(by.tagName('ion-title')).getText();
  }

  fillInForm(height, weight) {
    element(by.id('height')).element(by.tagName('input')).sendKeys(180);
    element(by.id('weight')).element(by.tagName('input')).sendKeys(90);
    element(by.buttonText('Calculate!')).click();
  };

  result_content() {
    return element(by.id('results')).getAttribute('textContent');
  }

}