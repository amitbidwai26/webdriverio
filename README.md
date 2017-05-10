# WebdriverIO POC for Testing Splunk

## Installation

Clone Repo

```sh
git clone https://github.com/amitbidwai26/webdriverio.git
```

Move to folder webdriverio


```sh
cd webdriverio
```

You must have [Node.js](https://www.nodejs.org/) installed.

```sh
npm install
```

It is considered Java is installed on machine 1.8 version required.

```sh
https://java.com/en/download/
```

## Usage

Install Webdriver.io Depndency one time 

```sh
npm run webdriver install
```

Run/Start the webdriver server:

```sh
npm run weebdriver start
```

Add secret.js file to location webdriverio/test/secret.js
```sh
module.exports = {
	'username' : '*****',
	'password'  : '*****'
};

Replace * with actual username and password.
```

```sh
node test/example.js
```

Open newcommand Window move to project folder

```sh
node test/example.js
```