
/**
 * @Title inspect nested objects
 */

const js = {
    name: 'js all you need to know',
    author: {
        name: 'hm  nayme',
        email: 'hasan.m.nayem@gmail.com'
    },
    contents: {
        video: {
            count: 222
        }
    }
}

const node = {
    name: 'Dive into node js',
    author: {
        name: 'hm  nayme',
        email: 'hasan.m.nayem@gmail.com'
    },
    contents: {
        video: {
            count: 234
        }
    }
}

const react = {
    name: 'understand core feature of react',
    author: {
        name: 'hm  nayme',
        email: 'hasan.m.nayem@gmail.com'
    },
    contents: {
        video: {
            count: 222
        },
        article: {
            count: 22
        },
        quiz: {
            count: 10
        }
    }
}

const inspectObj = (obj, path, returnValue = 0) => {
    return path.split('.').reduce((acc, field) => {
        if (acc) {
            return acc[field]
        }
        return returnValue;
    }, obj)
}

const courses = [js, node, react]

courses.forEach((course) => {
    // console.log(`${course.name} - has - Article ${inspectObj(course, 'contents.article.count')}`);
    const videoCount = inspectObj(course, 'contents.video.count')
    const articleCount = inspectObj(course, 'contents.artice.count')
    const quizCount = inspectObj(course, 'contents.quiz.count')

    console.log(`Total video = ${videoCount} Article = ${articleCount} Quiz = ${quizCount}`);

})

const links = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Youtube', url: 'https://youtbe.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https:/twitter.com' }
]
let tempalte = `<ul>{{links}}</ul>`
const linkList = links.reduce((acc, cur) => {
    acc += `<li><a href="${cur.url}"> ${cur.name}</li>`
    return acc;
}, '')

tempalte = tempalte.replace('{{links}}', linkList)

const words = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'fix',
    'seven',
    'eight',
    'nine',
    'ten'
]

const group = words.reduce((acc, cur) => {
    const len = cur.length;
    if (acc[len]) {
        acc[len].push(cur)
    } else {
        acc[len] = [cur]
    }

    return acc;
}, {})

console.log(group)