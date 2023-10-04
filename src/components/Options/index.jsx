//CSS
import './index.css'

export default function Options({value, index}){
    return <option value={value} key={`${index}-${value}-option`} className='option-projects'>{value}</option>
}