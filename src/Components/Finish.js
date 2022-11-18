import React from 'react';
import { restApiCalls } from "../restApiCalls";
import finalfinal from '../images/finalfinal.jpeg'
import {addSingleCampaign, setLoading} from "../redux/action/index";
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

export const Finish=({ changePage,inputHandler, campaignState})=>{

    const dispatch = useDispatch();
    const clickHandler = async() =>{
        // console.log("here oyu are", id);
        try {
          const getcampaigns = await restApiCalls("POST", `campaign`, campaignState);
          if(getcampaigns){
            console.log("ududvv!!!", getcampaigns)
            dispatch(addSingleCampaign(getcampaigns.response));
          }
        } catch (error) {
          console.log(error?.message);
          console.log(error?.response);
        }finally{
            changePage('dashboard');
            dispatch(setLoading(false));
        }

    }

    return(<>
        

        <div class="campaign-inside-x">
      <div class="campaign-heading-x">
        <div className='campaign-intro-text-x'>
          <div className='campaign-intro-text-1-x'>&nbsp;&nbsp;&nbsp;&nbsp;Your Campaigns</div>
          <div className='campaign-intro-text-2-x'>&nbsp;&nbsp;&nbsp;&nbsp;Launch you ad in just 4 easy steps</div>
        </div>
      </div>
      

      <div class="campaign-dashboard-x">
        <div> <img src={finalfinal} width="1200px" height="100px" /></div><br /><br /><br />
        <div class="create-2">
        <div >
          <div style={{textAlign:"left", padding:"0 1rem"}} >
            <div className='h2 qq'>Ready to go</div>
            <div className='h6 xx'>(Step 4 of 4)</div>
          </div>
                         <div style={{display:'flex', flexWrap: "wrap"}}>
                          
            {/* {state.products.map((prod, idx) => {
              return (<div key={idx} class="opt" style={{ border: st === idx ? "5px solid blue" : "", padding:"1rem 2rem" }} onClick={() => clickHandler(idx)}>
                <div className='h4 qq'>{prod}</div>
              </div>)
            })} */}
            <div  class="opt" style={{ border:"3px solid black"}} >
                <div className='h4 qq'>Mukund Cake shop</div>
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" alt="cake" width="300" height="300"/>
              </div>
              <div  class="opt" style={{ border:"3px solid black"}} >
                <div className='h4 qq'>Mukund Cake shop</div>
                <img src="https://media.istockphoto.com/id/1187830875/photo/confectioner-decorating-chocolate-cake-close-up.jpg?s=612x612&w=0&k=20&c=sAUop7R4pohc-Pghb3CqVJnFE44p2phGi47z7pjK4Lc=" alt="cake" width="300" height="300"/>
              </div>
              <div  class="opt" style={{ border:"3px solid black"}} >
                <div className='h4 qq'>Mukund Cake shop</div>
                <img src="https://garrysgrill.com/wp-content/uploads/2018/03/feature-cake-.png" alt="cake" width="300" height="300"/>
              </div>


        



                            </div>
                            <button class="continue-button" onClick={()=>clickHandler()}>Submit Campaign</button>
        </div>

        </div>
        

      </div>
    </div>



        
        </>
    )
}
