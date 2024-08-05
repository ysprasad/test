import React from 'react'
import { useEffect,useState} from 'react';
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';
//rafce
const Restaurantmenu = () => {
    const[resinfo,setresinfo]=useState(null);
    const {resid}=useParams();
    
       useEffect(()=>{
        fetchData();
       });
       const fetchData= async ()=>{
        const data=await fetch(MENU_API+resid);
        const json=await data.json();
        setresinfo(json.data);
       }
       if (resinfo===null) return <Shimmer/>;
    const {name,avgRatingString,cuisines}=resinfo.cards[2].card.card.info;
    const {itemCards}=resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div>
      <h1>{name}</h1>
      
      <p>{cuisines.join(",")}
      ,{avgRatingString } stars rating</p>
      <ul>
    {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-Rs {item.card.info.price/100}</li>)}
      
      </ul>
    </div>
  )
}

export default Restaurantmenu;
