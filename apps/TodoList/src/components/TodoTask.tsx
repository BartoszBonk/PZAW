export function TodoTask({ Title, Done, onToggle }: { Title: string, Done: boolean, onToggle: () => void }){

    return(
        <div className="flex items-center gap-2">
            <span> {Title} </span>
            <input type="checkbox" checked={Done} onChange={onToggle}/>
            <span className="w-32 text-left">
                {Done ? "Task done" : "Task not done"}
            </span>
        </div>
    )
}
