window.onload = function() {
	newImage = localStorage.getItem("saved_img");
	profileImage = newImage;
	document.getElementById("profile_img").src = profileImage;
}