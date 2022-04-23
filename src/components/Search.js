import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import Button from './Button'

const Search = () => {
    const { handleUserChange } = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        const input= document.getElementById('input')
        const value = input.value
        handleUserChange(value)
    }
  return (
    <div className='search'>
        <img src='search.svg'></img>
        <form autoComplete='off'>
            <input type='text' placeholder='Search' id='input'></input>
            <Button title='Search' _className='search-btn' _callback={handleSubmit} />
        </form>
    </div>
  )
}

export default Search