import React from 'react'; 
import './mission.css';

function Card({title,imageUrl,body}) {
    return(
        <div>
            <div className = 'card'>
                <div className = "image-container">
                    <img className = "wid" src={imageUrl} alt='' style={{width: '100%', height: '250px'}}/>
                </div>
                <div className = "container">
                    <div>
                        <h3 className = "card-title">{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    
        
        
    )
}
export default Card