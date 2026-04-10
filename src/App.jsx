
import NavBar from './components/NavBar.jsx'
import  { Explore , Properties ,Testimonials ,AboutUs ,Faq } from './components/Contents.jsx'
import  Footer from './components/Footer.jsx'


function App() {
  // state (variable React)

  return (
    <div className="">
        <div className=" text-gray-900 min-h-screen">
          <NavBar />
          <Explore />
          <Properties />
        </div>
        <div>
              <AboutUs/>
        </div>
        <div>
            <Testimonials/>
            <Faq />
            <Footer />
        </div>
    </div>
  )
}



export default App;
