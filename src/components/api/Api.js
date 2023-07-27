import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const Api = async ({ value, page }) => {
  // const fetchCard = fetch(`https://pixabay.com/api/?key=34368263-756a5eb3a3e360b335b61bac8`).then(resp=>resp.json()).then(data=>{return data})
  const data = axios(
    `?q=${value}&key=34368263-756a5eb3a3e360b335b61bac8&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  );
  if (!data) return new Error('some');
  return data;
};

export default Api;
// q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
//
