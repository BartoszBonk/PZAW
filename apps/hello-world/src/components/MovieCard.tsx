export interface MovieProps {
    /** Tytul fiLMUu */
    Title: string

    /**Data Premiery */
    PremiereDate:  number

    /** Url */
    Url: string

    /** Rating */
    Rating : number

}

function MovieCard({Title,PremiereDate,Url,Rating} : MovieProps){

        return(
            <div className="col">
                <div className="card h-100">
                <img src={Url} alt={Title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    {Rating >= 8 && <span className="badge text-bg-secondary">Recomended</span>}
                    <p className="card-text">
                    {PremiereDate} , rating: {Rating}/10
                    </p>
                </div>
                </div>
            </div>
        )
    
}


export default MovieCard