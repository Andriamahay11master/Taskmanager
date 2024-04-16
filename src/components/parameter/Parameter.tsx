
import Menu from '../menu/Menu';
import {dataMenu, listIconFeather} from '../../data';
import './parameter.scss';
import { Poppin } from '../poppin/Poppin';
import { useState } from 'react';
import { addDoc, collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { useEffect } from 'react';
import { uid } from '../../dataLog';

export default function Parameter() {
    const [success, setSuccess] = useState(false);
    const [labelCategory, setLabelCategory] = useState('');
    const [iconCategory, setIconCategory] = useState('icon-activity');
    const [color, setColor] = useState('');
    const [idCategory, setIdCategory] = useState<number | null>(null);

    const resetValForm = () => {
        setLabelCategory('');
        setIconCategory('');
        setColor('');
    }

    const fetchLastId = async () => {
        try {
            const q = query(collection(db, "category"), orderBy("id", "desc"), limit(1)); // Limit to 1 document
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const lastId = querySnapshot.docs[0].data().id;
                setIdCategory(lastId + 1); // Set the new ID as the last ID + 1
            } else {
                setIdCategory(1); // If no documents found, set ID to 1
            }
        } catch (error) {
            console.error("Error fetching last ID: ", error);
        }
    }

    const addCategory = async () => {
        try{
            if(labelCategory && iconCategory) {
                await addDoc(collection(db, "category"), {
                    id: idCategory,
                    label: labelCategory,
                    icon: iconCategory,
                    color: color,
                    uid: uid
                });
                setSuccess(true);
                resetValForm();
            }  
        }
        catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    useEffect(() => {
        fetchLastId();
    })
    return (
        
        <div className="appBlock">
            <div className="appForm">
                <div className="form-group">
                    <label htmlFor="task">Add Category</label>
                    <input className="input-forms" type="text" id="labelCategory" placeholder="Add category" value={labelCategory} onChange={(e) => setLabelCategory(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Icons category</label>
                    <select className='input-forms' id="iconCategory" value={iconCategory} onChange={(e) => setIconCategory(e.target.value)}>
                        {listIconFeather.map((icon) => (
                            <option key={icon.val} value={icon.val}>    
                                {icon.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="task">Color category</label>
                    <input className="input-forms" type="color" id="color" placeholder="Add color" value={color} onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div className="form-group form-submit">
                    <button className="btn btn-primary" onClick={addCategory}><i className="icon-check"></i></button>
                </div>
            </div>
            {success && <Poppin title="Success" message="Category added successfully" linkBtn='/home' valBtn='Validate'/>}
            <Menu {...dataMenu}/>
        </div>
    )
}