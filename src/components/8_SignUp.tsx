import { useForm } from "../hooks/8_useForm";

export function Signup() {
    const { values, handleChange } = useForm({
        name: "",
        email: "",
    });

    return (
        <form>
            <input name="name" value={values.name} onChange={handleChange} />
            <input name="email" value={values.email} onChange={handleChange} />
        </form>
    );
}
