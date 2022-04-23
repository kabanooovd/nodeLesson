// import {bgRed, bgGreen, bgCyan} from "chalk"
import chalk from "chalk";
import dedent from "dedent-js";

const { bgRed, bgGreen, bgCyan } = chalk;

const printError = (error) => {
	console.log(`${bgRed(" Error ")} :  ${error}`);
};

const printSuccess = () => {
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

export { printError, printSuccess, printHelp };
