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
            <div>
            <img src={Url} alt={Title} width={250}/>
            <p>{Title}</p>
            <p>{PremiereDate}</p>
            <p>Ocena: {Rating}/10</p>
            </div>
        )
    
}


export default MovieCard