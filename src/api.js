import axios from 'axios';

const REST_API_KEY = '85966f6a7aa3206b262e31593466257e';

const Kakao = axios.create({
  baseURL: `https://dapi.kakao.com`,
  headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
});

export const bookSearch = (params) => {
  return Kakao.get('/v3/search/book', { params });
};
