import PropTypes from 'prop-types';

export const GifItem = ({title,url}) => {
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

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}