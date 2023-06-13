import { getCookie } from '@/cookie/cookie';
import axios from 'axios';

export const Server = process.env.NEXT_PUBLIC_API_ENPOINT;
export const BASE_URL = `${process.env.NEXT_PUBLIC_API_ENPOINT}api/`;

export const request = axios.create({
  baseURL: BASE_URL,
  timeout: 20_000,
  headers: { Authorization: `Bearer ${getCookie('jwt_token')}` },
});
