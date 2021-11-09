import React, { useState } from "react";


function Form({ addTask }) {

    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        addTask(name);   /* call back */
        setName("");
    }
    function handleChange(e) {
        const { value } = e.target;
        setName(value);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                    onBlur={handleChange}
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>
        </>
    )
}

export default Form;


/* Data pass through child to parent for that we need to create method in parent  as well as in child
 through child we pass the arguement in the parent app */