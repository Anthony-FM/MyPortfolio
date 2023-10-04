// hookdata
import useFetch from "../../utils/hookService"

// Components
import Loading from "../../components/Loading"

//Components Pages
import HomePage from "../../components/HomePage"
import About from "../../components/AboutPage"
import PortefolioPage from "../../components/PortfolioPage"
import Contact from "../../components/ContactPage"

export default function Home(){
    const { datas, isLoading, error} = useFetch("../data.json")
    
    return <> {
        isLoading ? <Loading/>
        : error ? <p>{error}</p> :
        <div>

            <HomePage 
                 titles={datas.presentation.title} 
                 presentation={datas.presentation.presentation}
                 name={datas.presentation.name}
             />
            <About 
                APropos={datas.APropos}
             />
            <PortefolioPage datasProject={datas.Projects}/>
            <Contact/>
        </div>
    }
    
    
    </>
}