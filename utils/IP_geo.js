"use strict";

const axios = require('axios');
const { response } = require('express');

async function getIP()
{
    let result = await axios.get(`http://api.my-ip.io/ip`);
    console.log(result.data);
    return await result.data;
    
}
let ip = getIP(body);
console.log(ip);


// let getIP = async () => {
//     let res = await axios
//         .get('http://api.my-ip.io/ip')
//         .then((response) => {
//             console.log(response.data);    
//             return response.data;
//         });
// };
// let result = await getIP();

// axios.get('http://api.my-ip.io/ip')
//   .then((result) => {
// console.log(result.data);
// const response = result
//   })

  

// console.log(response);