export function TodoTask({ Title, Done, onToggle }: { Title: string, Done: boolean, onToggle: () => void }){

    return(
        <div>
            <span> {Title} </span>
            <input type="checkbox" checked={Done} onChange={onToggle}/>
            {
                Done &&
                <span> Zadanie wykonane</span>
            }
            {
                !Done &&
                <span> Zadanie nie wykonane</span>
            }
        </div>
    )
}

