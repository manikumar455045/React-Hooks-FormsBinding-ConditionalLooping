import React, {useState} from "react"

interface IUser{
    username : string,
    password : string,
    email : string,
    about : string
    designation : string,
    terms : boolean
}

interface IProps{
}
interface IState{
    user : IUser
}

let FormsBinding : React.FC<IProps> = () => {

    let [state , setState] = useState<IState>({
        user : {
            username : '',
            password : '',
            email: '',
            about : '',
            designation: '',
            terms: false
        }
    })

    let updateInputDetails = (event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setState({
          user : {
              ...state.user,
              [event.target.name] : event.target.value
          }
      })
    }

    let upDateCheckElement = (event : React.ChangeEvent<HTMLInputElement>) => {
        setState({
            user : {
                ...state.user,
                [event.target.name] : event.target.checked
            }
        })
    }

    let submitEvent = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state.user)
    }

    return (
        <React.Fragment>
            <section className="mt-2">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h2>Register Here</h2>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submitEvent}>
                                        <div className="form-group mt-2">
                                            <input name= "username" type="text" className="form-control" placeholder="Username" onChange={updateInputDetails}/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input name= "password" type="password" className="form-control" placeholder="Password" onChange={updateInputDetails}/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input name= "email" type="email" className="form-control" placeholder="Email" onChange={updateInputDetails}/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <textarea name="about" maxLength={200} cols={50} rows={3} className="form-control" placeholder="About Yourself" onChange={updateInputDetails}/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <div className="form-check form-switch ">
                                                <input type="checkbox" name="terms" className="form-check-input" id="terms" onChange={upDateCheckElement} />
                                                <label className="form-check-label" htmlFor="terms">Accept Terms</label>
                                            </div>
                                        </div>
                                        <select className="form-select mt-2" name="designation" onChange={updateInputDetails} >
                                            <option>Select your designation</option>
                                            <option value="Assistant System Engineer">Assistant System Engineer</option>
                                            <option value="System Engineer">System Engineer</option>
                                            <option value="Team Lead">Team Lead</option>
                                            <option value="Manager">Manager</option>
                                        </select>
                                        <button type="submit" className="btn btn-dark text-white mt-2">Register</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}

export default FormsBinding;