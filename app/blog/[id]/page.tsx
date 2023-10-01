async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return response.json();
}

type Props = {
    params: {
        id: string;
    }
}

export default async function Post({params: {id}}: Props) {
    const post = await getData(id);
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}