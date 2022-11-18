import React, {useState}from 'react';
import productspage from '../images/productspage.jpeg'
import { initialState } from './demostate';
import { useSelector } from "react-redux/es/exports";

export const Create = ({ changePage,inputHandler, setCampaignState}) => {
  const state = useSelector((state) => state);
  const [st, setSt] = useState();
  const clickHandler = (id) => {
    setSt(id);
    setCampaignState((prev)=>({
      ...prev, platform: state.platform[id].site
    }))
  };
  return (

    <div class="campaign-inside-x">
      <div class="campaign-heading-x">
        <div className='campaign-intro-text-x'>
          <div className='campaign-intro-text-1-x'>&nbsp;&nbsp;&nbsp;&nbsp;Your Campaigns</div>
          <div className='campaign-intro-text-2-x'>&nbsp;&nbsp;&nbsp;&nbsp;Launch you ad in just 4 easy steps</div>
        </div>
      </div>
      

      <div class="campaign-dashboard-x">
        <div> <img src={productspage} width="1200px" height="100px" /></div><br /><br /><br />
        <div class="create-2">
        <div >
          <div style={{textAlign:"left", padding:"0 1rem"}} >
            <div className='h2 qq'>What you want to do</div>
            <div className='h6 xx'>(Step 1 of 4)</div>
          </div>
          <div style={{display:'flex', flexWrap: "wrap"}}>
            {state.platform.map((plat, idx) => {
              return (<div key={idx}  class="opt" style={{ border: st === idx ? "5px solid blue" : "" }} onClick={() => clickHandler(idx)}>
                <div className='h4 qq'>{plat.name}</div>
                <div className='h6 xx'>{plat.description}</div>
              </div>)
            })}
           </div>
           <button class="continue-button" onClick={()=>changePage('products')}>Continue</button>
        </div>

        </div>
        

      </div>
    </div>
  )
}
