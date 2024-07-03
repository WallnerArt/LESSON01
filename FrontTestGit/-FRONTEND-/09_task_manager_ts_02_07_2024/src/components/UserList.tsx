import { Component, ReactNode, createRef, RefObject } from "react";

class UserList extends Component {
    textRef: RefObject<HTMLTextAreaElement>

    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            // TODO 
        };
        this.textRef = createRef() 


    }



    componentDidMount(): void {
        /* TODO что происходит при монтирование компонента */
    }



    render(): ReactNode {
        return <>UserList</>
    }
}

export default UserList