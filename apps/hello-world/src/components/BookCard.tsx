interface Props {
    /** Tytul Ksiazki */
    Title: string

    /** Autor */
    Author:  string

    /** Url */
    Url: string

}

function BookCard({Title,Author,Url} : Props){

        return(
            <>
            <img src={Url} alt={Title} width={250}/>
            <p>{Title}</p>
            <p>{Author}</p>
            </>
        )
    
}


export default BookCard