import React from 'react'
import "./EventCard.css"
const EventCard = () => {
    const eventCard = [
        {
            title:"KIDS",
            para : "15+ Events"
        },
        {
            title:"WORKSHOPS & MORE",
            para : "60+ Events"
        },
        {
            title:"MUSIC SHOWS",
            para : "35+ Events"
        },
        {
            title:"COMEDY SHOWS",
            para : "80+ Events"
        },
        {
            title:"AMUSEMENT PARK",
            para : "10+ Events"
        }
    ]

    
  return (
    <div className='container'>
        <div className="row">
            <h2>The Best of Events</h2>
            {eventCard.map((events, index) => {
                const {title, para} = events
                return (
                    <div className="col-2 m-3">
                <div className={`event-card${index}`}>
                    
                    <h3 className='event-head'>{title}</h3>
                    <p className='event-para'>{para}</p>
                </div>

            </div>
                )
            })}
            
        </div>
      
      
      
    </div>
  )
}

export default EventCard
