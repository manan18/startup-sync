import React from 'react'

const ContentBox = () => {
  return (
    <div className="flex flex-col w-[15%] p-[1%] hover:shadow-lg hover:border-b-2 hover:border-indigo-500">
        <div className="flex-none text-center mb-4">
            SVG
        </div>
        <div className="flex-auto text-center font-bold text-3xl mb-4">
            Title
        </div>
        <div className="flex-auto text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos in quasi quibusdam dolor recusandae unde esse hic? Saepe quaerat laudantium voluptas laborum optio ad vero dolorem quae molestias dolores.
        </div>
    </div>
  )
}

export default ContentBox