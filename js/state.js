// State pattern is used to change the current state of an object within a particular object.
// We have a page object, the states of the objects inside the page object defines the state of the page object.
// ceate a page constructor function
const PageState = function () {
  // This is page state.
  // what is the current state of the page
  let currentState = new homeState(this);
  // initiate a change by call the change function
  this.init = function () {
    this.change(new homeState);
  };
  this.change = function (state) {
    currentState = state;
  };
};
// Home state
const homeState = function (page) {

  document.querySelector('.container').innerHTML = `<section class="home-cards">
            <div data-aos="fade-down">
              <img src="imgs/math.jpg" alt="">
              <h3> Engineering Mathematics</h3>
              <p>
               John Bird
                Sixth Edition.
                This material is avaliable for download.
              </p>
              
              <span>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-half-o"></i>
              </span>
                  <a href="#">Download <i class="fa fa-download"></i></a>
            </div>
            <div data-aos="fade-up">
               <img src="imgs/bird.jpg" alt="" />
              <h3>Circuit Theory
              </h3>
              <p>
              Electrical Circuit Theory and Technology For Electrical and Electronics related courses, avaliable for download.
              </p>
               <span>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
              </span>
              <a href="#">Download <i class="fa fa-download"></i></a>
            </div>
            <div data-aos="fade-down">
              <img src="imgs/ENGINEERING-MATHEMATICS-BY-K-A-STROUD-pdf.jpg" alt="" />
              <h3>Save $150 + free controller</h3>
              <p>
                Engineering Mathematics by K.A Stroud. Starting at $349.
              </p>
              <a href="#">Shop Now <i class="fa fa-shopping-cart"></i></a>
            </div>
            <div data-aos="fade-up">
              <img src="https://i.ibb.co/G57P0Pb/card4.png" alt="" />
              <h3>The new Microsoft Edge</h3>
              <p>
                Expect more. World class performance, with more privacy, more
                productivity, and more value.
              </p>
              <a href="#">Shop Now <i class="fa fa-shopping-cart"></i></a>
            </div>
          </section>
      
          <!-- Xbox -->
          <section class="xbox">
            <div class="content">
              <h2>Search PDF Files.</h2>
              <p>Read as many book as possible at your disposal. Get yourself ready for any exam....</p>
                <a href="#" class="btn">
                  Get Started<i class="fa fa-link"></i>
                </a>
            </div>
          </section>
      
          <!-- Home cards 2 -->
            <section class="home-cards">
              <div>
                <img src="imgs/Chemistry-Lab-Report-2.jpg" alt="" />
                <h3>Chemistry Lab ICH 112</h3>
                <p>
                  Unleash the power of your the finest analysis.
                </p>
                <a href="#">Shop Now <i class="fa fa-shopping-cart"></i></a>
              </div>
              <div>
                <img src="https://i.ibb.co/mGZcxcn/card6.jpg" alt="" />
                <h3>Unlock the power of learning</h3>
                <p>
                  Get students future-ready with Best practice in web development. Starting at $219.
                </p>
                <a href="#" id="join">Join <i class="fa fa-link"></i></a>
              </div>
              <div>
                <img src="https://i.ibb.co/NpPvVHj/card7.png" alt="" />
                <h3>Windows 10 Enterprise</h3>
                <p>
                  Download the free 90-day evaluation for IT professionals.
                </p>
                <a href="#">Download Now <i class="fa fa-download"></i></a>
              </div>
              <div>
                <img src="https://i.ibb.co/LkP4L5T/card8.png" alt="" />
                <h3>Explore Kubernetes</h3>
                <p>
                  Learn how Kubernetes works and get started with cloud native app
                  development today.
                </p>
                <a href="#">Get Started <i class="fa fa-hourglass-start"></i></a>
              </div>
            </section>
            
            <!-- Carbon -->
            <section class="carbon dark">
              <div class="content">
                <h2>Read Books online</h2>
                <p>Get and read almost all the pdf availabe to you. You can download free ones, read them online otherwise, and become the best student you desire to be, for knowledge is power.</p>
                  <a href="#" class="btn files" id="enter">
                    Enter <i class="fa fa-chevron-right"></i>
                  </a>
              </div>
            </section>
      
            <!-- Follow -->
            <section class="follow">
              <p>Follow Us@</p>
              <a href="https://www.facebook.com/display.codigy">
                <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook">
              </a>
              <a href="https://www.facebook.com/display.codigy">
                <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter">
              </a>
              <a href="https://www.facebook.com/display.codigy">
                <img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin">
              </a>
            </section>
          </div>
            <!-- Footer -->
            <footer class="footer">
              <div class="footer-inner">
                <ul>
                <li><a href="#">Lucan, Trademarks<i class="fa fa-globe fa-2x"></i>Nigeria</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#" id="support-us">For your website development, click the support section.</a></li>
                <li><a href="#">&copy; LME 2020</a></li>
                </ul>
              </div>
            </footer>
            `;
};
//pdf state
const pdfreadState = function (page) {
  document.querySelector('.container').innerHTML = `
            <div class="pdf-top">
              <div>
                <button class="btn" id="prev">
                  <i class="fa fa-arrow-circle-left"></i> Prev Page
                </button>
                <button class="btn" id="next">
                    <i class="fa fa-arrow-circle-right"></i> Next Page
                </button>
                
                <br>
                <span class="page-info"> Page <span class="page-num"></span> of <span id="page-count"></span></span>
              </div>
            </div>
            <canvas id="pdf-render">
    
            </canvas>
        `;

}
// contact state
const contactState = function (page) {
  document.querySelector('.container').innerHTML = `
        <div class="contact">
          <div class="cont-box">
            <div class="about">
              <h3>Phone</h3>
              <p><i class="fa fa-phone"></i> <a href="tel:+2347058032078">(+234) 7058032078 </a>
              </p>
              <p class="dets">Do you have any project in mind, and needed a guide, call us today
              <br>
              <a href="sms:+2347058032078"><i class="fa fa-envelope"></i> sms</a> <span class="msg">Send us message for any feedback
              </p>
              
            </div>
            <div class="support">
              <h3>Mail us</h3>
              <p><i class="fa fa-envelope"></i> <a href="mailto:lightsinfo78@gmail.com">lightsinfo78@gmail.com</a>
              </p>
              <p class="dets">If you would consider a support, call us for the account details</p>
            </div>
            <div class="follow-us">
              <h3>Follow us</h3>
              <p><a href="#" class="facebook"><i class="fa fa-facebook"></i></a><a href="#" class="insta"><i class="fa fa-instagram"></i></a><a href="#" class="git"><i class="fa fa-github"></i></a>
              </p>
              <p class="dets">Follow us everywhere we go, we give the required information.</p>
            </div>
          </div>
        </div>
      `
}
// files
const fileState = function (page) {
  document.querySelector('.container').innerHTML = `
      <div class="home-cards materials" data-aos="fade-down">
        <div>
          <img src="imgs/9k=.jpg" alt="">
          <h3>Fliud Mechanics</h3>
          <p>
            Engineering Mathematics covers the basic introduction Engineering discipline and also some advanced topics
              <br>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
          <a href="../docs/Practical Node.js.pdf">Download <i class="fa fa-download"></i></a>
          </p>
        </div>
        <div data-aos="fade-up">
          <img src="imgs/st.jpeg" alt="" />
          <h3>Strength of Materials</h3>
          <p>
            Express yourself powerfully with a thin, light, and elegant design,
            faster performance, and up to 11.5 hours battery life.
            <br>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-half-o"></i>
            <a href="../docs/Practical Node.js.pdf">Download <i class="fa fa-download"></i></a>
          </p>
        </div>
        <div data-aos="fade-up">
          <img src="imgs/eng-1.jpg" alt="" />
          <h3>New Surface Laptop 3</h3>
          <p>
            Express yourself powerfully with a thin, light, and elegant design,
            faster performance, and up to 11.5 hours battery life.
            <br>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-half-o"></i>
            <a href="../docs/Practical Node.js.pdf" download class="download">Download <i class="fa fa-download"></i></a>
          </p>
        </div>
        <div data-aos="fade-down">
          <img src="imgs/eng-1.jpg" alt="" />
          <h3>New Surface Laptop 3</h3>
          <p>
            Express yourself powerfully with a thin, light, and elegant design,
            faster performance, and up to 11.5 hours battery life.
            <br>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-half-o"></i>
            <a href="#" data-id="../docs/Front-end Developer Handbook 2019.pdf" class='read'>Read Text</a>
          </p>
        </div>
        <div>
          <img src="imgs/eng-1.jpg" alt="" />
          <h3>New Surface Laptop 3</h3>
          <p>
            Express yourself powerfully with a thin, light, and elegant design,
            faster performance, and up to 11.5 hours battery life.
            <br>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-half-o"></i>
            <a href="#" class="read" data-id="../docs/practical Node.js.pdf">Read Text</a>
          </p>
        </div>
      </div>
      `;
  const pdf = new pdfState();
  pdf.openreaderPage();
  console.log(pdf.activatepdfstates);
}
// Login state
const loginState = function (page) {
  document.querySelector('.container').innerHTML = `
          <div class="wrapper">
          <section class="form login">
            <header>Realtime Chat App</header>
            <form action="#" id="form" autocomplete="off">
              <div class="error-text"></div>
              <div class="field input">
                <label>Email Address</label>
                <input type="text" name="email" id="email" placeholder="Enter your email" required>
                <i class="fa fa-envelope"></i>
              </div>
              <div class="field input">
                <label>Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" required>
              <i class="fa fa-eye"></i>
            </div>
            <div class="field button">
              <input type="submit" name="submit" value="Login">
            </div>
        </form>
      <div class="link">Not yet signed up? <a href="#" id="log-reg">Signup now</a></div>
    </section>
    </div>
          `;
  simpleActs(document.querySelector("#log-reg"));
  const authi = new Auth();
  authi.login(document.querySelector("form#form"));
}
// About state
const regState = function (page) {
  document.querySelector('.container').innerHTML = `<div class="wrapper">
            <section class="form signup">
              <header>Realtime Chat App</header>
              <form id="form" autocomplete="off">
                <div class="error-text">kkk</div>
                <div class="name-details">
                  <div class="field input">
                    <label>First Name</label>
                    <input type="text" name="firstname" id="first-name" placeholder="First name">
                  </div>
                  <div class="field input">
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Last name" id="last-name">
                  </div>
                </div>
                <div class="field input">
                  <label>Email Address</label>
                  <input type="email" name="email" id="email" placeholder="Enter your email" required="required">
                  <i class="fa fa-envelope"></i>
                </div>
                <div class="field input">
                  <label>Password</label>
                  <input type="password" name="password" id="password" placeholder="Enter new password" required>
                  <i class="fa fa-eye"></i>
                </div>
                <div class="field image">
                  <label>Select Image</label>
                  <input type="file" name="image" id="user-img" accept="image/x-png,image/gif,image/jpeg,image/jpg">
                </div>
                <div class="field button">
                  <input type="submit" name="submit" value="Register">
                </div>
              </form>
              <div class="link">Already signed up? <a href="#" id="reg-log">Login now</a></div>
            </section>
          </div>
             
            `;
  const authi = new Auth(document.querySelector("#form"));
  // console.log(authi.signupEle);
  authi.signup();
  simpleActs(document.querySelector("#reg-log"));
}


// instantiate the page state
const page = new PageState();

page.init();
// Add events
const anchors = document.querySelectorAll('ul.main-menu a');

anchors[0].addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

anchors[1].addEventListener('click', (e) => {
  page.change(new regState);

  e.preventDefault();
});
anchors[2].addEventListener('click', (e) => {
  page.change(new loginState);

  e.preventDefault();
});
anchors[4].addEventListener('click', (e) => {
  page.change(new fileState);

  e.preventDefault();
});
document.querySelector('a#enter').addEventListener('click', (e) => {
  e.preventDefault();

  page.change(new fileState);

});
anchors[5].addEventListener('click', (e) => {
  page.change(new contactState);
  e.preventDefault();
});
document.querySelector('a#support-us').addEventListener('click', (e) => {
  page.change(new contactState);
  e.preventDefault();
});
document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-bars') || e.target.parentElement.parentElement.classList.contains('main-menu')) {
    document.querySelector('.main-menu').classList.toggle('show');
  }
});