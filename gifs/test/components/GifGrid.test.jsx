import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")//Emula el resultado de mandar a llamar una función

describe('Pruebas para el componente  <GifGrid>', () => { 
    const category='Evangelion'

    test('Esta prueba es para hacer match con el snapshot', () => { 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })
        const {container} = render(<GifGrid category={category}/>)
        expect(container).toMatchSnapshot()
     })

    test('Esta prueba es para mostrar el Loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })
        render(<GifGrid category={category}/>)
        expect(screen.getAllByText('Loading...'))
        expect(screen.getAllByText(category))
     })

    test('Esta prueba es para mostrar las imagenes con el useFetchGifs', () => { 
        const gifs = [{
            id:'rtyj',
            title: 'ghj',
            url:'https://github.com/'
        },{
            id:'rtyj',
            title: 'ghj',
            url:'https://github.com/'
        },{
            id:'rtyj',
            title: 'ghj',
            url:'https://github.com/'
        }]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        })
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(3)
     })
 })