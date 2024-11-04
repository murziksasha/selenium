const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(new chrome.Options())
  .build();

async function runTests() {
  try {
    await driver.get('https://pictures-of-life.online/auth/signup');

    // Wait until the username field is present before interacting with it
    let usernameField = await driver.wait(
      until.elementLocated(By.id('Username-id')),
      10000 // wait up to 10 seconds
    );
    await usernameField.sendKeys('abc');

    // Move to the next field to trigger validation
    let emailField = await driver.findElement(By.id('Email-id'));
    await emailField.click();

    // Wait for the validation error to appear
    await driver.wait(until.elementLocated(By.css('.ControlledTextField_error__bKRxF')), 5000);

    // Get the validation error message
    let errorMsg = await driver.findElement(By.css('.ControlledTextField_error__bKRxF')).getText();
    console.log('Validation error for username:', errorMsg);

    await driver.sleep(3000);

  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await driver.quit();
  }
}

runTests().catch(console.error);
