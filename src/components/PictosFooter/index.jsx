import './index.css'

export default function PictosFooter({link, img, animation, text}){
    return <div className='picto-container'>
            <p className={ text ? "pictos-text" : ""}>{text ?? text}</p>
            <a href={link} className={animation ? "pictos-linkFooter pictos-animation" : "pictos-linkFooter"} target='_blank' rel='noreferrer'> 
                <img src={img} alt="imgName" className={animation ? 'pictos-img animation-img' : 'pictos-img'}/>
            </a>
        </div>
}