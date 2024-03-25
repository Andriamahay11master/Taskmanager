import { useState } from 'react';
import './itemtask.scss';

interface ItemtaskProps {
    task: string
    date?: string
    time?: string
}

export default function Itemtask({task, date, time} : ItemtaskProps) {
    const [taskFinished, setTaskFinished] = useState(false);

    const changestateTask = () => {
        setTaskFinished(!taskFinished);
    }
    return (
        
        <div className={"task-item" + (taskFinished ? " task-finished" : "")}>
            <div className="task-col">
                <input type="checkbox" name="stateTask" id="stateTask" checked={taskFinished} onChange={changestateTask}/>
                
                {date ? (
                    <div className="task-item-info">
                        <p className='task-label'>{task}</p>
                        <p className='task-date'>{date}</p>
                    </div>
                ) : (
                    <p className='task-label'>{task}</p>
                )}

            </div>
            <div className="task-col">
                <p className='task-label'>{time}</p>
            </div>
        </div>
    )
}