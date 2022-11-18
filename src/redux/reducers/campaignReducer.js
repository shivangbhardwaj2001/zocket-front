

export const initialState = {
    campaignArray: [],

    platform: [
      { name: "Get Leads as call", site: "Google", description: "Reach broad audience and get leads through calls" },
      { name: "Get Leads as facebook messages", site: "FB", description: "Get more FB messages from leads" },
      { name: "Increase Page followers", site: "FB", description: "Encourage customers to follow your page" },
      { name: "Get Customer Leads", site: "FB", description: "Encourage customers to take action" },
      { name: "Get More youtube views", site: "Youtube", description: "Increase organic views by obtaining user attention" },
      { name: "Get More website Traffic", site: "Instagram", description: "Get the right people to visit your web page" },
      { name: "Increase Livestore Traffic", site: "Google", description: "Drive visit to local store and dealershit" },
      { name: "Increase your app instals", site: "Youtube", description: "Get more installs and interaction for your app" },
      { name: "Increase the catalogue sales ", site: "Google", description: "Drive sales of catelogue and get more leads" },
    ],
  
    products: ["Blueberry Cake with raw toppings", "Choclate truffle cake", "Brownie cake with fluffy cream",
    "Ferro rocher cake", "Custard mixed with fruit cake", "Best raw topping choco cake", "Green cup cakes", "Blueberry toppings cake", "Strawberry cakes with blueberry"],

    filteredCampaigns:[]
  
  
  };
  



export const campaignStore = (state = initialState, action)=>{
    switch (action.type) {
        case "SET_LOADING":
            return state = {...state, isLoading:action.payload}
        case "ADD_CAMPAIGN":
            return state = {...state, campaignArray:action.payload, filteredCampaigns: action.payload };
    
        case "ADD_SINGLE_CAMPAIGN":
            return state = {...state, campaignArray:[...state.campaignArray, action.payload]};

        case "DELETE_CAMPAIGN":
            return state = {...state, campaignArray: state.campaignArray.filter((camp)=>camp._id != action.payload)};

        case "SET_SEARCH_CAMPAIGN":
            return state = {...state, filteredCampaigns: action.payload}
        
        default:
            return state;
    }

}

// export default eComStore;