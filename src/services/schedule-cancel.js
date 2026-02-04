import { apiConfig } from '../services/api-config.js';

export async function scheduleCancel({id}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: 'DELETE',
        });

        alert('Schedule cancelled successfully.');
    } catch (error) {
        console.error( error);
        alert('Failed to cancel the schedule. Please try again later.');
    }   
} 
