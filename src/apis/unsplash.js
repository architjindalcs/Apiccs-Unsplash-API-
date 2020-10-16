import axios from "axios"

const axiosPreConfig=axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization:"Client-ID v82P3AdLZWoyhL_j-cP4EQtdMRdqNEifmXGaUUvKpoA"
    }
})
export default axiosPreConfig