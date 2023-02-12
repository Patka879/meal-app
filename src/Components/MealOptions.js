import {Breakfast, Lunch, Dinner} from '../images/index'



function toggleChange() {
    const burgerBtn = document.getElementById('burger-btn')
    burgerBtn.classList.toggle("change");
}

export default function MealOptions() {
    return(
        <div className='options-container' id='options-container'>
            <div className='burger-btn-container' id='burger-btn' onClick={toggleChange}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <h3 className='option-hello-msg'>Hello Friend!</h3>
            <h1 className='option-header'>Which meal idea <br></br> are You looking for?</h1>
            <input 
                className='option-search' 
                placeholder="Search for a specific dish...">
            </input>
            <div className="meal-options">
                <a className='option option-breakfast'>
                    <Breakfast />
                    Breakfast
                </a>
                <a className='option option-lunch'>
                    <Lunch />
                    Lunch
                </a>
                <a className='option option-dinner'>
                    <Dinner />
                    Dinner
                </a>
            </div>
        </div>
    )
}