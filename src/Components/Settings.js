import React from 'react';
import thirdPage from '../images/thirdPage.jpeg'
export const Settings=({ changePage,inputHandler})=>{
    return(
        <div class="campaign-inside-x">
        <div class="campaign-heading-x">
          <div className='campaign-intro-text-x'>
            <div className='campaign-intro-text-1-x'>&nbsp;&nbsp;&nbsp;&nbsp;Your Campaigns</div>
            <div className='campaign-intro-text-2-x'>&nbsp;&nbsp;&nbsp;&nbsp;Launch you ad in just 4 easy steps</div>
          </div>
        </div>
        
        
        <div class="campaign-dashboard-x">
          <div> <img src={thirdPage} width="1200px" height="100px" /></div><br /><br /><br />
          <div class="create-2">
          <div >
            <div style={{textAlign:"left", padding:"0 1rem"}} >
              <div className='h2 qq'>Campaign Settings</div>
              <div className='h6 xx'>(Step 3 of 4)</div>
            </div>
                           <div style={{display:'flex', flexWrap: "nowrap"}}>
        
        
                           
                <div>
                    <div className='qq h3'>Start Date</div>
                    
                <input type="date" onChange={inputHandler} id="birthday" name="startDate"/></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <div> <div className='qq h3'>End Date</div>
                 
                <input type="date" onChange={inputHandler} id="birthday" name="endDate"/></div><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                    <div className='qq h3'>Budget</div>
                
                <input type="range" onChange={inputHandler} class="form-range" min="0" max="100000" id="customRange2" name="budget"/></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                    <div><h3>Location</h3>
                    <input onChange={inputHandler} name="location"/></div>
              
                
        
        
                              </div>
             <button class="continue-button" onClick={()=>changePage('finish')}>Continue</button>
          </div>
        
          </div>
          
        
        </div>
        </div>
        
    )
}
