#!/usr/bin/env node
import {getArgs} from "./helpers/args.js"
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue("token", token)
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
        // save city
    } 
    if (args.t) {
        // saveKeyValue("token", args.t)
        return saveToken(args.t)
    } 
    // for example return weather
};

initCli();