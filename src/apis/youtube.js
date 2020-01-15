import axios from 'axios';

const KEY = 'AIzaSyAhyNfTJYlOJqmV9LYzOh6dscgyUo5Oork';

export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
