import React from "react";
import "./App.css";
import Card from "./assets/components/Card";
import Footer from "./assets/components/Footer";

function App() {
	// fetch("https://dog.ceo/api/breeds/image/random")
	// 	.then((res) => res.json())
	// 	.then((data) => storeIt(data));

	const [imageUrl, setImageUrl] = React.useState("");

	React.useEffect(function () {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((res) => res.json())
			.then((data) => {
				setImageUrl(data);
			});
	}, []);

	return (
		<div className="App">
			<Card image={imageUrl.message} />
			<Footer />
		</div>
	);
}

export default App;
