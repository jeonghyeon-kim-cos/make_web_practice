import React, {useState} from 'react';
import "./practice.css";

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
          <div className="div__text--lastAccess">Yesterday - {t.contents}hrs</div>
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
  const daily = [
    {color : "div__header--color1", classImage : "div__header--image1", title : "work", hour : "5", contents : "7" },
    {color : "div__header--color2", classImage : "div__header--image2", title : "Play",  hour : "1", contents : "2" },
    {color : "div__header--color3", classImage : "div__header--image3", title : "Study",  hour : "0", contents : "1" },
    {color : "div__header--color4", classImage : "div__header--image4", title : "Exercise",  hour : "1", contents : "1" },
    {color : "div__header--color5", classImage : "div__header--image5", title : "Social",  hour : "1", contents : "3" },
    {color : "div__header--color6", classImage : "div__header--image6", title : "Self Care",  hour : "0", contents : "1" }
  ];
  
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
                  <li className='div__profile--li' style={{color : "#ccc"}}>Daily</li>
                  <li className='div__profile--li'>Weekly</li>
                  <li className='div__profile--li'>Monthly</li>
                </ul>
              </div>
            
          </div>

          <div className='div__item'>

            <MkList listName = {daily} ></MkList>

          </div>
        </div>
        <div>
          <p className='div__self'>Challenge by <a href = "https://www.frontendmentor.io/?ref=challenge/">Frontend Mentor.</a> Coded by <a href = "#">Jeong Hyeon Kim.</a></p>
        </div>
      </div>    
    </>
  )
}