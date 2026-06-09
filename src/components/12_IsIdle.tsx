import { useIdle } from "../hooks/12_useIdle";

export function IsIdle() {
    const isIdle = useIdle(10000); // 10 seconds
    return (
        <div>{isIdle ? <p>User is idle 😴</p> : <p>User is active 🟢</p>}</div>
    );
}
