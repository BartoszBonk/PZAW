import { Song, type SongProps } from "./Song"
export interface AlbumProps {
    /** Tytul Albumu */
    AlbumTitle: string

    /** Autor */
    Author:  string

    /** Url Albumu cver*/
    Url: string

    /** Gatunek */
    Genre: string

    /** Rok wydania */
    ReleaseYear: number

    /** Tablica Piosenek */
    Songs: SongProps[]

}



function AlbumCard({AlbumTitle,Author,Url,Genre,ReleaseYear,Songs} : AlbumProps){

    function handleSongClick(Title : any){
        
        
            console.log(`Wybrano utwór: ${Title} z ${AlbumTitle}`)
        

    }
    
        return(
            <div className="col">
            <div className="card h-100">
                <img src={Url} alt={AlbumTitle} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{AlbumTitle}</h5>
                    <p className="card-text">
                        {Author} , {Genre} , {ReleaseYear}
                    </p>
                    {Songs.length > 0 ? (
                        <table className="table table-striped table-hover">
                            <tbody>
                                {Songs.map((song: SongProps, index) => (
                                    <span onClick={()=>handleSongClick(song.Title)}>
                                    <Song key={song.Title} Title={song.Title} Duration={song.Duration} TrackNumber={index + 1} />
                                    </span>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="alert alert-secondary">no tracks</div>
                    )}
                </div>
            </div>
            </div>
        )
    
}


export default AlbumCard