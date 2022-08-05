import React from 'react'

export const columns = [
  {
    Header: 'Product Name',
    accessor: 'name', // accessor is the "key" in the data
  },
  {
    Header: 'Image',
    accessor: 'image',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Sold',
    accessor: 'sold',
  },
  {
    Header: <p className="text-center">Status</p>,
    accessor: 'status',
  },
  {
    Header: <p className="ml-4">Actions</p>,
    accessor: 'action',
  },
]
