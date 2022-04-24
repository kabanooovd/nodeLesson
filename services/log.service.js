// import {bgRed, bgGreen, bgCyan} from "chalk"
import chalk from "chalk";
import dedent from "dedent-js";

const { bgRed, bgGreen, bgCyan, bgYellow } = chalk;

const printError = (error) => {
	console.log(`${bgRed(" Error ")} :  ${error}`);
};

const printSuccess = (message) => {
	console.log(`${bgGreen(" SUCCESS ")} :  ${message}`);
};

const printHelp = () => {
	console.log(
		dedent(
            `
                ${bgCyan(" HELP ")}
                Без параметров - вывод погоды
                -s [CITY] для установки города
                -h длявывода помощи
                -t [API KEY] для сохранения токена
            `
        )
	);
};

const printWeather = (response, icon) => {
	console.log(
		dedent(
            `
                ${bgYellow(" WEATHER ")}
                Weather in ${response.name}
                ${icon}  ${response.weather[0].description}
                Temperature: ${response.main.temp} (feels like: ${response.main.feels_like})
                Humidity is: ${response.main.humidity}
                Wind speed is: ${response.wind.speed}
            `
        )
	);
};

export { printError, printSuccess, printHelp, printWeather };
