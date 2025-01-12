/**
 * @param {string} s
 * @param {string} c
 * @param {number} post
 */

function inserChatAtPost(s, c, post) {
    let n = s.length;
    let res = "";
    for (let i = 0; i < n; i++) {
        if (i === post) res += c;

        res += s[i];
    }
    if(post >= n) res += c;

    return res;
}

const result = inserChatAtPost("hello", "A", 2);

console.log(result, 'result');
