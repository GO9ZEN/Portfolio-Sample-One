import axios from "axios"
import { SERVICE_DETAILS_FAIL, SERVICE_DETAILS_REQUEST, SERVICE_DETAILS_SUCCESS } from "../constants/serviceConstants"

export const detailsServices = () => async (dispatch) => {
    try {
        dispatch({ type: SERVICE_DETAILS_REQUEST })

        const { data } = await axios.get('/api/services')

        dispatch({
            type: SERVICE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SERVICE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}