import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange =({target})=>{
        //console.log(target.value);
        setInputValue(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        if(inputValue.trim().length <= 0 ) return;
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input 
            type='text'
            placeholder='Write Something'
            value = {inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
