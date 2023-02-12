import { Breakfast, Lunch, Dinner } from "../images"


const BreakfastIcon = {Breakfast}
// const LunchIcon = {Lunch}
// const DinnerIcon = {Dinner}

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
            <h1>Which meal idea are You looking for?</h1>
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