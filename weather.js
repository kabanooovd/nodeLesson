#!/usr/bin/env node
import {getArgs} from "./helpers/args.js"
import { getWeather, getIcon } from "./services/api.service.js";
import { printError, printHelp, printSuccess, printWeather } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError("No token transmitted...")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
    } catch(err) {
        printError(err.message)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError("No city transmitted...")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
    } catch(err) {
        printError(err.message)
    }
}

const getForcast = async () => {
    try {
        const weather = await getWeather("moscow")
        // console.log(weather)
        printWeather(weather, getIcon(weather.weather[0].icon))
    } catch(err) {
        if (err?.response?.status == 404) {
            printError("Wrong city")
        } else if (err?.response?.status == 401) {
            printError("Wrong token")
        } else {
            printError("Some error has occured...", e.message)
        }
    }

}

const initCli = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        return printHelp();
    } 
    if (args.s) {
        return saveCity(args.s)
    } 
    if (args.t) {
        return saveToken(args.t)
    } 
    return getForcast()
};

initCli();

// 4498af52cae6d0ab12026d1746e60ed5