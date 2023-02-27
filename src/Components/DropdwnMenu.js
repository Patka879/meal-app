import { NavLink } from "react-router-dom"


export default function DropdwnMenu() {
    return(
        <div className='dropdwn-menu' id='dropdwn-menu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='Favourites'>My Favourites</NavLink>
            <NavLink to='Recepies'>All recepies</NavLink>
            <NavLink to='Add'>Add recepie</NavLink>
        </div>
    )
}