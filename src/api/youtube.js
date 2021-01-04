import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

// import axios from "axios";

// export default axios.create({
//   baseURL: "https://youtube.googleapis.com",
//   headers: {
//     Authorization: "Bearer AIzaSyCohs3GZKg8swYyucbWJV087xZTA-vO5yU",
//     Accept: "application/json"
//   }
// });
// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
