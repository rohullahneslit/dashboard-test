import React from 'react'
import {Icon} from '../../components'

export const data = [
  {
    image: <Icon src="image3" width={30} height={30} />,
    name: 'Marvel Thor Movie Print Marble T...',
    price: '$23',
    sold: '53',
    status: (
      <div className="flex justify-center">
        <div className="bg-green text-white p-1  w-32 rounded-2xl text-center">In Stock</div>
      </div>
    ),
    action: (
      <div className="flex gap-2  items-center">
        <div className="bg-green  rounded-2xl  p-3 cursor-pointer">
          <Icon src="edit" width={20} height={20} />
        </div>
        <div className="bg-blue rounded-2xl p-3 cursor-pointer">
          <Icon src="eye" width={20} height={20} />
        </div>
      </div>
    ),
  },
  {
    image: <Icon src="image3" width={30} height={30} />,
    name: 'Marvel Thor Movie Print Marble T...',
    price: '$23',
    sold: '53',
    status: (
      <div className="flex justify-center">
        <div className="bg-green text-white p-1  w-32 rounded-2xl text-center">In Stock</div>
      </div>
    ),
    action: (
      <div className="flex gap-2  items-center">
        <div className="bg-green  rounded-2xl  p-3 cursor-pointer">
          <Icon src="edit" width={20} height={20} />
        </div>
        <div className="bg-blue rounded-2xl p-3 cursor-pointer">
          <Icon src="eye" width={20} height={20} />
        </div>
      </div>
    ),
  },
  {
    image: <Icon src="image3" width={30} height={30} />,
    name: 'Marvel Thor Movie Print Marble T...',
    price: '$23',
    sold: '53',
    status: (
      <div className="flex justify-center">
        <div className="bg-red-600 text-white p-1  w-32 rounded-2xl text-center">Out of Stock</div>
      </div>
    ),
    action: (
      <div className="flex gap-2  items-center">
        <div className="bg-green rounded-2xl  p-3 cursor-pointer">
          <Icon src="edit" width={20} height={20} />
        </div>
        <div className="bg-blue rounded-2xl p-3 cursor-pointer">
          <Icon src="eye" width={20} height={20} />
        </div>
      </div>
    ),
  },
]
