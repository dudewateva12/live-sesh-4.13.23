import React from 'react'
import './Header.css'


function Header({userData, setUsers}) {
    //create state for text box input
    const[country, setCountry] = React.useState('')

    const handleInput = (e) => {
        // console.log(e.target.value)
        //store in state
        setCountry(e.target.value)
    }

    const handleSearch = () => {
        console.log(country)
        //filter userData based on country
        //set users to this result
        setUsers(userData.filter(item=> item.country.toLowerCase() === country.toLowerCase()))
        //clear textbox
        setCountry('')
    }

    const handleShow = () => {
        console.log('show all')
        //set users to userData 
        setUsers(userData)
    }; 
  return (
    <div className='header-container'>
        <button onClick={handleShow}>Show all</button>
        <div className='search-container'>
            <input type='text' 
            placeholder='Enter country'
            onChange={handleInput}
            value={country} />
            <button onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default Header