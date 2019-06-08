const axios = require('axios')

sendMessage = async (mobileNumber, message) => {
    try {
        const response = await axios.get(`http://login.aquasms.com/sendSMS?username=9413867113&message=${message}&sendername=SHRJOY&smstype=TRANS&numbers=${mobileNumber}&apikey=a158c234-1628-46ef-b97a-e6a57d5a30b4`)
        // console.log(response);
        return true;
    } catch(err) {
        // console.log(err);
        return false;   
    }
}

module.exports = {
    sendMessage: sendMessage
}