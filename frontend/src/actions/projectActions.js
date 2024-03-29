import axios from "axios"
import { PROJECT_DETAILS_FAIL, PROJECT_DETAILS_REQUEST, PROJECT_DETAILS_SUCCESS } from "../constants/projectConstants"

export const detailsProject = () => async (dispatch) => {
    try {
        dispatch({ type: PROJECT_DETAILS_REQUEST })

        const { data } = await axios.get('/api/projects')

        dispatch({
            type: PROJECT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROJECT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}