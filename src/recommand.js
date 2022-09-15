import axios from 'axios';

export const recommandSearch = (params) => {
  return axios.get('https://nl.go.kr/NL/search/openApi/saseoApi.do', {
    params,
  });
};
