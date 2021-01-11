import './App.css';
import React, {useContext, useState, createContext} from 'react'
import Layout from './Layout'
import Slider from './Slider'
import CSSTransition from "react-transition-group/cjs/CSSTransition";


// export const createContext = React.createContext(false)
export const Context = React.createContext();


function App() {

    // const [context, setContext ] = useContext(createContext)
    const [context, setContext] = useState(false);

    function timeoutAnimation () {
        setTimeout(() => {setContext(true)},1000)
    }

    timeoutAnimation()

    // console.log('context', context)

    return (

        <Context.Provider value={[context, setContext]}>
      <Layout>

      <h1>Hello World</h1>

          <h2>{context}</h2>

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
        <p className="paragraph">This should be displayed at the same time as header and slider: {context}</p>

    </CSSTransition>

         <Slider/>


      </Layout>
            </Context.Provider>
  );
}

export default App;
