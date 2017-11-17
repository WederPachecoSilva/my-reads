const If = ({ condition, children }) => {
    if (condition === true) {
        return (
            { children }
        )
    } else {
        return null;
    }
}

export default If;