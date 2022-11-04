import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('prueba sobre GifItem', () => { 
    const title='batman'
    const url = 'http://github.com/'
    test('Esta prueba es para hacer match con el snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
        //screen.debug()
     })
     
    test('Validar la existencia de las imagenes', () => { 
        render(<GifItem title={title} url={url}/>)
        const {alt,src} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toEqual(title)
      })

    test('Validar la existencia del boton', () => { 
        render(<GifItem title={title} url={url}/>)
        const {className} = screen.getByRole('button')
        expect(className).toBe('')
        screen.debug()
     })

    /* test('Valida la existencia del div', () => { 
        render(<GifItem title={title} url={url}/>)
        const {className} = screen.getByRole('div')
        expect(className).toBe('')
        screen.debug()
     }) */
 })