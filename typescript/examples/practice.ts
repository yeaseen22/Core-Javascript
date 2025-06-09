// File: library-system.ts
class Book {
    private available: boolean = true;

    constructor(public readonly title: string, public readonly author: string, public readonly isBn: string) { }

    isAvailable(): boolean {
        return this.available
    }

    markAsBorrow(): void {
        this.available = false;
    }

    markAsReturned(): void {
        this.available = true;
    }
}

class Member {
    private borrowedBook: Book[] = [];

    constructor(public readonly name: string, public readonly id: number) {

    }

    borrowBook(book: Book): void {
        if (book.isAvailable()) {
            book.markAsBorrow();
            this.borrowedBook.push(book)
        } else {
            throw new Error(`Book '${book.title}' is not available.`)
        }
    }

    returnBook(book: Book): void {
        const index = this.borrowedBook.indexOf(book)
        if (index >= 0) {
            book.markAsBorrow();
            this.borrowedBook.splice(index, 1)
        } else {
            throw new Error(`Book '${book.title}' not borrowed by this member.`);
        }
    }

    listBorrowedBook(): string[] {
        return this.borrowedBook.map(book => `${book.title} by ${book.author}`)
    }
}


class Librarian extends Member {
    constructor(name: string, id: number) {
        super(name, id)
    }

    addBook(library: Library, book: Book): void {
        library.addBook(book);
    }

    removeBook(library: Library, book: Book): void {
        library.removeBook(book);
    }
}


class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book)
    }

    removeBook(book: Book): void {
        const index = this.books.indexOf(book)
        if (index >= 0) this.books.splice(index, 0)
    }

    registerMemeber(member: Member,): void {
        this.members.push(member)
    }

    borrow(member: Member, book: Book): void {
        member.borrowBook(book)
    }

    return(member: Member, book: Book): void {
        member.returnBook(book);
    }

    listAvailableBooks(): string[] {
        return this.books.filter(book => book.isAvailable())
            .map(book => `${book.title} (${book.author})`);
    }
}

// === Sample usage ===
const library = new Library();
const librarian = new Librarian("Alice", 1);

const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");

librarian.addBook(library, book1);
librarian.addBook(library, book2);

const member = new Member("Bob", 101);
library.registerMemeber(member);

library.borrow(member, book1);
console.log(member.listBorrowedBook());
console.log(library.listAvailableBooks());

library.return(member, book1);
console.log(library.listAvailableBooks());