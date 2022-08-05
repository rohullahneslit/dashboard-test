import React from 'react'

const Input = ({name, type, className, placeholder, label}) => {
  return (
    <>
      <div className="mb-2">
        <label className="text-gray-text ">{label}</label>
      </div>
      <input
        name={name}
        type={type}
        className={`border-2 border-border rounded-xl flex w-[100%] p-2 mb-4 outline-0  items-center justify-center gap-2  ${className}`}
        placeholder={placeholder}
        autoComplete="off"
      />
    </>
  )
}

export default Input
