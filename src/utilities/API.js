// var axios = require('axios');
import axios from "axios";

export default {

  userLogin: function(loginParams) {
    return axios.post('/api/login', loginParams)
  },


  userLogout: function() {
    return axios.get('/api/logout')
  },

  userSignup: function(formData) {
    return axios({
      url: '/api/signup',
      method: 'POST',
     // data: formData,
      content: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
  },

 
}
