import axios from 'axios';

export const isbnSearch = (params) => {
  return axios.get('https://www.nl.go.kr/seoji/SearchApi.do', { params });
};
