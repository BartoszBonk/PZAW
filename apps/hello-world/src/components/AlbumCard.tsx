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

        return(
            <div>
            <img src={Url} alt={AlbumTitle} width={250}/>
            <p>{AlbumTitle}</p>
            <p>{Author}</p>
            <p>{Genre}</p>
            <p>{ReleaseYear}</p>
            {Songs.length > 0 ? (
                Songs.map((song: SongProps, index) => {
                    return (
                        <Song key={song.Title} Title={song.Title} Duration={song.Duration} TrackNumber={index + 1} />
                    )
                })
            ) : (
                <p>Brak utworów</p>
            )}
            </div>
        )
    
}


export default AlbumCard