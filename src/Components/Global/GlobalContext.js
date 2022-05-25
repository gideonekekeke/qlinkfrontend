import React, {createContext} from 'react'
import { useSelector } from 'react-redux'


export const GlobalContext = createContext()

export const AuthProvide = ({children})=>{
    
      const [show, setShow] = React.useState(false)
      const [current, setCurrent] = React.useState(null)

     
	const user = useSelector(
		(state) => state?.persistedReducer?.current,
	);
    	React.useEffect(() => {
	

		setCurrent(user);
		console.log("this is the current", current);
        // console.log("this is redux",readGroupId )
	}, []);
    const handleShow = ()=>{
        setShow(!show)
    }
    return(
        <GlobalContext.Provider value = {{
            show,
             handleShow,
             current
        }}>
            {children}
        </GlobalContext.Provider>
    )
}