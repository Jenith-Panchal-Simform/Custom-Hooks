import { useFetch } from "../hooks/9_useFetch";

export function FetchUsers() {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users",
    );
    if (loading) return <p>Loading...</p>;
    if (error) return "Error";
    return (
        <div>
            {data.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}
