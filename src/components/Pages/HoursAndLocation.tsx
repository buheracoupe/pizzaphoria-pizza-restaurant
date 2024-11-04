import React from 'react'

function HoursAndLocation() {
  return (
<div className="location flex m-8 flex-col items-center gap-8">
  <div className="hours">
  <div className="hours-section">
    <h2 className='font-Flamenco font-bold text-2xl text-center'>Our Hours</h2>
    <table className="hours-table">
        <thead className='font-Quicksand'>
            <tr>
                <th>Day</th>
                <th>Hours</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="font-Flamenco text-lg">Monday</td>
                <td>11:00 AM - 10:00 PM</td>
            </tr>
            <tr>
                <td className="font-Flamenco text-lg">Tuesday</td>
                <td>11:00 AM - 10:00 PM</td>
            </tr>
            <tr>
                <td className="font-Flamenco text-lg">Wednesday</td>
                <td>11:00 AM - 10:00 PM</td>
            </tr>
            <tr>
                <td className="font-Flamenco text-lg">Thursday</td>
                <td>11:00 AM - 10:00 PM</td>
            </tr>
            <tr>
                <td className="font-Flamenco text-lg">Friday</td>
                <td>11:00 AM - 11:00 PM</td>
            </tr>
            <tr>
                <td className="font-Flamenco text-lg">Saturday</td>
                <td>11:00 AM - 11:00 PM</td>
            </tr>
            <tr>
                <td className="font-Flamenco text-lg">Sunday</td>
                <td>11:00 AM - 9:00 PM</td>
            </tr>
        </tbody>
    </table>
</div>
  </div>
  <div className="map">
  <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6083.113608098614!2d-76.51541041169453!3d40.32999262939649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8a987d8f60b2d%3A0xedb28668c55d0e72!2sCocktails%20Kitchen%20%2B%20Bar!5e0!3m2!1sen!2szw!4v1730668446205!5m2!1sen!2szw"
    width="600"
     height="450"
      loading="lazy"
      title='pizzaphoria'></iframe>
  </div>
  <h2 className='font-Flamenco text-3xl'>Annville Square</h2>
</div>
  )
}

export default HoursAndLocation