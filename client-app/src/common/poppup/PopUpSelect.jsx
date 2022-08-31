import React from "react";

class Select extends React.Component {
    static displayName = "Select"

    constructor(props) {
        super(props)
        this.selectedElement = React.createRef()
        this.state = {
            left: undefined,
            top: undefined,
            height: undefined
        }
    }

    componentDidMount = () => {
        const { left, top, height } = this.selectedElement.current.getBoundingClientRect()
        this.props.getPos(left, top, height);
    }

    render() {
        const { children, open } = this.props;
        return React.cloneElement(children, { ref: this.selectedElement, onClick: open });
    }
}

export default Select;