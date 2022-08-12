import About from "../components/about/About"
import Form from "../components/form/Form"
import Hero from "../components/hero/Hero"
import Carrusell from "../components/carrusell/Carrusell"
import Academic from "../components/academics/Academic"


const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Carrusell />
        <Academic />
        <Form />

    </div>
  )
}
export default Home