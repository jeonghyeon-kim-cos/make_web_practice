import React, { Component, useEffect, useState } from 'react';
import "./practice.css";
import { Data } from "./Data.js";

const FLAG_DAILY = "daily";
const FLAG_WEEKLY = "weekly";
const FLAG_MONTHLY = "monthly";

const App = () => { 
 
  const [test, setTest] = React.useState(Data.weekly)
  const [clicked, setClicked] = useState(FLAG_WEEKLY)
  React.useEffect(() => {
    if(clicked === FLAG_DAILY) {
      setTest(Data.daily)
    }else if (clicked === FLAG_WEEKLY) {
      setTest(Data.weekly)
    }else if (clicked === FLAG_MONTHLY) {
      setTest(Data.monthly) 
    }
  },[clicked])

  const rendering = () => {
    
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
                  <li className={clicked === FLAG_DAILY ? 'div__profile--li font__click' : 'div__profile--li'} onClick = {() => {
                    setClicked(FLAG_DAILY)
                  }}>Daily</li>
                  <li className={clicked === FLAG_WEEKLY ? 'div__profile--li font__click' : 'div__profile--li'} onClick = {() => {
                    setClicked(FLAG_WEEKLY)
                  }}>Weekly</li>
                  <li className={clicked === FLAG_MONTHLY ? 'div__profile--li font__click' : 'div__profile--li'} onClick = {() => {
                    setClicked(FLAG_MONTHLY)
                  }} >Monthly</li>
                </ul>
              </div>
            
          </div>

          <div className='div__item'>

            <div className='div__list'>
              <div className='div__header div__header--color1'>
                <div className='div__header--image1'></div>
              </div>
              <div className="div__info">
                <div className="div__text--title">work</div>
                <div className="div__text--hour">{test.work.hour}hurs</div>
                <div className="div__text--lastAccess">{test.work.contents}hrs</div>
              </div>
            </div>

            <div className='div__list'>
              <div className='div__header div__header--color2'>
                <div className='div__header--image2' ></div>
              </div>
              <div className="div__info">
                <div className="div__text--title">Play</div>
                <div className="div__text--hour">{test.Play.hour}hurs</div>
                <div className="div__text--lastAccess">{test.Play.contents}hrs</div>
              </div>
            </div>

            <div className='div__list'>
              <div className='div__header div__header--color3'>
                <div className='div__header--image3' ></div>
              </div>
              <div className="div__info">
                <div className="div__text--title">Study</div>
                <div className="div__text--hour">{test.Study.hour}hurs</div>
                <div className="div__text--lastAccess">{test.Study.contents}hrs</div>
              </div>
            </div>

            <div className='div__list'>
              <div className='div__header div__header--color4'>
                <div className='div__header--image4' ></div>
              </div>
              <div className="div__info">
                <div className="div__text--title">Exercise</div>
                <div className="div__text--hour">{test.Exercise.hour}hurs</div>
                <div className="div__text--lastAccess">{test.Exercise.contents}hrs</div>
              </div>
            </div>

            <div className='div__list'>
              <div className='div__header div__header--color5'>
                <div className='div__header--image5' ></div>
              </div>
              <div className="div__info">
                <div className="div__text--title">Social</div>
                <div className="div__text--hour">{test.Social.hour}hurs</div>
                <div className="div__text--lastAccess">{test.Social.contents}hrs</div>
              </div>

            </div>
            <div className='div__list'>
              <div className='div__header div__header--color6'>
                <div className='div__header--image6' ></div>
              </div>
              <div className="div__info">
                <div className="div__text--title">SelfCare</div>
                <div className="div__text--hour">{test.SelfCare.hour}hurs</div>
                <div className="div__text--lastAccess">{test.SelfCare.contents}hrs</div>
              </div>
            </div>

          </div>
        </div>A

        <div>
          <p className='div__self'>Challenge by <a href = "https://www.frontendmentor.io/?ref=challenge/">Frontend Mentor.</a> Coded by <a href = "/">Jeong Hyeon Kim.</a></p>
        </div>
      </div>    
    </>
      );
    
    };
  
  
  return (
    <>
      {rendering()}
    </>
  ) ;

};

export default App;