import React from 'react'

const Pjtnav = ({values}) => {
  return (
    <div className='w-full px-20 py-3 flex justify-between items-center'>
      <h3>Orange</h3>
      <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-2">
        <h3>Favourites</h3>
        <h4 className='w-5 h-5 flex items-center justify-center rounded-full bg-[#00000042]'>{values.filter(item => item.added).length}</h4>
      </div>
    </div>
  )
}

export default Pjtnav
