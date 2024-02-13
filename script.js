window.onload = function () {
	const downloadLink = document.getElementById("download-link")
	downloadLink.addEventListener("click", function (event) {
		window.location.href =
			"https://drive.google.com/file/d/1ApyP337jRXRjnIkwyO8HnUeoLBnGAer7/view?usp=sharing"
		event.preventDefault()
	})
}
