import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en el GifItem', () => { 

    const title = 'Evangelion'
    const url= 'https://github.com/'

    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>)//Renderiza el componente
        //El snapshot guarda lo que regresa el render
        expect(container).toMatchSnapshot();//Toma foto
     })

    test('Esta prueba es para mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifItem title={title} url={url}/>)
        //screen.debug()//Podemos ver todo lo que renderizan (donde estoy parado)
        const{src,alt}=screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
      })

    test('Esta prueba es para mostrar el title del componente', () => { 
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()//Obtenemos el texto que renderiza el componente
       })

    test('Esta prueba valida que el boton existe y pertenece a la clase correcta', () => { 
        render(<GifItem title={title} url={url}/>)
        const {className} = screen.getAllByRole('button')
        expect(screen.getAllByRole('button')).toBeTruthy()
        expect(className).toBe('button')
     })

    test('Esta prueba es para validar la función del boton', () => { 
        const {onClick} = screen.getByRole('button')
        console.log(onClick)
     })
 })