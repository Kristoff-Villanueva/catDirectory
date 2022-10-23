import React from "react";
import cardModule from "./card.module.css";

export default function Card(props) {
	return (
		<div className="card">
			<h1>{props.image}</h1>
			<img src={props.image} alt="" />
		</div>
	);
}
