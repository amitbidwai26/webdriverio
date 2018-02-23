var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

function makeemailid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
    {  
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    } 
    
    return text;
  }

function makephoneno(length) {

    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    
    }

for(i=0;i<=40;i++){
    var email =makeemailid(); 
    var phone = makephoneno(10);
    
webdriverio
    .remote(options)
    .init()
    .url("http://employer.kickstartjobs.in/autohire?action=register")
    .setValue('#company_name', email)
    .setValue('#email', email+"@gmail.com")
    .setValue('#phone_number', phone)
    .setValue('#password', phone)
    .click('#signup-button')
    .getUrl()
    .click(".anno-btn")
    .click(".anno-btn")
    .click(".anno-btn")
    .end()
    .catch(function(err) {
        console.log(err);
    });
}