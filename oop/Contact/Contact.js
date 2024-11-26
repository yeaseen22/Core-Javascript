
// const _person = Symbol('person')
const _address = Symbol("address")
const _email = Symbol('email')
const _phone = Symbol('phone')
const _alterNativePhone = Symbol('alterNativePhone')

const _id = Symbol("id")


class Contact {
    constructor({ id, address, alterNativePhone, email, phone }) {
        this[_id] = id,
            this[_alterNativePhone] = alterNativePhone || '',
            this[_address] = address || null,
            this[_email] = email || '',
            this[_phone] = phone || ''
    }

    get id() {
        return this[_id]
    }

    get address() {
        return this[_address]
    }

    set address(value) {
        this[_address] = value
    }

    get email() {
        return this[_email]
    }

    set email(value) {
        this[_email] = value
    }

    get phone() {
        return this[_phone]
    }

    set phone(value) {
        this[_phone] = value
    }

    get alterNativePhone() {
        return this[_alterNativePhone]
    }

    set alterNativePhone(value) {
        this[_alterNativePhone] = value
    }

    toString() {
        return `
        ID: ${this[_id]},
        PHONE: ${this[_phone]},
        EMAIL: ${this[_email]},
        ADDRESS: ${this[_address]}
        ALTERNATIVE PHONE: ${this[_alterNativePhone]}
        `;
    }

}

module.exports = Contact
