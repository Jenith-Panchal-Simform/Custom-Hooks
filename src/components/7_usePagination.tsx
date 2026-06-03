import { usePagination } from "../hooks/7_usePagination";

export function PaginationDemo() {
    const users = ["A", "B", "C", "D", "E"];
    const { currentItems, nextPage, prevPage } = usePagination(users, 2);
    return (
        <div>
            {currentItems.map((user) => (
                <p key={user}>{user}</p>
            ))}
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
        </div>
    );
}
