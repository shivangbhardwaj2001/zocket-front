
import { initialState } from "./demostate";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import delicon from '../images/delicon.jpeg'
import edit from '../images/edit.jpeg';
import { useSelector } from "react-redux/es/exports";
import { restApiCalls } from "../restApiCalls";
import {deleteCampaign, setLoading, setSearchCampaign} from "../redux/action/index";
import { useDispatch } from 'react-redux/es/hooks/useDispatch';


const ListCampaign = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
 
    
    function filterCampaign(x) {
      return x.name == searching;
    }
    


    const[searching,setSearching]=useState();
    const onInputChange=(e)=>{
    setSearching(e.target.value);

    }

    const onSearchChange=(event)=>{

      const filteredCampaigns = state.campaignArray.filter((camp) => {
          return camp.name.toLowerCase().includes(event.target.value.toLowerCase());
      });  
      dispatch(setSearchCampaign(filteredCampaigns));
      // setRobo(filteredRobots);
  }

  const deleteHandler = async(id) => {
    console.log("here oyu are", id);
    try {
      const getcampaigns = await restApiCalls("DELETE", `campaign/${id}`);
      if(getcampaigns){
        console.log("ududvv!!!", getcampaigns)
        dispatch(deleteCampaign(id));
      }
    } catch (error) {
      console.log(error);
    }finally{
      dispatch(setLoading(false));
    }

  }
  
    return (
        <div>
          <div class="container mt-5 px-2">
            <div class="mb-2 d-flex justify-content-between align-items-center">
              <div class="position-relative">
                <span class="position-absolute search">
                  <i class="fa fa-search"></i>
                </span>
                <input class="form-control w-100" placeholder="Search for the Campaign"  onChange={onSearchChange}/>
              </div>
    
              <div class="px-2">
                <span>
                  Platform&nbsp;<i class="fa fa-search"></i>
                  
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    All Platform
  </a>&nbsp;&nbsp;
  Status<i class="fa fa-search"></i>&nbsp;
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  &nbsp;All Status&nbsp;&nbsp;
  </a>&nbsp;
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  &nbsp;Last 30 days 
  </a>

  

                </span>
                <i class="fa fa-ellipsis-h ms-3"></i>
              </div>
            </div>
            {state.campaignArray.length > 0 ?
            <div class="table-responsive">
              <table class="table table-responsive table-borderless">
                <thead>
                  <tr class="bg-light">
                    <th scope="col" width="4%">
                      <input class="form-check-input" type="checkbox" />
                    </th>
                    <th scope="col" width="5%">
                      On/Off
                    </th>
                    <th scope="col" width="28%" >
                      Campaign
                    </th>
                    <th scope="col" width="25%">
                      Date Range
                    </th>
                    <th scope="col" width="4%">
                      Clicks
                    </th>
                    <th scope="col" width="6%">
                      Budget
                    </th>
                    <th scope="col" width="8%">
                      location
                    </th>
                    <th scope="col" width="4%">
                      Platform
                    </th>
                    <th scope="col" width="8%">
                      status
                    </th>
                    <th scope="col" class="text-end" width="8%">
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>
                {state.filteredCampaigns.map((campaign) => {
                  return (
                    <tbody>
                      <tr>
                        <th scope="row">
                          <input class="form-check-input" type="checkbox" />
                        </th>
                        <td>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                            />
                          </div>
                        </td>
                        <td>
                          <div id="campaign-display">
                            <img
                              src="https://media.gettyimages.com/id/157770344/photo/amber-fort-rajasthan-state-india.webp?s=612x612&w=gi&k=20&c=cnnjbfSGoOMNv8E_SXF1LugN1kGWNr2_Tcb9mmdGCO8="
                              alt=""
                              width="50rem"
                              height="50rem"
                            />
    
                            <div>
                              <div className="text-campaign-1">{campaign.name}</div>
                              <div className="text-campaign-2">Created on {campaign.createdOn.slice(0,10)}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {campaign.startDate.slice(0,10)} - {campaign.endDate.slice(0,10)}
                        </td>
                        <td>{campaign.clicks}</td>
                        <td>{campaign.budget}</td>
                        <td>{campaign.location}</td>
                        <td>{campaign.platform}</td>
                        <td>{campaign.status}</td>
                        <td>
                          <i class="fa fa-ellipsis-h  ms-2"> <img src={edit}  width="20px" height="20px" /></i>
                          <i class="fa fa-ellipsis-h  ms-2" onClick={()=>deleteHandler(campaign._id)} style={{cursor:"pointer"}}>  <img src={delicon}   width="20px" height="20px" /></i>
                        </td>
                      </tr>
                    </tbody>
                  );
                })       }
              </table>
            </div>:<h1>Loading please wait...</h1>}
          </div>
        </div>
      );
    };
    
    export default ListCampaign;