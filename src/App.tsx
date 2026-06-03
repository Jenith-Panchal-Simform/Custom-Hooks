// import { Counter } from "./components/1_Counter";
// import { CliboardDemo2 } from "./components/2_CliboardDemo2";
// import { ClipboardDemo } from "./components/2_ClipBoard";
// import { DarkModeComponent } from "./components/3_DarkModeComponent";
// import { OnlineStatus } from "./components/4_OnlineStatus";
// import { UserListWithLoading } from "./components/5_LoadingHOC";
import { PreviousValue } from "./components/6_PreviousValue";

const App = () => {
    const data = [
        {
            id: 1,
            name: "Jeith",
        },
    ];
    return (
        <div>
            {/* Hook1 */}
            {/* <Counter /> */}

            {/* Hook2 */}
            {/* <ClipboardDemo /> */}
            {/* <CliboardDemo2 /> */}
            {/* <DarkModeComponent /> */}
            {/* <OnlineStatus /> */}
            {/* <UserListWithLoading loading="true" datas={data} /> */}
            <PreviousValue />
        </div>
    );
};

export default App;
