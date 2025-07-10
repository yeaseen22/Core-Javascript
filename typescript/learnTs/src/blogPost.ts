
// define type alias
type BlogPost = {
    title: string;
    content: string;
    author: string;
    published: boolean;
    publishedDate?: string;
}

const myPost: BlogPost = {
    title: 'learn ts',
    content: "learning ts from yt",
    author: 'own',
    published: true,
}

/**
 * 
 * @param post 
 */
function printPost(post: BlogPost){
    console.log('Title', post.title);
    
}
