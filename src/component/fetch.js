import axios from 'axios'



const URL = 'https://covid19.mathdro.id/api'
export const FetchDataGlobal = async (negara) => {
    let DynamicURL = URL
    if (negara) {
        DynamicURL = `${URL}/countries/${negara}`
    }
    if (negara === 'global') {
        DynamicURL = URL
    }
    try {
        const { data: { confirmed, deaths, recovered } } = await axios.get(DynamicURL)
        return { confirmed, deaths, recovered }
    } catch (error) {

    }
}
export const FetchDataCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`https://covid19.mathdro.id/api/countries/`)

        return countries.map(country => country.name)
    } catch (error) {

    }
}