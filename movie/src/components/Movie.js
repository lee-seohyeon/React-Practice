import { Link } from "react-router-dom";

const Movie = ({id, coverImg, title, summary, genres }) => {
	return (
		<>
			<div>
				<img src={coverImg} alt="noimg"></img>
				<h2>
					<Link to={`/detail/${id}`}>{title}</Link>
				</h2>
				

                <p>{summary.length > 230 ? `${summary.slice(0,235)}...` : summary}</p>
				<ul>
					{genres.map((g) => (
						<li>{g}</li>
					))}
				</ul>

                
			</div>
		</>
	);
};

export default Movie;
