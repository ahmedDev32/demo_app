import axios from "axios";
import { fastify_url, ngrok_url } from "../config/config";

export const OnboardcallApi = async(data)=>{
 
    try {
        const response = await axios.post(`${ngrok_url}/outbound-call`,data
    )
        return response.data;
    } catch (error) {
        console.error("Error fetching data while onboarding:", error);
    }

}


// api function for call logs 
export const call_logs = async(simId) => {
    try {
        const response = await axios.get(`${fastify_url}/call-status?callSid=${simId}`)
        const existing = JSON.parse(localStorage.getItem('logsArr')) || []
        existing.push(response.data)
        localStorage.setItem('logsArr',JSON.stringify(existing))
    } catch (error) {
        console.error('Error While Getting Recored For SimID',error)
    }
}

 