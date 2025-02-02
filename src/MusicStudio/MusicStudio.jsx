import React from 'react'
import "./MusicStudio.css"
const MusicStudio = () => {
    const studio =[
        
        {
            title:"Sonu Nigam Live in Concert - Hyderabad",
            para : "The League: Hyderabad Concerts",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA4IEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00421825-tpthtkedhw-portrait.jpg"
        },
        
        {
            title:"AURA by Mystique Live -RAM MIRAYALA &..",
            para : "Ramoji Film City: Hyderabad Concerts",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00427740-zmswuwpzme-portrait.jpg"
        },
        {
            title:"Humrahi-  An Evening of Ghazals",
            para : "Shiplakala Vedika: Hyderabad Concerts",
            image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMSBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00426559-kpjevnvqms-portrait.jpg"
        },
        {
            title:"Javed Ali Live In Hyderabad",
            para : "Shiplakala Vedika: Hyderabad Concerts",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNiBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00421928-fpjxgxqcyk-portrait.jpg"
        }

    ]
  return (
    <div className='container'>
        <div className="row">
        <h1 className='music-head'>Your Music Studio</h1>
        {studio.map(studios => {
            const { title, para, image } = studios;
            return (
                <div className='col-3'>
                    <div className='music-card'>
                        <img className='music-image' src={image} alt={title} />
                        <h3 className='music-name'>{title}</h3>
                        <p className='music-para'>{para}</p>
                    </div>
                </div>
            )
        })}
        </div>
      
    </div>
  )
}

export default MusicStudio
