// const { emailTemplate } = require("./01-foundations/01-templates");
// require("./01-foundations/02-destructuring");
// const { findUserById } = require("./01-foundations/03-callbacks");

// const { buildMakePerson } = require("./01-foundations/04-factory");
// const { getUUID, getAge } = require("./plugins");

// const getPokemonById = require("./01-foundations/05-promises");
const { buildLogger } = require("./plugins");

// --- REFERENCIA A FUNCIÓN FACTORY ---
// const obj = {
//   name: "John",
//   birthdate: "1996-02-22",
// };

// const makePerson = buildMakePerson({ getUUID, getAge });
// const person = makePerson(obj);
// console.log({ person });

// const id = 1;
// findUserById(id, (err, user) => {
//   if (err) {
//     throw new Error(err);
//   }

//   console.log({ user });
// });

// console.log(emailTemplate);

// --- REFERENCIA A PROMISES ---
// getPokemonById(1).then((pokemon) => console.log({ pokemon }));

// -- REFERENCIA A LOGS CON WINSTON ---
const logger = buildLogger("app.js");
logger.log("Hola Mundo");
logger.error("Esto es algo malo!!");
