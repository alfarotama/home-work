function formSubmit() {
	alert("Have A Great Day");
}

// adding axios for API track
axios
	.get(
		"https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
	)
	.then(function (response) {
		//handle success
		console.log(response.data);

		const trackTitleDOM = document.getElementById("track-title");
		trackTitleDOM.innerHTML = `Track title: ${response.data.name}`;

		const artistDOM = document.getElementById("artist");
		artistDOM.innerHTML = `Artist: ${response.data.artists[0].name}`;

		const albumDOM = document.getElementById("album");
		albumDOM.innerHTML = `Album: ${response.data.album.name}`;
	})
	.catch(function (error) {
		//handle error
		console.log(error);
	});
