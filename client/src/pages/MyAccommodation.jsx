import { Link, useParams } from 'react-router-dom'

const MyAccommodation = () => {

  const {action} = useParams();


  return (
    <div>
        {action !== 'new' && (
            <div className='text-center mt-8'>
                <Link to={'/account/accommodations/new'} className='inline-flex bg-primary text-white px-4 py-2 gap-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                    
                    Add New Place
                </Link>
            </div>
        )}

        {action === 'new' && (
            <div className=''>
                <form>

                    {/*Title Input Section*/}
                    <h2 className='text-2xl font-semibold  mt-4 ' >Title</h2>
                    <p className='text-sm text-gray-500 m-2'>Title of your place. Tip: should be short and catchy</p>
                    <input type='text' placeholder='Title, ex: Golden Triangle Condo with 4 rooms and 3 beds' ></input>

                    {/*Address Input Section*/}
                    <h2 className='text-2xl font-semibold mt-4 ' >Address</h2>
                    <p className='text-sm text-gray-500 m-2'>Address of your place</p>
                    <input type='text' placeholder='Address' ></input>

                    {/*Photos Input Section*/}
                    <h2 className='text-2xl font-semibold mt-4 ' >Photos</h2>
                    <p className='text-sm text-gray-500 m-2'>Phots of your place. Tip: include more pictures</p>
                    <div className="flex gap-2">
                        <input type="text" placeholder='Add using a link ...jpg' />
                        <button className='bg-gray-200 font-semibold rounded-2xl px-4' >Add&nbsp;Photo</button>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ' >
                        <button className="flex items-center justify-center gap-2 border p-8 rounded-2xl text-2xl" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>

                            
                            Upload
                        </button>
                    </div>
                    
                    {/*Description Input Section*/}
                    <h2 className='text-2xl font-semibold mt-6 ' >Description</h2>
                    <p className='text-sm text-gray-500 m-2'>Description of your place</p>
                    <textarea  placeholder='Examples: 5 minutes from the airport, Has swimming pool and gym, etc' />

                    {/*Perks Input Section*/}
                    <h2 className='text-2xl font-semibold mt-4 ' >Perks</h2>
                    <p className='text-sm text-gray-500 m-2'>Select all the perks of your place</p>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Free Wifi</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Free Parking</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Free Amenities</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Air Conditioning</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Breakfast Included</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Swimming Pool</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Gym</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Balcony</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>24-Hour Security</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Elevator</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Wheelchair Accessible</p>
                        </label>
                        <label className="flex items-center px-4 py-2 border rounded-full gap-1 ">
                            <input type="checkbox" />

                            <p>Facilities For Disabled Guests</p>
                        </label>
                    </div>

                    {/*Extra-Info Input Section*/}
                    <h2 className='text-2xl font-semibold mt-6 ' >Extra Info</h2>
                    <p className='text-sm text-gray-500 m-2'>House Rules, etc</p>
                    <textarea placeholder='Examples: No smoking, Only up to 6 maximum guests, etc ' />

                    {/*Check-In-Details Input Section*/}
                </form>
            </div>
        )}
    </div>
  )
}

export default MyAccommodation