interface Props {
    /** Tytul fiLMUu */
    Title: string

    /**Data Premiery */
    PremiereDate:  number

    /** Url */
    Url: string

}

function TitleCard({Title,PremiereDate,Url} : Props){

        return(
            <>
            <img src={Url} alt={Title} width={250}/>
            <p>{Title}</p>
            <p>{PremiereDate}</p>
            </>
        )
    
}


export default TitleCard