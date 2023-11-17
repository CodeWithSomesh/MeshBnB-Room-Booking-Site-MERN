/* eslint-disable react/prop-types */

import { useState } from "react"
import { differenceInCalendarDays } from 'date-fns'

const BookingWidget = ({accommodationsDetails}) => {

    const [checkInTime, setCheckInTime] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');
    const [guestsNum, setGuestsNum] = useState(1);
    const [guestsName, setGuestsName] = useState('');
    const [guestsPhoneNum, setGuestsPhoneNum] = useState("+60");

    let numOfNights = differenceInCalendarDays(new Date(checkOutTime), new Date(checkInTime))
    function calculatePrice() {
        if (numOfNights > 0){
            return (numOfNights * accommodationsDetails.price).toLocaleString();
        } else {
            alert('Please Fill In Correct Dates')
        }
    }

  return (
    <div className="mt-4 px-4 py-4 bg-white rounded-2xl shadow-md shadow-gray-500">
        <h1 className="text-2xl py-2 text-center font-semibold mb-2">RM{accommodationsDetails.price}<span className="font-normal text-xl"> per night</span></h1>
        
        <div className="border rounded-2xl">
            <div className="flex justify-evenly">
                <div className="px-4 py-3 border-r w-full">
                    <label className="font-medium">Check In: </label>
                    <input type="date" value={checkInTime} onChange={(event) => setCheckInTime(event.target.value)} />
                </div>
                <div className="px-4 py-3 w-full">
                    <label className="font-medium">Check Out: </label>
                    <input type="date" value={checkOutTime} onChange={(event) => setCheckOutTime(event.target.value)} />
                </div>
            </div>
            
            <div className="px-4 py-2 w-full border-t">
                <label className="font-medium">Number of Guests: </label>
                <input type="number" value={guestsNum} onChange={(event) => setGuestsNum(event.target.value)} className="booking-widget-inputs" />
            </div>

            {checkInTime && checkOutTime && (
                <div>
                    <div className="px-4 py-2 w-full border-t">
                        <label className="font-medium">Name: </label>
                        <input type="text" value={guestsName} onChange={(event) => setGuestsName(event.target.value)} className="booking-widget-inputs" />
                    </div>

                    <div className="px-4 py-2 w-full border-t">
                        <label className="font-medium">Phone Number: </label>
                        <input type="tel" value={guestsPhoneNum} onChange={(event) => setGuestsPhoneNum(event.target.value)} className="booking-widget-inputs" />
                    </div>
                </div>
                
            )}

        </div>

        <button className="primary my-4 text-white font-bold">Book</button>

        
            {checkInTime && checkOutTime && (
                <div>
                    <div className="flex justify-between px-4">
                        <p className="font-normal text-lg underline">RM{accommodationsDetails.price.toLocaleString()} x {numOfNights} Nights</p>
                        <p className="font-medium text-lg ">RM{calculatePrice()}</p>
                    </div>

                    <div className="flex justify-between mt-3 px-4">
                        <p className="font-normal text-lg underline">MeshBnB Service Fee</p>
                        <p className="font-medium text-lg ">RM{calculatePrice()}</p>
                    </div>

            </div>

            )}
        
        
    </div>
  )
}

export default BookingWidget