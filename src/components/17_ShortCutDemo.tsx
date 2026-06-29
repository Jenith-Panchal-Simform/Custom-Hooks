import { useShortCut } from "../hooks/17_useShortcut";

const ShortCutDemo = () => {
    useShortCut(
        {
            ctrl: true,
            key: "s",
        },
        (e: KeyboardEvent) => {
            e.preventDefault();
            console.log("Save");
        },
    );
    return <div>17_ShortCutDemo</div>;
};

export default ShortCutDemo;
