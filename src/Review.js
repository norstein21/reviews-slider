import React, { useState } from 'react'
import orang from './data'
import { FaChevronLeft, FaChevronRight, FaPeopleArrows, FaQuoteRight } from 'react-icons/fa';


const Review = () => {

    const [index,setIndex] = useState(0);
    const {id,nama,job,image,text} = orang[index];
    
    const checkNumber  = (number) =>{
        if (number > orang.length -1){
            return 0;
        }
        if (number < 0){
            return orang.length - 1;
        }
        return number;
    }


    const prevClick = ()=>{
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const nextClick = ()=>{
        setIndex((index)=>{
            let newIndex = index +1;
            return checkNumber(newIndex);
        })
    }
    

  return (
    <article className='review'>
        <div className='img-container'>
            <img src={image} alt={nama} className='person-img' />
            <span className='quote-icon'>
                <FaQuoteRight />
            </span>
        </div>
        <h4 className='author'>{nama}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='underline'></div>
        <div className='button-container'>
            <button className='prev-btn' onClick={prevClick}>
                <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextClick}>
                <FaChevronRight />
            </button>
        </div>
            <button className='random-btn'>
                Random!
            </button>
    </article>

  )
}

export default Review;