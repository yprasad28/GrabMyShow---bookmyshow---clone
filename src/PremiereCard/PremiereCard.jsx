import React from 'react'
import './PremiereCard.css'
const PremiereCard = () => {
    const premierCard = [
        {
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00429065-ndfzbypquv-portrait.jpg",
            name : "Sniper: The Last Stand",
            language : "English"
        },
        {
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00415765-yqfxrxarrl-portrait.jpg",
            name : "Gulaabi",
            language : "Marathi"
        },
        {
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00421038-gexzclbqbv-portrait.jpg",
            name : "97 Minutes",
            language : "English"
        },

        {
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00430499-gjtumpzyuk-portrait.jpg",
            name : "The Count of Monte-Crisito",
            language : "French",
        },
        {
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00411534-dffmdbaxpd-portrait.jpg",
            name : "Jurassic World Ultimate Collection",
            language : "English"
        },
        
    ]
  return (
    <div className='container1'>
      
      <div className="row">
     
      <img className='premierer-image' src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png'/>
       
            
                {premierCard.map(premier => {
                    const { image, name, language } = premier
                    return (
                        <>
                         <div className="col-2">
                        <div className='premierer-card-content'>
                            <img className='premierer-card-image' src={image}/>
                            <h4 className='premier-name'>{name}</h4>
                            <p className='premier-language'>{language}</p>
                        </div>
                        </div>
                        </>
                    )
                })}
            
        </div>
      </div>
    
  )
}

export default PremiereCard
