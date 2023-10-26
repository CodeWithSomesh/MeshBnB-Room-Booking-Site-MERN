import { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'

const AccountPage = () => {

  const {ready, user} = useContext(UserContext);
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  if (!ready){
    return 'Loading...';
  }

  if (ready && !user) {
    return <Navigate to={'/login'} />
  }

  

  function linkClasses(type=null) {
    let classes = 'py-2 px-4 font-semibold';

    if (type === subpage){
      classes += ' bg-primary rounded-full text-white'
    }

    return classes;
  }

  return (
    <div>
      <nav className="w-full flex mt-8 gap-4 justify-center">
        <Link to={'/account'} className={linkClasses('profile')} >My Profile</Link>
        <Link to={'/account/bookings'} className={linkClasses('bookings')} >My Bookings</Link>
        <Link to={'/account/accommodations'} className={linkClasses('accommodations')} >My Accommodations</Link>
      </nav>

      {subpage === 'profile' && (
        <div className="">
          Logged in as {user.name} ({user.email}) <br />
          <button className='bg-primary rounded-full font-bold text-white'>Logout</button>
        </div>
      )}

    </div>
  )
}

export default AccountPage