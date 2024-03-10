import axios from 'axios';
import axiosInstance from './axios-instance';

const BASE_URL = 'https://reasapiv2.azurewebsites.net/api';

export async function getAllBookingItem() {
  const url = `${BASE_URL}/RealEstate`;
  return axiosInstance.get(url);
}

export async function getBookingItemById(id) {
  const url = `${BASE_URL}/RealEstate/by_id?id=${id}`;
  try {
    axiosInstance.get(url, { data: { id } });
  } catch (error) {
    console.log(error);
  }
  return axiosInstance.get(url);
}

export async function getBookingItemWaiting(id) {
  const url = `${BASE_URL}/RealEstate/by_id?id=${id}/approve`;
 
  try {
    await axiosInstance.get(url);
  } catch (error) {
    console.log(error);
  }
}

export async function getBookingItemNoSesssion(id) {
  const url = `${BASE_URL}//RealEstate/by_id?id=${id}`;

  try {
    await axiosInstance.get(url);
  } catch (error) {
    console.log(error);
  }
}

export async function acceptBookingItemWaiting(id) {
  const url = `${BASE_URL}/RealEstate/by_id?id=${id}`;
  try {
    axiosInstance.put(url, { data: { id } });
    console.log(`Accept BookingItem: ${id}`);
  } catch (error) {
    console.log(error);
  }
}

export async function denyBookingItemWaiting(id) {
  const url = `${BASE_URL}/RealEstate/by_id?id=${id}`;
  const data = {
    id

  };
  try {
    axiosInstance.put(url, data);
    console.log(`Deny BookingItem: ${id}`);
  } catch (error) {
    console.log(error);
  }
}

export function getStatusInfo(status) {
  switch (status) {
    case 'Waiting':
      return { text: 'Đang chờ duyệt', color: '#FA8D24' }; // Red color
    case 'Accepted':
      return { text: 'Đã chấp nhận', color: '#00FF00' }; // Green color
    case 'Denied':
      return { text: 'Từ chối', color: '#FF0000' }; // Blue color
    case 'Unactive':
      return { text: 'Không hoạt động', color: '#FF0000' };
    case 'NotCreateSessionYet':
      return { text: 'Chưa có phiên', color: '#FF0000' };
    case 'SessionWaiting':
      return { text: 'Chờ duyệt', color: '#FA8D24' };
    default:
      return { text: 'Unknown', color: '#000000' }; // Black color for unknown status
  }
}

export const getStatusLabel = (status) => {
  switch (status) {
    case 'Waiting':
      return 'Đang chờ duyệt';
    case 'Accepted':
      return 'Đã chấp nhận';
    case 'Denied':
      return 'Từ chối';
    case 'Unactive':
      return 'Không hoạt động';
    case 'NotCreateSessionYet':
      return 'Chưa có Phiên';
    case 'SessionWaiting':
      return 'Chờ duyệt';
    default:
      return '';
  }
};
