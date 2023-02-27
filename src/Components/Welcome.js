export default function Welcome() {

    function handleClick() {
        document.getElementById('welcome-container').style.display = 'none'
        document.getElementById('options-container').style.display = 'flex'
    }

    return(
        <div className='welcome-container' id='welcome-container'>
            <h1 className='logo'>What's for dinner?</h1>
            <div className='welcome-msg'>
                <h1 className='welcome-header'>Welcome to Your meal planner!</h1>
                <h4 className='welcome-text'>We are here to help You create Your meal list, plan You next meal and create groceries list</h4>
                <button className='btn' onClick={handleClick} >Let's see what's for dinner!</button>
            </div>
        </div> 
    )
}