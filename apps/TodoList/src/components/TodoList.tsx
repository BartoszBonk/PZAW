import { useState } from "react";
import { TodoTask } from "./TodoTask";



export function TodoList(){

const [Title, setTitle] = useState("")
const [Tasks, setTasks] = useState<string[]>([])
const [Search, setSearch] = useState("")
const [DoneList, setDoneList] = useState<boolean[]>([])
const [EditIndex, setEditIndex] = useState<number | null>(null)
const [EditName, setEditName] = useState("")

function addTask(name : string){
    if(name!=""){
    setTasks([...Tasks,name])
    setDoneList([...DoneList,false])
    }
}

function toggleTask(index : number){
    setDoneList(DoneList.map((d, i) => i == index ? !d : d))
}

function DeleteTask(index : number){
    let newTasks = [...Tasks]
    newTasks.splice(index,1)

    setTasks(newTasks)

}

function EditTask(index : number, name : string){
    let newTasks = [...Tasks]
    newTasks[index] = name
    setTasks(newTasks)
    setEditIndex(null)

}

const doneCount = DoneList.filter(d => d).length
const notDoneCount = Tasks.length - doneCount




return(
    <div className="flex flex-col items-center gap-3 p-4">
        <input type="search" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} />
        <div className="flex gap-2">
            <input type="text" onChange={(e)=>setTitle(e.target.value)} />
            <button onClick={()=>addTask(Title)}>Add Task</button>
        </div>
        <p>Done: {doneCount} | Not Done: {notDoneCount}</p>
        <div className="flex flex-col gap-2">
        {
        Tasks.map((task : string ,index) =>
            task.toLowerCase().includes(Search.toLowerCase()) && (
            <div key = {index} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
            <TodoTask Title = {task} Done = {DoneList[index]} onToggle = {()=>toggleTask(index)}/>
            <button onClick={()=>DeleteTask(index)}>delete</button>
            <button onClick={()=>setEditIndex(EditIndex === index ? null : index)}>edit</button>
            </div>
            {EditIndex === index && (
            <div className="flex gap-2">
                <input type="text" placeholder="Name" onChange={(e)=>setEditName(e.target.value)}/>
                <button onClick={()=>EditTask(index, EditName)}>Set</button>
            </div>
            )}
            </div>
            )
        )
        }
        </div>

        <h1>Alfabetic</h1>
        <div className="flex flex-col gap-2">
        {
            Tasks.map((task : string ,index) =>(
            <TodoTask Title = {task} key = {index} Done = {DoneList[index]} onToggle = {()=>toggleTask(index)}/>
        ))
        }
        </div>
    </div>
)
}