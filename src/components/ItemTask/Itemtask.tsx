import { useState } from 'react';
import './itemtask.scss';

interface ItemtaskProps {
    task: string
    time?: string
}

export default function Itemtask({task, time} : ItemtaskProps) {
    const [taskFinished, setTaskFinished] = useState(false);

    const changestateTask = () => {
        setTaskFinished(!taskFinished);
    }
    return (
        
        <div className={"task-item" + (taskFinished ? " task-finished" : "")}>
            <div className="task-col">
                <input type="checkbox" name="stateTask" id="stateTask" checked={taskFinished} onChange={changestateTask}/>
                <p className='task-label'>{task}</p>
            </div>
            <div className="task-col">
                <p className='task-label'>{time}</p>
            </div>
        </div>
    )
}