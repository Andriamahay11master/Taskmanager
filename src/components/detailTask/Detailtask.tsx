import React from 'react'
import './detailtask.scss'
import { Link } from 'react-router-dom'

interface DetailtaskProps {
    title: string
    category: string
    date: string
    time: string
    note: string
}

export default function Detailtask({title, category, date, time, note} : DetailtaskProps) {
    return (
        <div className="detailTask">
                <div className="detailTask-top">
                    <h2 className="title-h2">Detail Task</h2>
                </div>
                <div className="detailTask-bottom">
                    <div className="detailTask-info">
                        <div className="detailTask-info-top">
                            <div className="detailTask-top-col">
                                <p className='detail-title'>{title}</p>
                                <span className='detail-time'>{category}</span>
                            </div>
                            <div className="detailTask-top-col">
                                <span className='detail-time'>{date}</span>    
                            </div>
                        </div>
                        <div className="detailTask-info-bottom">
                            <div className="detailTask-bottom-col">
                                <span className='detail-time'>{time}</span>
                            </div>
                            <div className="detailTask-bottom-col">
                                <Link className="btn btn-link" to="/reschedule">Reschedule</Link>
                            </div>
                        </div>
                    </div>
                    <div className="detailTask-content">
                        <h3 className="title-h3">Details</h3>
                        <p>{note}</p>
                    </div>
                </div>
        </div>
    )
}