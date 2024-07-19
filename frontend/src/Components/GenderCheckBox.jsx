import React from 'react'

const GenderCheckBox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className='flex items-baseline pt-3'>
        <span className=' text-gray-200  text-base label-text m-2'>Gender: </span>
        <div className="form-control">
            <label className={`label cursor-pointer ${selectedGender === "Male" ? "selected" : ""}`}>
                <span className=" text-gray-200  text-base label-text">Male</span>
                <input
                    type="checkbox" 
                    className="checkbox border hover:border-gray-200" 
                    checked={selectedGender === "Male"}
                    onChange={()=>{onCheckBoxChange("Male")}}
                />
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer  ${selectedGender === "Female" ? "selected" : ""}`}>
                <span className=" text-gray-200  text-base label-text">Female</span>
                <input 
                    type="checkbox"  
                    className="checkbox hover:border-gray-200" 
                    checked={selectedGender === "Female"}
                    onChange={()=>{onCheckBoxChange("Female")}}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox