import './index.css'

export default function Pictos({link, img, animation, text}){
    return <div className='picto-container'>
            <p className={ text ? "pictos-text" : ""}>{text ?? text}</p>
            <a href={link} className={animation ? "pictos-link pictos-animation" : "pictos-link"} target='_blank' rel='noreferrer'> 
                <img src={img} alt="imgName" className={animation ? 'pictos-img animation-img' : 'pictos-img'}/>
            </a>
        </div>
}