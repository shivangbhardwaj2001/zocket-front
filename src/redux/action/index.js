export const setLoading=(data)=>{
    return({
        type:"SET_LOADING", payload: data
    })
}

export const addCampaign = (data) => {
    // console.log(products);
    return({
        type: "ADD_CAMPAIGN", payload: data
    })
}

export const addSingleCampaign = (data) => {
    return({
        type: "ADD_SINGLE_CAMPAIGN", payload: data
    })
}

export const deleteCampaign = (id) => {
    return({
        type: "DELETE_CAMPAIGN", payload: id
    })
}

export const setSearchCampaign= (data)=>{
    return({
        type: "SET_SEARCH_CAMPAIGN", payload: data
    })
}
