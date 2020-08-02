import React from "react";

export const Form = ({
    children,
    onSubmit = () => { },
    onChange = () => { },
    ...props
}) => {
    function handleSubmit(event) {
        const data = getFormData(event.target);
        onSubmit(data);
        event.preventDefault();
    }

    function handleChange(event) {
        const data = getFormData(event.nativeEvent.target.form);
        onChange(data);
    }

    return (
        <form {...props} onSubmit={handleSubmit} onChange={handleChange}>
            {children}
        </form>
    );
};

function getFormData(form) {
    const formData = new FormData(form);

    return [...formData.entries()].reduce((acc, entry) => {
        const [key, value] = entry;
        const isArray = key.includes("[]");
        const cleanKey = key.replace("[]", "");
        const existingValue = acc[cleanKey];

        return {
            ...acc,
            [cleanKey]: isArray ? [...existingValue, value] : value
        };
    }, {});
}
