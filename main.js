
//Replace With Your Own Github Username
var Github_Username = "cachecleanerjeet";

//Replace With Your Own Email ID
var Email_Id = "me@mailtuhin.ml";

//Details Fetch From Github's API
var getJSON = function (url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function () {
		var status = xhr.status;
		if (status == 200) {
			callback(null, xhr.response);
		} else {
			callback(status);
		}
	};
	xhr.send();
};
getJSON('https://api.github.com/users/' + Github_Username, function (err, data) {
	if (err != null) {
		console.error(err);
	} else {

		var profile_avatar = `${data.avatar_url}`;
		var profile_name = `${data.name}`;
		var profile_bio = `${data.bio}`;
		var profile_twitter = `${data.twitter_username}`;
		var profile_github = `${data.html_url}`;
		document.title = profile_name;
		document.getElementById("avatar").src = profile_avatar;
		document.getElementById("name").innerHTML = profile_name;
		document.getElementById("bio").innerHTML = profile_bio;
		document.getElementById("github").href = profile_github;
		if (profile_twitter == "null") {
				document.getElementById("twitter").style.display = "none";
			} else {
				document.getElementById("space").innerHTML = "&nbsp";
				document.getElementById("twitter").href = "https://twitter.com/" + profile_twitter;
			}
	}
});
document.getElementById("email").innerHTML = Email_Id;

function mailF() {
	window.open("mailto:" + Email_Id);
}

/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */
