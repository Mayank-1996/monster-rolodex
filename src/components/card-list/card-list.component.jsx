import React from 'react';
import '../card-list/card-list.styles.css';
import Card from '../card/card.component';

const CardList = props => {
    
    return (
        
        <div className='card-list'>
           
           {props.monsters.map(monster=>(
               <Card monster={monster}/>
        
        ))}
    
        </div>
    )
};

export default CardList;
