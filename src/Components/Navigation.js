import { NavLink } from "react-router-dom"
import {Fork, Book, Heart} from '../images/index'


export default function DropdwnMenu() {
    return(
        <div className='navigation'>
            <div className='nav-box'>
                <Heart className='nav-img' />
                <NavLink 
                    className='nav-link'
                    to='Favourites'>Favourites
                </NavLink>
            </div>
            <div className='nav-box'>
                <Book className='nav-img' />
                <NavLink 
                    className='nav-link' 
                    to='Recepies'>Cookbook
                </NavLink>
            </div>
            <div className='nav-box'>
                <Fork className='nav-img' /> 
                <NavLink 
                    className='nav-link' 
                    to='Add'>Create
                </NavLink>
            </div>
        </div>
    )
}