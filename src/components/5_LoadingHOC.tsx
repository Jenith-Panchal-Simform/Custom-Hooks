import { withLoading } from "../hoc/withLoading";

function UserList({ datas }) {
    
    return (
        <div>
            <ul>
                {datas.map((data) => (
                    <>
                        <p>{data.id}</p> <p>{data.name}</p>
                    </>
                ))}
            </ul>
        </div>
    );
}

export const UserListWithLoading = withLoading(UserList);
