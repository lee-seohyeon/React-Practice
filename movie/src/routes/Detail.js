import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = (summary, genres) => {
	const { id } = useParams();
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
	};
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<>
			<p>detail</p>

		</>
	);
};

export default Detail;
