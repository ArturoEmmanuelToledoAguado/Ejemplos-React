import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from '../../src/hooks/useFetchGifs.js';

jest.mock('../../src/hooks/useFetchGifs.js')

describe('prueba sobre GifGrid', () => { 
    const category='batman'

    test('Esta prueba es para hacer match con el snapshot', () => { 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })
        const {container} = render(<GifGrid category={category}/>)
        expect(container).toMatchSnapshot();
        //screen.debug()
     })

    test('Prueba del arreglo de imagenes', () => { 
        const image =[{
            id:'2',
            title:'Batman',
            url:'http:Github.com/'
        }]
        useFetchGifs.mockReturnValue({
            images:image,
            isLoading:false
        })
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(1)
     })

    test('Valida la existencia de h2', () => { 
        render(<GifGrid category={category}/>)
        expect(screen.getAllByText(category)).toBeTruthy()//Valida que existe alguna etiqueta h2
     })
 })