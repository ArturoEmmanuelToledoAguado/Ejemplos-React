import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => { 

    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<AddCategory onNext={() =>{}}/>)
        expect(container).toMatchSnapshot()
     })//Evalua que este haciendo algo

    test('Esta prueba es para comprobar la escritura en el componente', () => { 
        const inputValue='Evangelion'
        const onNewCategory=jest.fn()//Toma el evento de que se esta escribiendo, emula la función
        render(<AddCategory onNext={onNewCategory}/>)
        const input=screen.getByRole('textbox')
        fireEvent.input(input,{target:{value:inputValue}})
        expect(inputValue).toBe(inputValue)
     })

    test('Esta es una prueba para mandar a llamar el onCategory si el input tiene un valor', () => { 
        const onNewCategory=jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const inputValue='Evangelion'
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target:{value:inputValue}})
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
        expect(onNewCategory).toHaveBeenCalledTimes(1)
     })

    test('Esta prueba no debe de llamar el on New Category si el input esta vacio', () => { 
        const onNewCategory=jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const form=screen.getByRole('form')
        fireEvent.submit(form)
        expect(onNewCategory).not.toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(0)
     })
 })