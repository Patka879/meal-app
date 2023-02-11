import { Breakfast, Lunch, Dinner } from "../images"


const BreakfastIcon = {Breakfast}
// const LunchIcon = {Lunch}
// const DinnerIcon = {Dinner}

export default function MealOptions() {
    return(
        <div className='options-container' id='options-container'>
            <h1>Choose Your Meal</h1>
            <a className='option option-breakfast'>
                {/* <BreakfastIcon className='option-img' /> */}
                Breakfast
            </a>
            <a className='option option-lunch'>
                <img src={Lunch} className='option-img'></img>
                Lunch
            </a>
            <a className='option option-dinner'>\
                Dinner
                <img src={Dinner} className='option-img'></img>
            </a>
        </div>
    )
}