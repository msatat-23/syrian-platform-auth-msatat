import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const createpost = async (newpost) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newpost)
        }
    );
    if (!response.ok) throw new Error('error creating post');
    return response;
};
const CreatePost = () => {
    const [text, settext] = useState("");
    const { mutate } = useMutation({
        mutationFn: createpost
    })
    const submit = (e) => {
        e.preventDefault();
        mutate({ text, body: "this is a new post" });
    }
    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="enter a post"
                value={text}
                onChange={(e) => {
                    settext(e.target.value);
                }}
            />
            <button type="submit">create post</button>
        </form>
    );
};
export default CreatePost;
