export default function MealOptions() {
    return(
        <div className='options-container' id='options-container'>
            <h1>Choose Your Meal</h1>
            <div className='option-breakfast'>
                <h2>Breakfast</h2>
                <img className='option-img'></img>
            </div>
            <div className='option-lunch'>
                <img className='option-img'></img>
                <h2>Lunch</h2>
            </div>
            <div className='option-dinner'>\
                <h2>Dinner</h2>
                <img className='option-img'></img>
            </div>
        </div>
    )
}