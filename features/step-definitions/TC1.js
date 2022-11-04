const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
let Assert = require('assert')

Before(function () {
    console.log('Inside Before')
});

After(function () {
    console.log('Inside After')
   
});

When('I add {int} and {int}', function (int, int2) {
   
    const result = int + int2   
    console.log('Numbers ' + int + '+' + int2 + ' = ' + result)

});


Then('the result should be {int}', function (int) {

    Assert.equal('7', int)
    console.log('Test2')

});
