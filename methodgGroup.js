require("core-js");

const language = [
  { title: "JavaScript", type: "scripting" },
  { title: "Java", type: "normal" },
  { title: "Python", type: "scripting" },
];

console.log("Language\n", language, "\n------------------");

let scriptingLanguage = {};
// language.forEach((language) => {
//   const type = language.type;

//   console.log(scriptingLanguage[type]);
//   if (!scriptingLanguage[type]) {
//     scriptingLanguage[type] = [];
//   }

//   scriptingLanguage[type].push(language);
// });

// scriptingLanguage = language.reduce((res, languages) => {
//   console.log("current", res);
//   console.log("previous", languages);
//   const type = languages.type;

//   if (!res[type]) {
//     res[type] = [];
//   }
//   res[type].push(languages);
//   return res;
// }, {});

scriptingLanguage = Object.groupBy(language, (lang) => lang.type);

console.log(scriptingLanguage);
