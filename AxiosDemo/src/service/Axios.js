import axios from 'axios'

export default (requestParams,callBack)=>{
    callApi(requestParams,callBack)
}

const callApi = async (requestParams, callBack) => {
    console.log('request ======', requestParams)

    await axios(requestParams)
        .then(({ data }) => {
            console.log('Success======', data)
            callBack(data)
        })
        .catch((error) => {
            console.log('fail======', error)

            console.log(error)
        })
        
}