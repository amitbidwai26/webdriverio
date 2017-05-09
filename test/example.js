
var webdriverio = require('webdriverio');
var secret = require('./secret.js')
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
client
    .init()
    .url('https://www.splunk.com/en_us/homepage.html')
    .click('.glyphicon-user')
    .timeoutsImplicitWait(5000)
    .url('https://login.splunk.com/index.php?module=roles&func=showloginform&redirecturl=https://www.splunk.com/')
    .setValue('#username', secret.username)
    .setValue('#password', secret.password )
    .click('#login-submit')
    .getUrl().then(function(url){
        console.log('After Login////////////////////' + url);    
        })
    .url('https://www.splunk.com/index.php?module=roles&func=account')
    .click('.glyphicon-user')
    .getUrl().then(function(url){
        
        console.log('3 rd URL ***********' + url);    
        })
    .url('https://www.splunk.com/index.php?module=roles&func=account')
    .timeoutsImplicitWait(5000)
    .url('https://www.splunk.com/en_us/search.html?query=splunk')
    .timeoutsImplicitWait(500000)
    .setValue('#searchBox', 'splunk document')
    .waitUntil(function () {
        console.log('Search Document block')
         }, 500000)
