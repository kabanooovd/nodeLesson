import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";
import { printSuccess, printError } from "./log.service.js";

const filePath = join(homedir(), "weather-data.json");

const TOKEN_DICTIONARY = {
    token: "token",
    city: "city",
}

const saveKeyValue = async (key, value) => {
	let data = {};
    try {
        if (await isExist(filePath)) {
            const file = await promises.readFile(filePath);
            data = JSON.parse(file);
        }
        data[key] = value;
        await promises.writeFile(filePath, JSON.stringify(data));
        printSuccess("Done!")
    } catch(err) {
        printError(err.message)
    }
	
};

const getKeyValue = async (key) => {
	let data = {};
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		data = JSON.parse(file);
		return data[key];
	} else {
        return undefined;
    }
};

const isExist = async (path) => {
	try {
		await promises.stat(path);
		return true;
	} catch (err) {
        printError(err.message)
		return false;
	}
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };

// const saveKeyValue = (key, value) => {
//     console.log(dirname(filePath))
//     console.log(basename(filePath))
//     console.log(extname(filePath))
//     console.log(relative(filePath, dirname(filePath)))
//     console.log(isAbsolute(filePath))
//     console.log(resolve(".."))
//     console.log(sep)
// }
