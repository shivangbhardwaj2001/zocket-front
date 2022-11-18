import React, {useState}from 'react';
import secondPage from '../images/secondPage.jpeg'
import { initialState } from './demostate';
import { useSelector } from "react-redux/es/exports";

export const Products=({ changePage,inputHandle,setCampaignState})=>{
    const state = useSelector((state) => state);
    const [st, setSt] = useState();
  const clickHandler = (id) => {
    setSt(id);
    setCampaignState((prev)=>({
        ...prev, name: state.products[id]
      }))
  };
    return(
        <div class="campaign-inside-x">
      <div class="campaign-heading-x">
        <div className='campaign-intro-text-x'>
          <div className='campaign-intro-text-1-x'>&nbsp;&nbsp;&nbsp;&nbsp;Your Campaigns</div>
          <div className='campaign-intro-text-2-x'>&nbsp;&nbsp;&nbsp;&nbsp;Launch you ad in just 4 easy steps</div>
        </div>
      </div>
      

      <div class="campaign-dashboard-x">
        <div> <img src={secondPage} width="1200px" height="100px" /></div><br /><br /><br />
        <div class="create-2">
        <div >
          <div style={{textAlign:"left", padding:"0 1rem"}} >
            <div className='h2 qq'>Choose the Product</div>
            <div className='h6 xx'>(Step 2 of 4)</div>
          </div>
                         <div style={{display:'flex', flexWrap: "wrap"}}>
                          
            {state.products.map((prod, idx) => {
              return (<div key={idx} class="opt" style={{ border: st === idx ? "5px solid blue" : "", padding:"1rem 2rem" }} onClick={() => clickHandler(idx)}>
                <div className='h4 qq'>{prod}</div>
              </div>)
            })}



                            </div>
           <button class="continue-button" onClick={()=>changePage('settings')}>Continue</button>
        </div>

        </div>
        

      </div>
    </div>
    )
}
