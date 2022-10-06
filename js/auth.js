\// Listen to auth status changes

auth.onAuthStateChanged(user => {
    let img = document.querySelector("#profile");
    if (!user) {
        let img_name, username;
        document.querySelector("a#room").parentElement.style.display = "block";
        document.querySelector("a#home").parentElement.style.display = "block";
        document.querySelector("a#files").parentElement.style.display = "block";
        document.querySelector('a#sign-out').style.display = "inline-block";
        db.collection('signedinusers').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                if (doc.data().id === user.uid) {
                    storage.ref("users/" + user.uid + `/${doc.data().image_name}`).getDownloadURL().then((imgurl) => {
                        img.src = imgurl;
                        username = doc.data().firstname;
                        img.style.display = "inline-block";
                    })

                    document.querySelector("div.profile span").textContent = doc.data().lastname;
                }
            })
        });
        console.log("User logged in");
        // Chat state
        const chatState = function (page) {

            document.querySelector('.container').innerHTML = `
        <div class="wrapper">
          <div class="chat-rooms">
            < div class = "rooms shows" >
                <
                span class = "select" > Levels: < /span> <
                button id = "Yr1" > Yr1 < /button> <
                button id = "Yr2" > Yr2 < /button> <
                button id = "Yr3" > Yr3 < /button> <
                button id = "Yr4" > Yr4 < /button> <
                button id = "Yr5" > Yr5 < /button>
            </div>
            </div>
          <section class="chat-area">
            <header>
              <img src=${img.src} alt="">
              <div class="details">
                < p class = "user-name" > < /p>
                <p>Active Now</p>
              </div>
              < div class = "side" >
              <i class="fa fa-photo"></i><span>Photo</span>
              </div>
            </header>
            <div class="chat-box">
              
            </div>
            <form class="typing-area" id="sub">
              
              <input type="text" name="message" class="input-field" placeholder="Type a message here..." id="message">
              <button type="submit"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </form>
          </section>
        < /div>
          `;
            // chat instance
            const chatBox = document.querySelector("div.chat-box");
            const rooms = document.querySelector("div.rooms");
            rooms.addEventListener('click', (e) => {
                if (e.target.tagName === "BUTTON") {
                    chatBox.innerHTML = "";
                    chatroom.updateRoom(e.target.id);
                    document.querySelector('div.chat-rooms').style.display = "none";
                    chatroom.getChats(data => {
                        let when;
                        if (data.data().id !== user.uid) {
                            let img;
                            when = dateFns.distanceInWordsToNow(data.data().time.toDate(), {
                                addSuffix: true
                            });

                            chatBox.innerHTML += `
                            <div class="chat incoming">
                                
                                <div class="details">
                                < span class = "name" > $ {
                                        data.data().firstname
                                    } < /span> <
                                    p > $ {
                                        data.data().message
                                    } < /p>
                                <span class="time">${when}</span>
                                </div>
                            </div>`;
                        } else {
                            when = dateFns.distanceInWordsToNow(data.data().time.toDate())

                            chatBox.innerHTML += `
                            < div class = "outgoing chat"
                            data - id = "${data.id}" >
                                <
                                div class = "details" >
                                < p > $ {
                                        data.data().message
                                    } < /p> <
                                    img src = ""
                                id = "user-upload" >
                                < span class = "time" > $ {
                                        when
                                    } < i class = "fa fa-trash-o" > < /i></span >
                                    <
                                    /div> <
                                    /div> 

                            `;
                            document.querySelector('i.fa-trash-o').addEventListener('click', (e) => {
                                if (e.target.className === "fa fa-trash-o") {
                                    console.log('Clicking......');
                                    e.stopPropagation();
                                    let id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
                                    console.log("You clicked me")
                                    chatroom.chats.doc(id).delete();
                                    chatroom.chats.onSnapshot(snap => {
                                        snap.docChanges().forEach(change => {
                                            if (change.type === 'removed') {
                                                //update the ui
                                                document.querySelector('[data-id=' + change.doc.id + ']').remove();
                                            }
                                        });
                                    });

                                }
                            })
                        }
                    })
                }
            }, 0);
            const chatroom = new ChatRoom('Yr1', user.uid);
            chatroom.getChats((data) => {
                let when;
                if (data.data().id !== user.uid) {
                    let img;
                    when = dateFns.distanceInWordsToNow(data.data().time.toDate(), {
                        addSuffix: true
                    });
                    chatBox.innerHTML += `
                <div class="chat incoming">
                <div class="details">
                < span class = "name" > $ {
                        data.data().firstname
                    } < /span> <
                    p > $ {
                        data.data().message
                    } < /p>
                <span class="time">${when}</span>
                </div>
                </div>`;
                } else {
                    document.querySelector('p.user-name').textContent = data.data().firstname;
                    when = dateFns.distanceInWordsToNow(data.data().time.toDate())
                    chatBox.innerHTML += `
                    < div class = "outgoing chat"
                    data - id = "${data.id}" >
                        <
                        div class = "details" >
                    < p > $ {
                            data.data().message
                        } < /p> <
                        span class = "time" > $ {
                            when
                        } < i class = "fa fa-trash-o" > < /i></span >
                        <
                        /div> <
                        /div>

                    `;
                    document.querySelector('div.outgoing div.details').addEventListener('click', (e) => {
                        if (e.target.className === "fa fa-trash-o") {
                            console.log('Clicking......');
                            e.stopPropagation();
                            let id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
                            console.log("You clicked me")
                            chatroom.chats.doc(id).delete();
                            chatroom.chats.onSnapshot(snap => {
                                snap.docChanges().forEach(change => {
                                    if (change.type === 'removed') {
                                        //update the ui
                                        document.querySelector('[data-id=' + change.doc.id + ']').remove();
                                    }
                                });
                            });

                        }

                    })
                }
            })
            const addMsg = document.querySelector('form#sub');
            console.log(addMsg);
            addMsg.addEventListener('submit', (e) => {
                e.preventDefault();
                const message = e.target.message.value.trim();
                chatroom.addChat(message).then(() => {
                    e.target.reset();
                }).catch((err) => {
                    console.log(err);
                })
            }, 0);
        };
        anchors[3].addEventListener('click', (e) => {
            page.change(new chatState);
            location.href = "#sub";
            e.preventDefault();
        });
        document.querySelector('a#join').addEventListener('click', (e) => {
            e.preventDefault();
            page.change(new chatState);
            location.href = "#sub";
            console.log(location.href);
        }, 0);

    } else {
        page.change(new regState);
        console.log("User logged out");
        document.querySelector('a#sign-out').parentElement.style.display = "none";
        img.style.display = "none";
        document.querySelector("div.profile span").textContent = "";
        document.querySelector("a#room").parentElement.style.display = "none";
        document.querySelector("a#files").parentElement.style.display = "none";
        document.querySelector("a#home").parentElement.style.display = "none";
    }
})
// Authentication
function Auth(ele) {
    this.name = "Authentication";
    this.signupEle = ele;
    this.logoutEle = document.querySelector("a#sign-out");
}
Auth.prototype = {
    signup: function () {
        this.signupEle.addEventListener("submit", (e) => {
            e.preventDefault();
            // get the user info
            const firstname = this.signupEle["first-name"].value;
            const lastname = this.signupEle["last-name"].value;
            const email = this.signupEle["email"].value;
            const password = this.signupEle["password"].value;
            const profileimg = this.signupEle["user-img"].files[0];
            console.log(profileimg);
            localStorage.setItem('username-', profileimg.name);
            // sign up user with email and pasword
            auth.createUserWithEmailAndPassword(email, password).
            then(cred => {
                console.log(cred);
                this.signupEle.reset();
                storage.ref('users/' + cred.user.uid + `/${profileimg.name}`).put(profileimg).then(() => {
                    console.log("User profile successfully uploaded");
                })
                // create a firebase collection for signed in users
                db.collection('signedinusers').add({
                    firstname: firstname,
                    lastname: lastname,
                    id: cred.user.uid,
                    image_name: profileimg.name
                });
                setTimeout(() => {
                    page.change(new homeState);
                }, 1500);
            }).catch((err) => {
                document.querySelector('div.error-text').style.display = "block";
                document.querySelector('div.error-text').textContent = err.message;
                setTimeout(() => {
                    document.querySelector('div.error-text').style.display = "none";
                }, 5000);
            })
        }, 0);
    },
    login: function (ele) {
        ele.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = ele["email"].value;
            const password = ele["password"].value;
            console.log(email, password);
            // get users information from the firestore

            auth.signInWithEmailAndPassword(email, password).then((cred) => {

                ele.reset();
                setTimeout(() => {
                    page.change(new homeState);
                }, 1500);
            }).catch((err) => {
                document.querySelector('div.error-text').style.display = "block";
                document.querySelector('div.error-text').textContent = err.message;
                setTimeout(() => {
                    document.querySelector('div.error-text').style.display = "none";
                }, 5000);
            })
        })
    },
    logout: function () {
        this.logoutEle.addEventListener("click", (e) => {
            e.preventDefault();
            auth.signOut();
            setTimeout(() => {
                page.change(new loginState);
            }, 1500);
        }, 0);
    },
}
const authi = new Auth();
authi.logout();