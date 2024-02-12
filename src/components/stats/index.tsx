import React from 'react'

const Stats = () => {


  function myFunction() {
    console.log('hello');

    var start1 = 0;
    var end1 = 1000;
    var range1 = end1 - start1;
    var current1 = start1;
    var increment1 = end1 > start1 ? 1 : -1;
    var stepTime1 = Math.abs(Math.floor(3000 / range1));
    var obj1 = document.getElementsByClassName('someId1')[0];
    var timer1 = setInterval(function () {
      current1 += increment1;
      obj1.innerHTML = current1 as unknown as string;
      if (current1 == end1) {
        clearInterval(timer1);
      }
    }, stepTime1);
  }
  return (


    <section className="grid grid-cols-3 gap-4 flex-col section1 border-t-2 border-gray-300 p-5 text-center" onFocus={myFunction}>
      {/* Users */}
      <div className="p-4 ">
        <h2 className="text-3xl font-semibold mb-2 someId1 text-[#ff6b35]">300+</h2>
        <p className="text-[#004e89] font-medium">Total Registered Users</p>
      </div>

      {/* Monthly Visitors */}
      <div className="p-4 ">
        <h2 className="text-3xl font-semibold mb-2 text-[#ff6b35]">450+</h2>
        <p className="text-[#004e89] font-medium">Monthly Visitors</p>
      </div>


      {/* Satisfaction Rating */}
      <div className="p-4 ">
        <h2 className="text-3xl font-semibold mb-2 text-[#ff6b35]">4.5</h2>
        <p className="text-[#004e89] font-medium">User Satisfaction</p>
      </div>
    </section>

  )
}

export default Stats

/* <div className="p-4 bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Statistics</h2>


        <div className="grid grid-row-6 gap-4 row-span-3">
          <div className='grid grid-col-1 gap-2'>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">1000</h3>
              <p className="text-gray-500">Total Users</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">1000</h3>
              <p className="text-gray-500">Monthly Visitors</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">1000</h3>
              <p className="text-gray-500">Weekly Visitors</p>
            </div>
          </div>
        </div>

      </div> */