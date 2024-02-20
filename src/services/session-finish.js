import axios from 'axios';

const token = localStorage.getItem('token');

const FinishService = {
    getDataFinish: () => {
        return new Promise((resolve, reject) => {
            const apiUrl = "https://reasapi.azurewebsites.net/api./Sessions/by_havent_pay";

            // Fetch data from the API using Axios
            axios.get(apiUrl,{headers: { Authorization: `Bearer ${token}` },})
                .then((response) => {
                    // At this point, 'response.data' contains the response from the API
                    resolve({
                        count: response.data.length,
                        data: response.data,
                        
                    });
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
};

export default FinishService;