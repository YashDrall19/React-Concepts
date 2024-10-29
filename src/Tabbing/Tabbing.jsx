import React, { useState } from 'react'
import '../Tabbing/Tabbing.css'
import { tabs } from '../Data/TabbingData'

export default function Tabbing() {

  let [activeTab, setActiveTab] = useState(0)
  let [activeContent, setActiveContent] = useState(tabs[0])

  let handleClick = (i) => {
    setActiveTab(i);
    setActiveContent(tabs[i]);
  }
  
  return (
    <div className='header'>
        <header><h1>TABBING</h1></header>

        <nav className='tabbingNav'>
            <ul>
                {tabs.map((tab, i) => {
                  return(
                    <div key={tab.id}>
                      <li className={ (activeTab===i) ? `active active-${i}` : ''} onClick={() => {handleClick(i); setActiveTab(i);}}>
                        { tab.id }
                      </li>
                    </div>
                  )
                })}
            </ul>
        </nav>

        <p className='routingContent'>{activeContent.value}</p>

    </div>
  )
}
