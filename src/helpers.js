import axios from 'axios'

export const getBayernScore=async()=>{
    try {
    let response = await axios.get('https://reedprofile.herokuapp.com/bayern')
    console.log(response,'<----response getBayern')
    return response
    } catch(err){
        console.log(err,'<---err getBayernScore')
        throw err
    }
}