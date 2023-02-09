import { useState } from "react"

export default function Welcome() {

    const [hidden, setHidden] = useState(true)
    

    return(
        <div>
        {!hidden ?
        <div className='welcome-container' id='welcome-container'>
            <div className='welcome-text'>
                <h1 className='welcome-header'>Welcome to Your meal planner!</h1>
                <h4 className='welcome-msg'>We are here to help You create Your meal list, plan You next meal and create groceries list</h4>
            </div>
            <button className='btn' onClick={() => setHidden(s => !s)} >Let's see what's for dinner!</button>
        </div> : null}
        </div>
    )
}