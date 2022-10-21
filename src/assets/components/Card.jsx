import React from "react";
import cardModule from "./card.module.css";

export default function Card() {
	return (
		<div className="card">
			<h1 className={cardModule.h1}>This is the card component</h1>
		</div>
	);
}
