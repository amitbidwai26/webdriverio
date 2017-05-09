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
    .setValue('#password', secret.password)
    .click('#login-submit')
    .getUrl().then(function(url) {
        console.log('\n--------------------After Login Success------------------\n' + url);

    })
    .timeoutsImplicitWait(5000)
    .url('https://www.splunk.com/index.php?module=roles&func=account')
    .click('.glyphicon-user')
    .getUrl().then(function(url) {
        console.log('\n---------------- to Dashboard ------------------\n' + url);
    })
    .url('https://www.splunk.com/index.php?module=roles&func=account')
    .getUrl().then(function(url) {
        console.log('\n---------------- to Dashboard ------------------\n' + url);
    })
    .timeoutsImplicitWait(5000)
    .url('https://www.splunk.com/en_us/search.html?query=splunk')
    .getUrl().then(function(url) {
        console.log('\n---------------- Moving to Search Page ------------------\n' + url);
    })
    .setValue('#searchBox', 'splunk document')
    .getUrl().then(function(url) {
        console.log('\n----------------Change Query toSplunk Document ------------------\n' + url);
        for (i=0;i<300000;i++){
            for (j=0;j<30000;j++){
                return;
            }
        }
    })
    
