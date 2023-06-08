import axios from 'axios';

export default (token,data,version,accId) => {
  return new Promise((resolve, reject) => {
    // set the same version and account id 
    var url = `https://graph.facebook.com/${version}/${accId}/messages`
    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        //set token 
        'Authorization': `Bearer ${token}`
      }
    }).then((done) => {
      resolve(done)
    }).catch((err) => {
      reject(err)
    })
  })
}