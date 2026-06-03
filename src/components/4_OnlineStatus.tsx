import { useOnlineStatus } from "../hooks/4_useOnlineStatus";

export function OnlineStatus() {
    const online = useOnlineStatus();
    console.log(online);

    return <h2>{online ? "Online" : "Offline"}</h2>;
}
