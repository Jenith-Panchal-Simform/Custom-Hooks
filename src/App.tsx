// import { Counter } from "./components/1_Counter";
// import { CliboardDemo2 } from "./components/2_CliboardDemo2";
// import { ClipboardDemo } from "./components/2_ClipBoard";
// import { DarkModeComponent } from "./components/3_DarkModeComponent";
// import { OnlineStatus } from "./components/4_OnlineStatus";
// import { UserListWithLoading } from "./components/5_LoadingHOC";
import { ScreenSize } from "./components/10_ScreenSize";
import { Search } from "./components/11_Search";
import { IsIdle } from "./components/12_IsIdle";
import { ShowMoreData } from "./components/13_ShowMoreData";
import { ClickOutside } from "./components/14_ClickOutside";
import { KeyPress } from "./components/15_KeyPress";
import { ResetState } from "./components/16_ResetState";
import ShortCutDemo from "./components/17_ShortCutDemo";
import WindowDimension from "./components/18_WindowDimension";
import MediaQuery from "./components/19_MediaQuery";
import FirstRender from "./components/20_FirstRender";
import { PreviousValue } from "./components/6_PreviousValue";
import { PaginationDemo } from "./components/7_usePagination";
import { Signup } from "./components/8_SignUp";
import { FetchUsers } from "./components/9_FetchUsers";

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
            {/* <Signup /> */}
            {/* <FetchUsers /> */}
            {/* <ScreenSize /> */}
            {/* <Search /> */}
            {/* <IsIdle /> */}
            {/* <ShowMoreData/> */}
            {/* <ClickOutside /> */}
            {/* <KeyPress /> */}
            {/* <ResetState /> */}
            {/* <ShortCutDemo /> */}
            {/* <WindowDimension /> */}
            {/* <MediaQuery /> */}
            <FirstRender />
        </div>
    );
};

export default App;
