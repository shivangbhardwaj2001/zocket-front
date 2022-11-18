import React, { useEffect } from 'react';
import { Link } from "react-router-dom"; 
import createbutton from '../images/createbutton.jpeg'
import ListCampaign from './ListCampaign';

export const Dashboard=({ changePage,inputHandler})=>{

    // useEffect(() => {
    //     dispatch(setLoading(true));
    //     (async () => {
    //       try {
    //         const getProducts = await restApiCalls("GET", `products`);
    //         if(getProducts){
    //           dispatch(addProducts(getProducts));
    //         }
    //       } catch (error) {
    //         console.log(error);
    //       }finally{
    //         dispatch(setLoading(false));
    //       }
    //     })();
    //   }, [token]);

    return(
        
          
         
 <div class="campaign-inside">
          <div class="campaign-heading">  
            <div className='campaign-intro-text'>
                <div className='campaign-intro-text-1'>&nbsp;&nbsp;&nbsp;&nbsp;Your Campaigns</div>
                <div className='campaign-intro-text-2'>&nbsp;&nbsp;&nbsp;&nbsp;Check the list of campaigns you created</div>
            </div>
          </div>
<button style={{width: "200px"}} class="campaign-button btn btn-primary" onClick={()=>changePage('create')}><img src={createbutton}  width="20px" height="20px" />Create new Campaign</button>
    
<div class="campaign-dashboard"> 
<ListCampaign/>

 </div>
</div>
        
    )
}
