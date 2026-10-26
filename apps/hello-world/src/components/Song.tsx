export interface SongProps {

    /** Tytul piosenki */
    Title: string

    /** Duration */
    Duration: number

    /** Track number */
    TrackNumber?: number
}

export function Song({Title, Duration, TrackNumber} : SongProps){
    const minutes = Math.floor(Duration / 60);
    const seconds = String(Duration % 60).padStart(2,"0");

    return(
        <div>
            {TrackNumber}. {Title} {minutes}:{seconds}
        </div>
    )
}
