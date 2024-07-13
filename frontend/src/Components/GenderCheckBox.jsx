import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex items-baseline pt-3'>
        <span className=' text-gray-200  text-base label-text m-2'>Gender: </span>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className=" text-gray-200  text-base label-text">Male</span>
                <input type="checkbox" defaultChecked className="checkbox border hover:border-gray-200" />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className=" text-gray-200  text-base label-text">Female</span>
                <input type="checkbox"  className="checkbox hover:border-gray-200" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox