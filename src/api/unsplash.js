import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com/search/',
  headers: {
    Authorization: "Client-ID 194r6vkg8C6nBZAqqNu7fqL49pDKIvyzDYkYmKfHynE"
  }
})