import axios from 'axios';

const KEY = 'AIzaSyDQXmmmfdLpSwbk9iJ_a2GrIZszdneX86w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});