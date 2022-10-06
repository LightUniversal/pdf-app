// Chat room
function ChatRoom(room, id) {
    this.room = room;
    this.firstname;
    this.chats = db.collection('signedinusers');
    this.unsub;
    this.id = id;
    this.lastname;
    this.peletotarget = document.querySelector('div.wrapper');
}

ChatRoom.prototype = {
    addChat: async function (message) {
        // chat format
        const now = new Date();
        const chat = {
            message, //using es6 to shorten it
            room: this.room,
            time: firebase.firestore.Timestamp.fromDate(now),
        };
        this.chats.get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                if (doc.data().id === this.id) {
                    chat.firstname = doc.data().firstname;
                    chat.lastname = doc.data().lastname;
                    chat.id = doc.data().id;
                    chat.image_name = doc.data().image_name
                    //save the object to the collection created
                }
            });
            this.chats.add(chat);
        })
        //when the user has submitted the chat
        // const response = await this.chats.add(chat);
        // return response;

    },
    getChats: function (callback) {
        this.unsub = this.chats.
        where("room", '==', this.room)
            .orderBy('time').onSnapshot(snap => {
                snap.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        //update the ui
                        callback(change.doc);
                    }
                });
            });
    },

    //update room
    updateRoom: function (room) {
        this.room = room;
        //we need to update the listener so that when the changes are made it should reflect for the particular change for the room property
        //in order to refer to this particular room, we must check if currently there is a room in subscription
        if (this.unsub) {
            this.unsub();
        }
    }
}