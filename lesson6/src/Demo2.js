function Demo2_Default() {
    return (
        <p>This is a default export of JSX.</p>
    );
}

const demo2_named_array = [1,3,5,7];

const demo2_named_obj = {
    a: "something",
    b: "another thing",
};

export default Demo2_Default;
export { demo2_named_array, demo2_named_obj };
