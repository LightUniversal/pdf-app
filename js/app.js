
// onload
const states = new States();
const htmlelements = new HtmlElements();
const cachedContainerChildren = htmlelements.container.children;
document.addEventListener('DOMContentLoaded', (e) => {
  states.register();
  // htmlelements.container.innerHTML = states.html;
  console.log(htmlelements.container.children, cachedContainerChildren);
  const usersfields = new UsersFields();
  const auth = new AuthenticateUser();
  console.log(usersfields.firstname);

  function regex(val) {
    // name validation 



  }
  // when use submit without auth
  auth.signup();
  console.log(auth.registerUser);
}, 0);

// states
function PageStates() {
  return {
    states: ['register', "logout", "dashboard", "userprofile", "message", "login", "files", "order", "saved", "settings"],
    registerUser: function () {
      console.log('User is registered')
    }
  }
}

function HtmlElements() {
  this.getSingleElement = (attr) => {
    return document.querySelector(attr);
  }
  this.container = this.getSingleElement('.box');
}

function States() {
  this.html;
  this.name;
  this.register = function () {
    
      if (state === "register") {
        this.name = state;
        console.log('In the ' + this.name + ' page');
        this.html = `
        <div class="wrapper">
    <section class="form signup">
      <header>Realtime Chat App</header>
      <form id="form" autocomplete="off">
        <div class="error-text">kkk</div>
        <div class="name-details">
          <div class="field input">
            <label>First Name</label>
            <input type="text" name="firstname" id="first-name" placeholder="First name" required>
          </div>
          <div class="field input">
            <label>Last Name</label>
            <input type="text" name="lastname" placeholder="Last name" required>
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
          <input type="file" name="image" id="user-img" accept="image/x-png,image/gif,image/jpeg,image/jpg" required>
        </div>
        <div class="field button">
          <input type="submit" name="submit" value="Register">
        </div>
      </form>
      <div class="link">Already signed up? <a href="#">Login now</a></div>
    </section>
  </div>
     
        `
      }
      function Login() {
        this.name = state;
        console.log("Now in the " + state + " state");
        this.html = `
        <div class="wrapper">
          <section class="form login">
            <header>Realtime Chat App</header>
        <form action="#" autocomplete="off">
          <div class="error-text"></div>
          <div class="field input">
            <label>Email Address</label>
            <input type="text" name="email" placeholder="Enter your email" required>
            <i class="fa fa-envelope"></i>
          </div>
          <div class="field input">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" required>
          <i class="fa fa-eye"></i>
        </div>
        <div class="field button">
          <input type="submit" name="submit" value="Login">
        </div>
      </form>
      <div class="link">Not yet signed up? <a href="#">Signup now</a></div>
    </section>
  </div>
        `
      }
      if (state === "messages") {
        this.html = `
            <div class="wrapper">
              <section class="chat-area">
                <header>
                  <a href="#" class="back-icon"><i class="fa fa-arrow-left"></i></a>
                  <img src="imgs/pic.jpg" alt="">
                  <div class="details">
                    <p>Solver</p>
                    <p>Active Now</p>
                  </div>
                  <div class="side">
                  <i class="fa fa-photo"></i><span>Photo</span>
                  </div>
                </header>
                <div class="chat-box">
                  <div class="outgoing chat">
                    <div class="details">
                      <p>Hello Everyone in the house</p>
                    </div>
                  </div>
                  <div class="chat incoming">
                    <img src="imgs/pic.jpg" alt="#">
                    <div class="details">
                      <p>Hello Everyone in the house</p>
                    </div>
                  </div>
                  <div class="chat incoming">
                    <img src="imgs/pic.jpg" alt="#">
                    <div class="details">
                      <p>Hello Everyone in the house</p>
                    </div>
                  </div>
                  <div class="chat incoming">
                    <img src="imgs/pic.jpg" alt="#">
                    <div class="details">
                      <p>Hello Everyone in the house</p>
                    </div>
                  </div>
                </div>
                <form action="#" class="typing-area">
                  
                  <input type="text" name="message" class="input-field" placeholder="Type a message here..." autocomplete="off">
                  <button><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                </form>
              </section>
          </div>
          `
      }
}}