//Replace With Your Own Github Username
const Github_Username = "abhijeet-xd";

//Replace With Your Own Email ID
const Email_Id = "abhijeetjain231@gmail.com";

var xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
        var data = JSON.parse(this.responseText);
        document.title = data.name;
        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("bio").innerHTML = data.bio;
        document.getElementById("github").href = data.html_url;
        if (data.twitter_username == "null") {
            document.getElementById("twitter").style.display = "none";
        } else {
            document.getElementById("space").innerHTML = "&nbsp";
            document.getElementById("twitter").href = "https://twitter.com/" + data.twitter_username;
        }
    }
});

xhr.open("GET", "https://api.github.com/users/" + Github_Username);
xhr.send();

document.getElementById("email").innerHTML = Email_Id;

function mailF() {
    window.open("mailto:" + Email_Id);
}

/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */