import React, {createContext} from 'react'

export const GlobalContext = createContext()

export const AuthProvide = ({children})=>{
      const [show, setShow] = React.useState(false)
      const [current, setCurrent] = React.useState()

      console.log(current)

    	React.useEffect(() => {
		const saveItem = JSON.parse(localStorage.getItem("dataUsers"));

		setCurrent(saveItem);
		console.log("this is the current", current);
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