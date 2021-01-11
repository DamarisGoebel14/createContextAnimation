import React, {useContext} from 'react'
import {Context} from './App'
import CSSTransition from "react-transition-group/cjs/CSSTransition";
import './App.css';


const Header = () => {
    const [context, setContext] = useContext(Context);


    return (
        <div>
            <CSSTransition
                in={context}
                timeout={{appear:5000, enter: 5000}}
                classNames={{
                    appear: "scrollAppear",
                    appearActive:"scrollAppearActive",
                    appearDone: "scrollAppearDone",
                    enter:"scrollEnter",
                    enterActive:"scrollEnterActive",
                    enterDone:"scrollEnterDone"
                }}
                appear={true}
            >
            <h1>Header</h1>
            </CSSTransition>
        </div>
    )
}

export default Header