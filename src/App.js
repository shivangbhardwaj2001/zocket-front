
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import  {Create} from "./Components/Create";
import  {Dashboard}  from "./Components/Dashboard";
import  {Products}  from "./Components/Products";
import { Settings}  from "./Components/Settings";
import  {Finish}  from "./Components/Finish";
import  {Navbar}  from "./Components/Navbar";
import  {Sidenavbar}  from "./Components/Sidenavbar";
import { useState } from 'react';
import { addCampaign, setLoading } from './redux/action/index';
import { restApiCalls } from "./restApiCalls";
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
  




function App() {

  const dispatch = useDispatch();
  
  const [page, SetPage] = useState('dashboard');
  const changePage = (p) =>{
    SetPage(p);
  }

  const [campaignState, setCampaignState] = useState({
      active:"1",
      name: "",
      createdOn: new Date().toLocaleDateString(),
      clicks: "0",
      budget: "",
      location: "",
      platform: "",
      status: "Live Now",
      startDate: "",
      endDate: "",
      image: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"
  })

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setCampaignState((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    dispatch(setLoading(true));
    (async () => {
      try {
        const getcampaigns = await restApiCalls("GET", `campaign`);
        if(getcampaigns.success){
          console.log("ududvv!!!", getcampaigns)
          dispatch(addCampaign(getcampaigns.response));
        }
      } catch (error) {
        console.log(error);
      }finally{
        dispatch(setLoading(false));
      }
    })();
  }, []);


// console.log("Yooo!!!",campaignState);
  return (
    <div className="App">
    <div className="sidenavbar">  <Sidenavbar /></div>
    <div className="navbar"> <Navbar /> </div>

    <div className="routingComponent"> 
      {page == 'dashboard' && <Dashboard changePage = {changePage} inputHandler={inputHandler}/>}
      {page == 'create' && <Create changePage = {changePage} inputHandler={inputHandler} setCampaignState={setCampaignState}/>}
      {page == 'products' && <Products changePage = {changePage} inputHandler={inputHandler} setCampaignState={setCampaignState}/>}
      {page == 'settings' && <Settings changePage = {changePage} inputHandler={inputHandler} setCampaignState={setCampaignState}/>}
      {page == 'finish' && <Finish changePage = {changePage} inputHandler={inputHandler} setCampaignState={setCampaignState} campaignState={campaignState}/>}

      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/finish" element={<Finish />} />
      </Routes> */}
      </div>
    </div>
  );
}

export default App;
