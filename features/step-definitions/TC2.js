const {Given, Then, When, Before, After} = require('@cucumber/cucumber')

const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const Chrome = require('chromedriver');
var options   = new chrome.Options().headless();

const firefox = require('geckodriver');

// SETUP FIREFOX DRIVER 
// const firefox = require('geckodriver');
// const {By, Builder} = require('selenium-webdriver');
// let driver = new Builder()
//          .forBrowser('firefox')
//          .build();

  let driver
  
  before

Before(function () {
  
        // Microsoft uses a longer name for Edge
        let browser = process.env.BROWSER;
        if (browser == 'firefox') { browser = 'Firefox'; }
        if (browser == 'chrome') { browser = 'Chrome'; }

        // Connect to service specified in env variable or default to 'selenium'
        const host = process.env.SELENIUM || 'selenium';

        driver = new Builder()
            .forBrowser(browser)
            .build();  
  })

  After( function() {
    driver.quit();

  })


Given('usuario acessa menu de cadastro novamente', {timeout: 30 * 1000}, function() {  
    
    driver.get("https://demo.guru99.com/Agile_Project/Agi_V1/")
    driver.manage().window().setRect({ width: 1364, height: 718 })
       
          });

When('preenche campos com exemplos {string},{string},{string} e confirmacao', {timeout: 15 * 1000}, function (string, string2, string3) { 

    driver.findElement(By.name("uid")).click()
     driver.findElement(By.name("uid")).sendKeys("1303")
     driver.findElement(By.name("password")).click()
     driver.findElement(By.name("password")).sendKeys("Guru99")
        

          });

Then('o sistema exibe uma mensagem de sucesso para cada exemplo', {timeout: 15 * 1000}, function() { 

    driver.findElement(By.name("btnLogin")).click()
    assert( driver.findElement(By.css(".heading3")).getText() != "Welcome To Customer")
    driver.close()
    
          });
