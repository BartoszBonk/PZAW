import type { ReactNode } from "react"

interface Props {
    /** Tytul Albumu */
    AlbumTitle: string

    /** Autor */
    Author:  string

    /** Url Albumu cver*/
    Url: string

    children: ReactNode

}


function AlbumCard({AlbumTitle,Author,Url,children} : Props){

        return(
            <>
            <img src={Url} alt={AlbumTitle} width={250}/>
            <p>{AlbumTitle}</p>
            <p>{Author}</p>
            {children}
            </>
        )
    
}


export default AlbumCard