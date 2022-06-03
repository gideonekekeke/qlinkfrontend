import React, {createContext} from 'react'
import { useSelector } from 'react-redux'


export const GlobalContext = createContext()

export const AuthProvide = ({children})=>{
    
      const [show, setShow] = React.useState(false)
      const [current, setCurrent] = React.useState(null)
      const [search, setSearch] = React.useState("")
      const [showResult, setShowResult] = React.useState([])
      const [dloading, setDloading] = React.useState(true)

     
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
             current,
             search,
             setSearch,
             showResult,
             setShowResult,
             dloading,
             setDloading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}