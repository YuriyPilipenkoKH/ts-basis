import axios from 'axios'


async function fetchCoursesByChannelId(channelId:string) {
  return await axios.get(`http://localhost:4000/channels/${channelId}`)
}

export default fetchCoursesByChannelId

