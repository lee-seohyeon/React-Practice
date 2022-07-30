import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import Detail from "./Detail";

const Load=styled.div`
display:flex;
margin-top:40vh;
justify-content:center;
align-items:center;
`

const Home = () => {
	const [loading, setLoading] = useState(true); //step1 로딩창
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
		);
		const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);
	return (
		<>
			{loading ? (
				<Load><h2>Loading... </h2></Load>
			) : (
				movies.map((movie) => (
					<Movie
						coverImg={movie.medium_cover_image}
						title={movie.title}
						summary={movie.summary}
						genres={movie.genres}
						id={movie.id}
					/>
				))
			)}
			{/* 일반적으로 movies 면 movie라고 이름을 붙이긴 하지만, 마음대로 이름을 붙이면 됨! */}
		</>
	);
};

export default Home;
