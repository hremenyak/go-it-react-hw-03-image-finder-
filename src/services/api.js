import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '29943348-171bd2ecaab641b0bb07a2401';

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
