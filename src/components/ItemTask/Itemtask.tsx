import { useState } from 'react';
import './itemtask.scss';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { TaskType } from '../../models/TaskType';
import { useNavigate } from 'react-router-dom';

interface ItemtaskProps {
    id: number
    task: string
    date?: string
    time?: string
}

export default function Itemtask({id, task, date, time} : ItemtaskProps) {
    const [taskFinished, setTaskFinished] = useState(false);
    const [currentDocument, setIdCurrentDocument] = useState('');
    const [taskData, setTaskData] = useState<TaskType>({} as TaskType);
    const navigate = useNavigate();
    //Get ID Task to firestore
    const fetchTask = async (taske : string) => {
        try {
            const q = query(collection(db, "tasks"), where("task", "==", taske));
            const querySnapshot = await getDocs(q);
            const newData = querySnapshot.docs.map(doc => {
                const taskID = doc.id;
                setIdCurrentDocument(taskID)
                return {
                    id: doc.data().id,
                    task: doc.data().task,
                    date: doc.data().date.seconds,
                    category: doc.data().category,
                    time: doc.data().time.seconds,
                    notes: doc.data().notes,
                    state: doc.data().state
                }
            })
            setTaskData(newData[0]);
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    }

    //Set Task to firestore and update state
    const setStateTask = async (taske: string): Promise<void> => {
        
        try {
            // Fetch the task data first
            await fetchTask(taske);
            // Update the state of the task
            if(currentDocument !== '') {
                const taskRef = doc(db, "tasks", currentDocument);
                updateDoc(taskRef, {state: true});    
                setTaskFinished(true);
            }
        } catch (error) {
            console.error("Error setting task state: ", error);
        }
    }

    const seeDetailTask = (id: number) => {
        navigate(`/detailTask/${id}`);
    }
    return (
        
        <div className={"task-item" + (taskFinished ? " task-finished" : "")}>
            <div className="task-col">
                <input type="checkbox" name="stateTask" id="stateTask" checked={taskFinished} onChange={(event) => setStateTask(task)}/>
                
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
                <button className="btn btn-primary" onClick={() => seeDetailTask(id)}><i className='icon-eye'></i><span>See Details</span></button>
            </div>
        </div>
    )
}