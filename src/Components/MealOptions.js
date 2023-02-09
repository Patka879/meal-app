export default function MealOptions() {
    return(
        <div className='options-container' id='options-container'>
            <h1>Choose Your Meal</h1>
            <a className='option option-breakfast'>
                <img className='option-img'></img>
                <h2>Breakfast</h2>
            </a>
            <a className='option option-lunch'>
                <img className='option-img'></img>
                <h2>Lunch</h2>
            </a>
            <a className='option option-dinner'>\
                <h2>Dinner</h2>
                <img className='option-img'></img>
            </a>
        </div>
    )
}