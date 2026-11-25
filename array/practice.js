const languages = [
    { title: "JavaScript", type: "scripting" },
    { title: "Java", type: "normal" },
    { title: "Python", type: "scripting" },
    { title: "Go", type: "normal" }
];
console.log(
    "Languages\n",
    languages,
    "\n-----------------------------------------------"
);

let scriptingLanguages = {};

/**
 * way 1
 */
languages.forEach((language) => {
    const type = language.type

    if (!scriptingLanguages[type]) {
        scriptingLanguages[type] = []
    }

    scriptingLanguages[type].push(language)
})

/** way 2 */

languages.reduce((res, language) => {
    const type = language.type;

    if (!res[type]) {
        res[type] = []
    }
    res[type].push(language)
    return res
}, {})

scriptingLanguages = Object.groupBy(languages, (langs) => langs.type)
console.dir('langues', scriptingLanguages);


