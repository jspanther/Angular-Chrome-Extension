# JSPanther Chrome Extension with Angular

Hey Folks :wave:

Hope you all are doing great in your development journeys. 
In this lockdown period, JSPanther decided to launch a simple and fun way to create something new that will gonna add something new in your skill set. And you know what, you don't have to sit for hours in front of the screen for this, you just need few minutes to launch your whole new Chrome Extension with the help of JSPanther :slightly_smiling_face:

## What are you going to achieve ?
After completing all the steps mentioned here, you all are going to be proficient in creating the Chrome Extensions with Angular such as it is going to be a game of minutes for you :hourglass_flowing_sand:	

## Things you gonna need ?
* ### Angular CLI 
    It's a command line interface for Angular. You can install it by following the instructions from [here](https://cli.angular.io/)
    #### Why Angular CLI needed :
    Technically, you’re not required to use Angular CLI to develop an Angular application, but its many features can highly       improve the quality of your code and automate your development workflow eventually save you a lot of time along the way .
* ### Chrome Web Browser
    A more simple, secure, and faster web browser than ever, with Google's smarts built-in. You will going to need it to test the extension locally before launching it to the Chrome Extension Web Store. You can install it from [here](https://www.google.com/chrome/)

## Let's begin the process

So, lets buckle up to start the small but adventurous journey of making a <strong>Chrome Extension with Angular</strong>:rocket:

### Step 1 (Create Angular App)
Create a new App with Angular CLI using ["ng new <app-name>"](https://angular.io/cli/new) command such as:
![JSPanther_Angular_App](https://github.com/jspanther/Angular-Chrome-Extension/blob/master/src/assets/img/first.png)
  
### Step 2 (Run Angular App)
Now, we need to switch to the project directory using command "cd /project-directory". We can check the directory content by running "ls" command and now we can run our Angular application by running ["ng serve"](https://angular.io/cli/serve) such as:
![JSPanther_Angular_App](https://github.com/jspanther/Angular-Chrome-Extension/blob/master/src/assets/img/second.png)

After this, you can check the URL "localhost:4200" in your browser and home page looks like this:
![JSPanther_Angular_App](https://github.com/jspanther/Angular-Chrome-Extension/blob/master/src/assets/img/third.png)

### Step 3 (Update Content)
Now, you can update your content of src/app files such as:
* <strong>"src/app/app.component.html"</strong>
```ts
  <div id="bgContainer" style="text-align:center" [style.background-image]="'url('+bgImageVal+')'"></div>
```
* <strong>"src/app/app.component.ts"</strong>
```ts
  import { Component } from '@angular/core';
  import { Http } from '@angular/http';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    // call to Unsplash API to get Awesome Nature Pictures
    bgImageVal = 'https://source.unsplash.com/1600x900/?nature,water';
  }
```
* Add this little piece of CSS in your <strong>"src/index.html"</strong>
```ts
   <style type="text/css">
   /*  Awesome Styling Stuff Goes Here */
   body {
     margin: 0 !important;
     padding: 0 !important;
   }
   
   #bgContainer {
     height: 100%;
     width: 100%;
     position: absolute;
   }
  </style>
```
After updating all the above pages, let Angular CLI run it's magic and let the App get refreshed automatically. Now, your Angular App Home page will look like this:
![JSPanther_Angular_App](https://github.com/jspanther/Angular-Chrome-Extension/blob/master/src/assets/img/fourth.png)

### Step 4 (Make Build)
Now, we need to make a build of our Angular Application by running the command ["ng build"](https://angular.io/cli/build)
![JSPanther_Angular_App](https://github.com/jspanther/Angular-Chrome-Extension/blob/master/src/assets/img/fifth.png)

### Step 5 (Create Manifest.json)
After successfully creating the build of the project, we need to create the manifest.json inside our /dist folder. Manifest file should be in the same folder as the "index.html" inside /dist. <strong>Manifest.json</strong> file tells Chrome important information about your extension, like its name and which permissions it needs.

<strong>"dist/JSPantherExtension"</strong>
```ts
  {

    "manifest_version": 2,
    "name": "JsPanther",
    "description": "Hi, I am a JsPanther Chrome extension build with Angular serving awesome nature wallpapers on New Tab :)",
    "version": "0.0.1",
    "browser_action": {
    "default_icon": "favicon.png"
    },
    "icons": { "16": "./icons/icon16.png",
               "48": "./icons/icon48.png",
               "72": "./icons/icon72.png",
               "120": "./icons/icon120.png",
               "144": "./icons/icon144.png" 
    },
    "chrome_url_overrides" : {
	    "newtab" : "./index.html"
	 },
    "permissions": [],
    "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
   
}
```

### Step 6 (Add Favicon.ico ,Icons and Logo)
Now, you can add icons and logo and favicon.ico to your dist folder as shown here : [JSPanther_Chrome_Extension_dist](https://github.com/jspanther/Angular-Chrome-Extension/tree/master/dist/chromeExtension)

### Step 7 (Locally Unpack Chrome Extension)
Go to <strong>"More tools"</strong> in Google Develope Tools and then click on <strong>Extensions</strong>. After that, enable the "Developer Mode" on Extensions Page. Now, click on <strong>"Load Unpacked"</strong> and now browse to your manifest.json path and Google will install your unpacked extension to your Chrome browser and you can test that locally :nerd_face: 

### Step 8 (Zip Extension Package)
After successfully testing the Chrome Extension locally, we will going to make the ZIP of the entire dist folder as we need to upload that ZIP extension package to [Google Chrome Web Store](https://chrome.google.com/webstore/category/ext/11-web-development) to launch our extension.

### Step 9 [Registration as Chrome Web Store Developer]
Let's regsiter as a [Chrome Web Store Developer](https://chrome.google.com/webstore/devconsole/register?hl=en-GB) as need that authrity to launch our Extension on Chrome Web Store. We need to agree on the terms and policies for that and have to pay a registration fee of $5 to Google Chrome.
![JSPanther_Chrome_Extesnion](https://github.com/jspanther/Angular-Chrome-Extension/blob/master/src/assets/img/sixth.png)

### Step 10 (Package Upload)
Woahh! You are all set to upload your zipped extension Package to Chrome Web Store. You can also add "Pricing and Distribution" and Privacy Policies with your extension package in this section. After completing all the steps:
* <strong>Package</strong>          - You can update versions of your extension package here.
* <strong>Store Listing</strong>    - You can update descripton and images of your extension package here.
* <strong>Privacy</strong>          - You need to declare here if you are using any Remote API's.
* <strong>Pricing and Distribution</strong>   - You can manage the visibility and distribution of your extension here.
* <strong>Stats</strong>            - You can check the daily statistics graph of your extension with some cool filters.
* <strong>Ratings</strong>          - You can check Ratings over time of your extension in this section.

After, completing all of the above mentioned steps, save all the steps in <strong>Draft</strong> and lets jump to the next step.

### Step 11 (Publish Extension)
Final Step: Click on <strong>Publish</strong>

<strong>Voila!!! Your Chrome Extension Published Successfully</strong> :tada:

Now, Chrome Web store will review your package once and after a couple of minutes, you will be able to check your extension on "Chrome Extension Web Store" and anybody from Worldwide can add your Chrome Extension from here.

## JSPanther's Chrome Extension on Google WEB Store

![JSPanther_Chrome_Extesnion](https://github.com/jspanther/Angular-Chrome-Extension/blob/master/src/assets/img/JSPanther_screen.png)
You can check out JSPanther's Chrome Extension on [Chrome Web Store](https://chrome.google.com/webstore/category/extensions?hl=en) by searching "JSPanther". If you like it then please <strong>[Add To Chrome](https://chrome.google.com/webstore/detail/jspanther/ndcjllhdgddojandognggpbnfdjiomfn?hl=en)</strong> and it will give you an awesome nature wallpaper on every new tab on Chrome.<strong>Enjoy the Nature</strong>:shamrock:

## Refrences

* [Unsplash](https://unsplash.com/)
* [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en)

## Oh, Thanks!
By the way... thank you! And if you'd like to [say thanks](https://saythanks.io/to/jspantherbd%40gmail.com)... :) 

#### Happy Coding ✨🍰✨
