import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '4ad9671b6fmshb50b1fbc21294a0p1d313cjsn81fa8f006a48'
    }
};

export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);
        return data;
    } catch (err) {
        console.log(err)
    }
}