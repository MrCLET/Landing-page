
import NavBar from './components/NavBar.jsx'
import { ExploreDiscoverBuy ,FeturedProperties} from './components/Explore&Fetured.jsx'


function App() {
  // state (variable React)

  return (
    <div className="">
        <div className="bg-[#f1f1f1] text-gray-900 p-10 px-20 min-h-screen">
          <NavBar />
          <ExploreDiscoverBuy />
          <FeturedProperties />
        </div>
    </div>
  )
}



export default App;
