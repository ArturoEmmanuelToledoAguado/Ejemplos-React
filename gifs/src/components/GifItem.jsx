export const GifItem = ({title,url}) => {

    console.log(url)

    const copyPath = ()=>{
        navigator.clipboard.writeText(url)
    }

  return (
    <div className="">
        <img 
            src={url}
            alt={title}
        />
        <p>{title}</p>
        <button className=""onClick={copyPath}>Copy Path</button>
    </div>
  )
}
