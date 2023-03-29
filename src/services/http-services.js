const Base_URL=process.env.NODE_API;

export function getAllPosts(){
    return fetch(`${Base_URL}/posts`).then(res=>res.json()).catch(err=> alert(err.message));
}

export function addNewPost(post){
    return fetch(`${Base_URL}/post`,{
        method: 'POST',
        body:post
    }).then(res=> res.json()).catch(err=> alert(err.message));
}