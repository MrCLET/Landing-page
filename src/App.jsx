
import NavBar from './components/NavBar.jsx'
import  { Explore , Properties ,Testimonials ,AboutUs ,Faq , Footer} from './components/Explore&Fetured.jsx'


function App() {
  // state (variable React)

  return (
    <div className="">
        <div className=" text-gray-900 p-10 px-20 min-h-screen">
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
