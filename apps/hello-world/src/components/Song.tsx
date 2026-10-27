export interface SongProps {

    /** Tytul piosenki */
    Title: string

    /** Duration */
    Duration: number

    /** Track number */
    TrackNumber?: number

    /** Klikniecie w utwor */
    onClick?: (Title: string) => void
}

export function Song({Title, Duration, TrackNumber, onClick} : SongProps){
    const minutes = Math.floor(Duration / 60);
    const seconds = String(Duration % 60).padStart(2,"0");

    return(
        <tr>
            <td>{TrackNumber}.</td>
            <td onClick={() => onClick?.(Title)}>{Title}</td>
            <td className="text-end">{minutes}:{seconds}</td>
        </tr>
    )
}
