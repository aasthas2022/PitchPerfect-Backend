/**
 * routes/livecheck.js
 * 
 * This module contains the handler for the live check endpoint. It provides a simple way 
 * to verify that the server is running and responsive. When the /livecheck endpoint is hit, 
 * it logs the event and responds with a 200 status and a confirmation message.
 */

const liveCheck = (req, res) => {
  console.log("Live check endpoint hit");
  res.status(200).send("Server is running");
};

module.exports = {
  liveCheck,
};
