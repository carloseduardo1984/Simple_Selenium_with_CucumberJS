const {Given, Then, When, Before, After} = require('@cucumber/cucumber')

const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const ChromeDriver = require('chromedriver');
var options   = new chrome.Options().headless();

// SETUP FIREFOX DRIVER 
// const firefox = require('geckodriver');
// const {By, Builder} = require('selenium-webdriver');
// let driver = new Builder()
//          .forBrowser('firefox')
//          .build();

  let driver

Before(function () {
    driver =  new Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    //.setChromeOptions(options)
    .build();    
  })

  After( function() {
    driver.quit();

  })


Given('I visit publicazo homepage', {timeout: 30 * 1000}, function() {  
    
    driver.get("https://demo.guru99.com/Agile_Project/Agi_V1/")
    driver.manage().window().setRect({ width: 1364, height: 718 })
       
          });

When('I search for teste', {timeout: 15 * 1000}, function() { 

    driver.findElement(By.name("uid")).click()
     driver.findElement(By.name("uid")).sendKeys("1303")
     driver.findElement(By.name("password")).click()
     driver.findElement(By.name("password")).sendKeys("Guru99")
        

          });

Then('I should see the results', {timeout: 15 * 1000}, function() { 

    driver.findElement(By.name("btnLogin")).click()
    assert( driver.findElement(By.css(".heading3")).getText() != "Welcome To Customer")
    driver.close()
    
          });