import './index.css'

export default function Pictos({link, img}){
    return <a href={link} className="pictos-link" target='_blank' rel='noreferrer'> 
        <img src={img} alt="imgName" className='pictos-img' />
    </a>
}