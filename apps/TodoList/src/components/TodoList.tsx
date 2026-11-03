import { useState } from "react";
import { TodoTask } from "./TodoTask";



export function TodoList(){

const [Title, setTitle] = useState("")
const [Tasks, setTask] = useState<string[]>([])
const [Search, setSearch] = useState("")
const [DoneList, setDoneList] = useState<boolean[]>([])

function addTask(name : string){
    if(name!=""){
    setTask([...Tasks,name])
    setDoneList([...DoneList,false])
    }
}

function toggleTask(index : number){
    setDoneList(DoneList.map((d, i) => i == index ? !d : d))
}

function DeleteTask(index : number){
    let newTasks = [...Tasks]
    newTasks.splice(index,1)

    setTask(newTasks)

}

function EditTask(index){
    //setTasks()
}

const doneCount = DoneList.filter(d => d).length
const notDoneCount = Tasks.length - doneCount




return(
    <div>
        <input type="search" onChange={(e)=>setSearch(e.target.value)} /><br />
        <input type="text" onChange={(e)=>setTitle(e.target.value)} />
        <button onClick={()=>addTask(Title)}>Add Task</button>
        <p>Zrobione: {doneCount} | Niezrobione: {notDoneCount}</p>
        { Search !="" &&
        Tasks.map((task : string ,index) =>
        {
            if(task.toLowerCase().includes(Search)){
            return(
            <div>
            <TodoTask Title = {task} key = {index} Done = {DoneList[index]} onToggle = {()=>toggleTask(index)}/>
            <button onClick={()=>DeleteTask(index)}>delete</button>
            <button onClick={()=>EditTask(index)}>edit</button>
            </div>
            )
        }
        })
        }

        { Search =="" &&
        Tasks.map((task : string ,index) =>(
            <div>
            <TodoTask Title = {task} key = {index} Done = {DoneList[index]} onToggle = {()=>toggleTask(index)}/>
            <button onClick={()=>DeleteTask(index)}>delete</button>
            </div>
        ))
        }
        <h1>Alfabetic</h1>
        {
            Tasks.map((task : string ,index) =>(
            <TodoTask Title = {task} key = {index} Done = {DoneList[index]} onToggle = {()=>toggleTask(index)}/>
        ))
        }
        
        
        
    </div>
)
}