// import { Counter } from "./components/1_Counter";
// import { CliboardDemo2 } from "./components/2_CliboardDemo2";
// import { ClipboardDemo } from "./components/2_ClipBoard";
// import { DarkModeComponent } from "./components/3_DarkModeComponent";
// import { OnlineStatus } from "./components/4_OnlineStatus";
// import { UserListWithLoading } from "./components/5_LoadingHOC";
import { PreviousValue } from "./components/6_PreviousValue";
import { PaginationDemo } from "./components/7_usePagination";
import { Signup } from "./components/8_SignUp";

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
            {/* <PreviousValue /> */}
            {/* <PaginationDemo /> */}
            <Signup />
        </div>
    );
};

export default App;
