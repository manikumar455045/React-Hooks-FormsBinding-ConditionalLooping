import React, {useState} from "react"

interface IProps{
}
interface IState{
    isLoggedIn : boolean,
    message : string
}

let ConditionalLooping : React.FC<IProps> = () => {

    let [state , setLoginState] = useState<IState>({
        isLoggedIn : false,
        message : 'Welcome guest user'
    })

    let updateLoginStatus = () => {
        setLoginState({
            message : 'Hello Mani Kumar!!!!!',
            isLoggedIn : true
        })
    }

    let updateLogoutStatus = () => {
        setLoginState({
            message : 'Welcome guest user',
            isLoggedIn : false
        })
    }

    return (
        <React.Fragment>
            <section className="mt-2">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h2>{state.message}</h2>
                            {
                               state.isLoggedIn ?
                                   <button className="btn btn-success" onClick={updateLogoutStatus}>Logout</button> :
                                   <button className="btn btn-danger" onClick={updateLoginStatus}>Login</button>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}

export default ConditionalLooping;