import { ShrinkItNow } from "../connect"

const express = require("express");
const baseurl = process.env.BASEURL;

const router = express.Router();

router.post('/', (req: any, res: any) => {
    console.log("link");
    // Process the submitted URL here
    var shrunk = ShrinkItNow(req.body.url);
    let link = baseurl +"/r/"+ shrunk;
    console.log(link);
    res.send(`Hello there , your url has been shrinked, you can find it here: <a href='${link}' target='_blank'>${link}</a> , happy shrinking ;)!`);
});

export default router;