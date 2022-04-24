// import https from "https";
import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getWeather = async (city) => {
	const token = await getKeyValue(TOKEN_DICTIONARY.token);
	if (!token) {
		throw new Error("token is undefined, use -> -t API_KEY");
	}

    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
            q: city,
            appid: token,
            lang: "ru",
            units: "metric",
        }
    })

    return data;

	// const url = new URL(`https://api.openweathermap.org/data/2.5/weather`);
	// url.searchParams.append("q", city);
	// url.searchParams.append("appid", token);
	// url.searchParams.append("lang", "ru");
	// url.searchParams.append("units", "metric");
	// https.get(url, (res) => {
    //     let result = "";
    //     res.on("data", (chunk) => {
    //         result += chunk;
    //     })
    //     res.on("end", () => {
    //         console.log(result)
    //     })
    // });
};

export { getWeather }
