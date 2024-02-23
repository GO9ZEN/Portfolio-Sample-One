import { SERVICE_DETAILS_FAIL, SERVICE_DETAILS_REQUEST, SERVICE_DETAILS_SUCCESS } from "../constants/serviceConstants"

export const servicesDetailsReducer = (state = { services: [] }, action) => {
    switch (action.type) {
        case SERVICE_DETAILS_REQUEST:
            return { loading: true, services: [] }
        case SERVICE_DETAILS_SUCCESS:
            return { loading: false, services: action.payload } 
        case SERVICE_DETAILS_FAIL:
            return { loading: false, error: action.payload } 
        default:
            return state
    }
}