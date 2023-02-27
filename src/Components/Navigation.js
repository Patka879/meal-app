import { NavLink } from "react-router-dom"


export default function DropdwnMenu() {
    return(
        <div className='navigation'>
            <NavLink 
                className='nav-link' 
                to='Favourites'>My Favourites</NavLink>
            <NavLink 
                className='nav-link' 
                to='Recepies'>All recepies</NavLink>
            <NavLink 
                className='nav-link' 
                to='Add'>Add recepie</NavLink>
        </div>
    )
}