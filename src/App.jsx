import React from "react";
import "./App.css";
import Card from "./assets/components/Card";
import Footer from "./assets/components/Footer";

function App() {
	async function getResponse() {
		const response = await fetch("https://api.thecatapi.com/v1/images/search");
		const data = await response.json();
		console.log(data);
	}

	getResponse();

	return (
		<div className="App">
			<Card />
			<Footer />
		</div>
	);
}

export default App;
