import axios from "axios";

const URI = 'api-lookup-weather-back.up.railway.app/api/' 

export const getUserIp = async () => {
  try {
    const data = await axios.get(URI + 'ip')
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getLastVisitors = async () => {
  try {
    const data = await axios.get(URI + 'visitors')
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getLastLookups = async () => {
  try {
    const data = await axios.get(URI + 'lookups')
    return data
  } catch (err) {
    console.log(err)
  }
}

export const ipLookup = async (ip) => {
  try {
    const data = await axios.post(URI + 'ip', {reqIp: ip}, {headers: {'Content-Type': 'application/json'}})
    return data
  } catch (err) {
    console.log(err)
  }
}


