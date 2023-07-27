import React from 'react'
import './searchbar.css'
export default function Searchbar() {
    return (
        <div className="searchbarMainContainer flex alignCenter spaceCenter">
            <form >
                <input type="text" name="" id="" className="searchText" />
                <input type="submit" className="searchButton" value={"s"} />
            </form>
        </div>
    )
}
