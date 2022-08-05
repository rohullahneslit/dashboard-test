import {Card, Icon, Input} from '../components'

const Customer = () => {
  return (
    <>
      <div className="">
        <div className="">
          <Card>
            <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
              <div className="">
                <div>
                  <Icon
                    src="logo"
                    width={200}
                    height={200}
                    className="flex items-center justify-center"
                  />
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Add a New Customer
                  </h2>
                </div>
                <form className="mt-8 space-y-6" autocomplete="off">
                  <input type="hidden" name="remember" value="True" />
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <Input name="Name" type="text" className="" placeholder="Name" label="Name" />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        className=""
                        placeholder="Email address"
                        label="Email address"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        type="email"
                        className=""
                        placeholder="Phone Number"
                        label="Phone Number"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 ">
                          <Input name="city" placeholder="Albuquerque" type="text" label="City" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-4">
                          <div className="mb-2">
                            <label className="text-gray-text">State</label>
                          </div>

                          <div className="relative">
                            <select
                              className="block appearance-none bg-white py-2 border-2 border-border rounded-xl flex w-[100%] p-2 outline-0  items-center justify-center gap-2 "
                              id="grid-state"
                            >
                              <option>New Mexico</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 ">
                          <Input name="zip" placeholder="90210" type="text" label="Zip" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Input
                        name="address"
                        type="Address"
                        className=""
                        placeholder="Address"
                        label="Address"
                      />
                    </div>
                    <div>
                      <Input
                        name="image"
                        type="file"
                        placeholder="Upload Customer Picture"
                        className=""
                        label="Upload Customer Picture"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add new Customer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Customer
