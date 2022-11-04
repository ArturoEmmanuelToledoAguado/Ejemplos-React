import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('prueba sobre AddCategory', () => { 
    test('Prueba del snapshot', () => { 
        const {container} = render(<AddCategory onNewCategory={()=>{}}/>)
        expect(container).toMatchSnapshot();
     })

    test('Prueba para escribir en el Input', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target:{value:'hola'}})
        expect(input.value).toEqual('hola')
     })

    test('Validar el funcionamiento del formulario', () => { 
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target:{value:'algo'}})
        fireEvent.submit(form)
        expect(input.value).toEqual('')
        expect(onNewCategory).toHaveBeenCalledWith('algo')
     })
})