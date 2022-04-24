#!/usr/bin/env node
import {getArgs} from "./helpers/args.js"
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
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

const initCli = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp();
    } 
    if (args.s) {
    } 
    if (args.t) {
        return saveToken(args.t)
    } 
    getWeather("moscow")
};

initCli();

// 4498af52cae6d0ab12026d1746e60ed5