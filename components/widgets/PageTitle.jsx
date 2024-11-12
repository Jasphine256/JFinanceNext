import React from 'react'

const PageTitle = (props) => {
  return (
    <div className='p-2 w-full flex justify-start items-center tablet:justify-center'>
        <h2 className='font-bold text-xl'>{props.title}</h2>
    </div>
  )
}

export default PageTitle;