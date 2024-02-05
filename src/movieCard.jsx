const MovieCard = ( {movie : {imdbID , Year , Poster , Title , Type}}) => {
    return (
        <div className="movie">
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title}/>
            </div>
            <div>
                <span>{Type}</span>
                <span>{Title}</span>
            </div>
        </div>
    )
}
export default MovieCard
