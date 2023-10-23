import React, {useState} from 'react';
import "./practice.css";
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';

function MkList(props) {
  const lis = [];
  for(let i = 0; i < props.listName.length; i++){
    let t = props.listName[i];
    lis.push(
      <div className='div__list'>
        <div className={`div__header ${t.color}`}>
          <div className={t.classImage}></div>
        </div>
        <div className="div__info">
          <div className="div__text--title">{t.title}</div>
          <div className="div__text--hour">{t.hour}hurs</div>
          <div className="div__text--lastAccess">{t.contents}hrs</div>
        </div>
      </div>
    );
  }
  return (
    <>
      {lis}
    </>   
  );
}


export default function App() {  
  const [mode, setMode] = useState('weekly')
  const [click, setClick] = useState('weekly')
  const daily = [
    {color : "div__header--color1", classImage : "div__header--image1", title : "work", hour : "5", contents : "Yesterday - 7" },
    {color : "div__header--color2", classImage : "div__header--image2", title : "Play",  hour : "1", contents : "Yesterday - 2" },
    {color : "div__header--color3", classImage : "div__header--image3", title : "Study",  hour : "0", contents : "Yesterday - 1" },
    {color : "div__header--color4", classImage : "div__header--image4", title : "Exercise",  hour : "1", contents : "Yesterday - 1" },
    {color : "div__header--color5", classImage : "div__header--image5", title : "Social",  hour : "1", contents : "Yesterday - 3" },
    {color : "div__header--color6", classImage : "div__header--image6", title : "Self Care",  hour : "0", contents : "Yesterday - 1" }
  ];
  const weekely = [
    {color : "div__header--color1", classImage : "div__header--image1", title : "work", hour : "32", contents : "Last Week - 36"},
    {color : "div__header--color2", classImage : "div__header--image2", title : "Play",  hour : "10", contents : "Last Week - 8" },
    {color : "div__header--color3", classImage : "div__header--image3", title : "Study",  hour : "4", contents : "Last Week - 7" },
    {color : "div__header--color4", classImage : "div__header--image4", title : "Exercise",  hour : "4", contents : "Last Week - 5" },
    {color : "div__header--color5", classImage : "div__header--image5", title : "Social",  hour : "5", contents : "Last Week - 10" },
    {color : "div__header--color6", classImage : "div__header--image6", title : "Self Care",  hour : "2", contents : "Last Week - 2" }
  ];
  const monthly = [
    {color : "div__header--color1", classImage : "div__header--image1", title : "work", hour : "103", contents : "Last Month - 128" },
    {color : "div__header--color2", classImage : "div__header--image2", title : "Play",  hour : "23", contents : "Last Month - 29" },
    {color : "div__header--color3", classImage : "div__header--image3", title : "Study",  hour : "13", contents : "Last Month - 19" },
    {color : "div__header--color4", classImage : "div__header--image4", title : "Exercise",  hour : "11", contents : "Last Month - 18" },
    {color : "div__header--color5", classImage : "div__header--image5", title : "Social",  hour : "21", contents : "Last Month - 23" },
    {color : "div__header--color6", classImage : "div__header--image6", title : "Self Care",  hour : "7", contents : "Last Month - 11" }
  ];
  let contents = null;
  if (mode === "daily"){
    contents = <MkList listName = {daily} ></MkList>
  }else if(mode === "weekly"){
    contents = <MkList listName = {weekely} ></MkList>
  }else if(mode === "monthly"){
    contents = <MkList listName = {monthly} ></MkList>
  }



  
  return (
    <>
      <div className="div">
        <div className="div__back">
          <div className ="div__profile">

              <div className="div__profile--profile">
                <div className='div__profile--picture'></div>
                <p className="div__profile--text">Report for</p>
                <div className="div__profile--name">Jeremy Robson</div>
              </div>

              <div className="div__profile--list">
                <ul className='div__profile--ul'>
                  <li className={click === 'daily' ? 'div__profile--li font__click' : 'div__profile--li' } onClick = {() => {
                    if(mode !== 'daily'){
                      setClick('daily')
                      setMode('daily')
                    }
                  }}>Daily</li>
                  <li className={click === 'weekly' ? 'div__profile--li font__click' : 'div__profile--li' } onClick = {() => {
                    if(mode !== 'weekly'){
                      setClick('weekly')
                      setMode('weekly')
                    }
                  }}>Weekly</li>
                  <li className={click === 'monthly' ? 'div__profile--li font__click' : 'div__profile--li'} onClick = {() => {
                    if(mode !== 'monthly'){
                      setClick('monthly')
                      setMode('monthly')
                    }
                  }}>Monthly</li>
                </ul>
              </div>
            
          </div>

          <div className='div__item'>
            {contents}
          </div>
        </div>
        <div>
          <p className='div__self'>Challenge by <a href = "https://www.frontendmentor.io/?ref=challenge/">Frontend Mentor.</a> Coded by <a href = "/">Jeong Hyeon Kim.</a></p>
        </div>
      </div>    
    </>
  )
}