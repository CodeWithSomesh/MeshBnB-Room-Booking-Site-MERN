import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom";
import axios from 'axios';
import SearchBar from "../components/SearchBar";
import { UserContext } from '../UserContext';
import Image from '../components/Image';

const HomePage = () => {

  const {user} = useContext(UserContext);

  // Initialize all States 
  const [searchTerm, setSearchTerm] = useState('');
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => { 
    //Get the places that are added in the database
    axios.get('/all-accommodations').then(response => {
      // Display all those places 
      setAccommodations([...response.data[1]]);
    })


  }, []);

  console.log(accommodations)

  function searchFilter(place) {
    if (searchTerm.toLowerCase() === ''){ 
      //If nothing is typed in SearchBar, then return nothing 
      return place;
    }  else {
      //Filter the places with address, ONLY display the places that includes the typed searchTerm
      return place.address.toLowerCase().includes(searchTerm.toLowerCase()); 
    }
  }

  return (

    <div>

      {/* <div className="bg-gray-100 py-12 rounded-xl text- text-center mt-12 font-Inter text-8xl lg:text-9xl font-extrabold">
        <h1 className="mx-8 leading-[7rem] lg:leading-[10rem]">
          Welcome To &nbsp;
          <span>MeshBnB</span>
        </h1>
      </div> */}
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />


      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-6 gap-x-6 gap-y-10" >
        {accommodations.length > 0 && accommodations.filter(searchFilter).map(place => (

          <Link to={user?'/accommodations/' + place._id:'/login'} className="" key={place.id}>
            
            <div className="bg-gray-500 rounded-2xl">
              {place.addedPhotos?.[0] && (
                <Image 
                  src={place.addedPhotos[0]} 
                  alt="Main Unit Image" 
                  className="rounded-2xl object-cover aspect-square"
                />
              )}
            </div>
            
            <h2 className="font-bold truncate mt-2">{place.address}</h2>
            <h3 className="text-gray-500 text-sm mt-1 truncate">{place.title}</h3>
            <div className="mt-1">
              <p><span className="font-bold">RM{place.price.toLocaleString()}</span> per night</p>
            </div>
            
          </Link>

        ))}

      </div>
    </div>

    
  )
}

export default HomePage
