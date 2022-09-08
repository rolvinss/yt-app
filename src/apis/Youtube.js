import axios from 'axios';

const KEY = 'AIzaSyBoJF3k6OOsJ7tiESvQE5JmJ2wUFDvghAM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});