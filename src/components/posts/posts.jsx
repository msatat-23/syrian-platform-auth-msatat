import { useQuery } from "@tanstack/react-query";


const fetchposts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('error fetching posts');
    return response.json();
};
const Posts = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchposts,
        staleTime:1000 * 60 * 5
    });
    console.log(data);
    if (isLoading) return <div>Loading posts...</div>;
    if (error) return <div>Error Occured : {error.message}</div>;
    return <div>
        {data.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
};
export default Posts;