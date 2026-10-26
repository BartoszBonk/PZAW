export interface BookProps {
    /** Tytul Ksiazki */
    Title: string

    /** Data wydania */
    ReleaseYear:  number

    /** Url */
    Url: string

    /** Ilosc stron */
    Pages: number

}

function BookCard({Title,ReleaseYear,Url,Pages} : BookProps){

        return(
            <div className="col">
            <div className="card h-100">
                <img src={Url} alt={Title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    {ReleaseYear < 2000 && <span className="badge text-bg-secondary">Clasic</span>}
                    <p className="card-text">
                        {ReleaseYear} , {Pages} pages
                    </p>
                </div>
            </div>
            </div>
        )
}


export default BookCard