import { useState } from "react";

type FormProps = {
    name: string;
    email: string;
};
export function useForm(initialValues: FormProps) {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("click");
        const key = e.target.name;
        const value = e.target.value;
        console.log(key, value);
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    const values = formData;
    return { values, handleChange };
}
