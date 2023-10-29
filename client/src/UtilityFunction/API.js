import axios from "axios";
let baseUrl = "http://localhost:8000/";

export function GetData(apiRoute, payload, callback) {
  axios
    .get(baseUrl + apiRoute, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      callback(error);
    });
}

export function PostData(apiRoute, payload, callback) {
    try
    {
        axios
        .post(baseUrl + apiRoute, payload, {
          headers: {
            Accept: "application/json",
            "Content-Type": 'application/json'
          },
        })
        .then((response) => {
          callback(response);
        })
        .catch((error) => {
          callback(error);
        });
    
    }
    catch(error)
    {
        callback(error);
    }
  
}