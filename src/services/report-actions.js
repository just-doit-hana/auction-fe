import axiosInstance from './axios-instance';

const BASE_URL = 'https://reasapi.azurewebsites.net/api';

export async function getReportAfterPayment(startDate, endDate){
    const url = `${BASE_URL}/Transaction?startDate=${startDate}&endDate=${endDate}`;
    return axiosInstance.get(url);
}