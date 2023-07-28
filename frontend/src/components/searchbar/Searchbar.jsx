import React, { useEffect, useRef } from 'react'
import './searchbar.css'
export default function Searchbar() {

    const searchbarMainContainerRef = useRef(null);

    var searchDrop = (e) => {
        const searchbarMainContainer = searchbarMainContainerRef.current;
        if (!searchbarMainContainer) return;

        const searchTextBox = searchbarMainContainer.querySelector(".searchText");
        const searchButton = searchbarMainContainer.querySelector(".searchButton");
        
        if (searchTextBox.contains(e.target)) {
            console.log("textbox")
            searchbarMainContainer.classList.add('active')
        } else if (searchButton.contains(e.target)) {
            e.preventDefault();
            console.log("search")
        } else if (!searchTextBox.contains(e.target)) {
            searchbarMainContainer.classList.remove('active')
        }
    }

    useEffect(() => {
        window.addEventListener("click", e => { searchDrop(e) });
    })

    return (
        <div ref={searchbarMainContainerRef} className="searchbarMainContainer flex flexColumn">
            <form className="flex alignCenter spaceCenter">
                <input type="text" name="" id="" className="searchText" />
                <button className='searchButton'>
                    <span className="material-symbols-rounded">
                        search
                    </span>
                </button>
            </form>
            <div className="searchDropDownContainer">
                <div className="searchResults">
                    asdasd
                </div>
                <div className="searchResults">
                    asdasd
                </div>
                <div className="searchResults">
                    asdasd
                </div>
                <div className="searchResults">
                    asdasd
                </div>
                <div className="searchResults">
                    asdasd
                </div>
            </div>

        </div>
    )
}
