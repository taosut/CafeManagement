import express from "express";
import expressEjsExtend from "express-ejs-extend"


/**
 * Config view engine ejs for website
*/

let configViewEngine = (app) => {
    app.use(express.static("./public"))
    app.engine("ejs", expressEjsExtend)
};

module.exports = configViewEngine;