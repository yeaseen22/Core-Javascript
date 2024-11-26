
const _id = Symbol("id")
const _name = Symbol("name")
const _passMark = Symbol("passMark")
const _subjects = Symbol("subjects")

class Exam {
    constructor({ id, name, passMark, subject }) {
        this[_id] = id,
            this[_name] = name,
            this[_passMark] = passMark || 33,
        this[_subjects] = subject
    }

    get id() {
        return this[_id]
    }

    get name() {
        return this[_name]
    }

    set name(value) {
        this[_name] = value
    }

    get subjects() {
        return this[_subjects]
    }

    set subjects(value) {
        this[_subjects] = value
    }

    get passMark() {
        return this[_passMark]
    }

    set passMark(value) {
        this[_passMark] = value
    }

    toString() {
        return `
        ID: ${this[_id]},
        Name: ${this[_name]},
        PassMark: (${this[_passMark]}),
        Subject: (${this[_subjects]})`
    }

}

module.exports = Exam
