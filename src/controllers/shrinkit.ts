import { generateRandomURL } from "./shrinker";
import {db} from "../connect";

function ShrinkItNow(orgURL: string) {
    const currentDate = new Date();
    const currentDateTime = currentDate.toLocaleString();
    let finalURL = generateRandomURL();
    console.log(finalURL);
    db.run("INSERT INTO `urldirectory` (`url`, `shortern`, `datetime`, `visits`) VALUES (?, ?, ?, ?)", [orgURL, finalURL, currentDateTime, 0], function(err) {
    if (err) {
            console.log(err.message);
            return 'Error';
        } 
        else {
            return finalURL;

        }   
    });

}
export {ShrinkItNow};