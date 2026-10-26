export interface BookProps {
    /** Tytul Ksiazki */
    Title: string

    /** Autor */
    ReleaseYear:  number

    /** Url */
    Url: string

    /** Ilosc stron */
    Pages: number

}

function BookCard({Title,ReleaseYear,Url,Pages} : BookProps){

        return(
            <div>
            <img src={Url} alt={Title} width={250}/>
            <p>{Title}</p>
            <p>{ReleaseYear}</p>
            <p>{Pages}</p>
            </div>
        )
    
}


export default BookCard