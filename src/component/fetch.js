import axios from 'axios'


export const FetchDataIndonesia = async () => {
    try {
        const response = await axios.get(`https://covid19.mathdro.id/api/countries/indonesia`)
        const DataRes = {
            konfirmasi: response.data.confirmed.value,
            meninggal: response.data.deaths.value,
            sembuh: response.data.recovered.value
        }
        return DataRes
    } catch (error) {

    }
}