// user profile

interface UserThis {
    id: number;
    name: string;
    email: string;
}

interface Author extends UserThis {
    bio: string;
    posts: string[]
}

type status = "active" | "inactive" | "banned"

const author1: Author = {
    id: 1,
    name: 'mamun',
    email: 'example.com',
    bio: 'developer',
    posts: ['post1', 'post2']
}
const accountStatus:status = "active"