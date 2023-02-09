import Welcome from "./Welcome"
import MealOptions from "./MealOptions"

export default function Main() {

    return (
        <div className='main-container'>
            <h1 className='logo'>What's for dinner?</h1>
            <Welcome />
            <MealOptions />
        </div>
    )
}