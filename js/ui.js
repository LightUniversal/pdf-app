function simpleActs(ele) {
    ele.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.id == "reg-log") {
            page.change(new loginState);
        }
        if (e.target.id === "log-reg") {
            page.change(new regState);
        }

    }, false);
}
//Upload image to the group
function uploadImage(ele, user) {
    let input;
    ele.addEventListener("click", (e) => {
        e.preventDefault();
        input = document.querySelector(`${ele.className} input`);
        // active the input
        if (input.active) {
            let img = input.files[0];
            setTimeout(() => {
                storage.ref('users/' + cred.user.uid + `/${img.name}`).put(img).then(() => {
                    console.log("Photo uploaded successivelly");
                });
            }, 1000);
            setTimeout(() => {
                let imageFile = document.querySelector("img#user-upload");
                storage.ref("users/" + user.uid + `/${img.name}`).getDownloadURL().then((imgurl) => {
                    imageFile.src = imgurl;
                    imageFile.style.display = "inline-block";
                });
            }, 1500);
        }

    }, false);
}