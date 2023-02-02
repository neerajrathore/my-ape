import React, { useEffect, useRef } from "react"

// how to get element by ID using the document.getElementById() method and via a ref
export function RefExample() {
    const ref = useRef();
    const secondNameRef = useRef(null);
    const firstNameRef = useRef(null);
    // The useEffect hook runs after the DOM elements in the component have been rendered to the DOM, 
    // so if an element with the provided id exists, it will be selected.
    useEffect(() => {
        // old time js would access element like this
        // new we just send ref to the element useref
        const element = document.getElementById('my-element');
        console.log("element", element);

        console.log(ref.current, "ref.current");
    }, [])

    const secondNameKeyDown = (e) => {
        if (e.key === "Enter") {
            firstNameRef.current.focus()
        }
    }
    const firstNameKeyDown = (e) => {
        if (e.key === "Enter") {
            secondNameRef.current.focus();
        }
    }
    // return executed instantly 
    return (
        <div>
            {/* <h2 id="my-element" ref={ref}>
                some content here
            </h2> */}
            <Input type="text" onKeyDown={firstNameKeyDown} ref={firstNameRef} placeholder={"first name"} ></Input>
            <Input type="text" onKeyDown={secondNameKeyDown} ref={secondNameRef} placeholder={"second name"} ></Input>
        </div>
    )
}

// will automatically get ref whenever using Input tag but ref usme bhi pass hone chahiye
// forward ref just forwatd the reference down the custom component 
const Input = React.forwardRef((props, ref) => {
    return (
        <>
            <input {...props} ref={ref} />
        </>
    )
}
)