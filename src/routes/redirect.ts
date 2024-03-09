const express = require("express");

const router = express.Router();

import { db } from "../connect";

router.get("/*", (req: any, res: any) => {
  // res.send(("rows"+req.params[0])); 
  // db.all("SELECT url FROM urldirectory WHERE shortern="+req.params[0], (err, rows) => {
  db.all("SELECT url FROM urldirectory WHERE shortern='"+req.params[0]+"'", (err, rows) => {
    if (err) {
      res.send("404! URL not found");
    } else {
      res.send(
        `<p>Please wait 3 seconds while we redirect you to the original URL:"${rows[0].url}"</p>
        <script>
        setTimeout(() => {
          const url = "${rows[0].url}";
          
          // Check if the URL starts with "https://"
          if (!url.startsWith('https://') && !url.startsWith('http://')) {
            // If not, prepend "https://"
            location.replace("https://" + url);
          } else {
            // If it already has the protocol, proceed with the original URL
            location.replace(url);
          }
        }, 3000);
      </script>`);
    }
  });
});

export default router;