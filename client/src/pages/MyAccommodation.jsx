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
                    <h2 className='text-2xl font-semibold  mt-4 ' >Title</h2>
                    <p className='text-sm text-gray-500 m-2'>Title of your place. Tip: should be short and catchy</p>
                    <input type='text' placeholder='Title, ex: Golden Triangle Condo with 4 rooms and 3 beds' ></input>

                    <h2 className='text-2xl font-semibold mt-4 ' >Address</h2>
                    <p className='text-sm text-gray-500 m-2'>Address of your place</p>
                    <input type='text' placeholder='Address' ></input>

                    <h2 className='text-2xl font-semibold mt-4 ' >Photos</h2>
                    <p className='text-sm text-gray-500 m-2'>Phots of your place. Tip: include more pictures</p>
                    <div className="flex gap-2">
                        <input type="text" placeholder='Add using a link ...jpg' />
                        <button className='bg-gray-200 font-semibold rounded-2xl px-4' >Add&nbsp;Photo</button>
                    </div>
                    <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ' >
                        <button className="border p-8 rounded-2xl text-2xl" >
                            +
                        </button>
                    </div>
                </form>
            </div>
        )}
    </div>
  )
}

export default MyAccommodation