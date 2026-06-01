import { Counter } from "./components/1_Counter";
import { CliboardDemo2 } from "./components/2_CliboardDemo2";
import { ClipboardDemo } from "./components/2_ClipBoard";
import { DarkModeComponent } from "./components/3_DarkModeComponent";

const App = () => {
    return (
        <div>
            {/* Hook1 */}
            {/* <Counter /> */}

            {/* Hook2 */}
            {/* <ClipboardDemo /> */}
            {/* <CliboardDemo2 /> */}
            <DarkModeComponent />
        </div>
    );
};

export default App;
