import axios from "axios";

/*
var options = {
  uri: 'https://api.schiphol.nl/public-flights/flights?app_id='+appid+'&app_key='+appkey+'&page=0',
  method: 'GET',
  headers: {
    'ResourceVersion':'v3', //extra header needed for calls to Schiphol 
  }
};
*/


export const instance = axios.create({
    baseURL: "https://api.schiphol.nl/public-flights",
    headers: {
        "ResourceVersion": "v4",
        "app_id": "59790048",
        "app_key": "daf451acbc820d87d1e9bf7d57618f82",
    },
  });

