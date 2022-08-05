import {Card, Icon, Input} from '../components'
import {Link} from 'react-router-dom'

const Login = ({setLoggedIn}) => {
  return (
    <div className="bg-loginbg bg-no-repeat flex items-center justify-center h-screen">
      <Card className="mx-4">
        <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="">
            <div>
              <Icon
                src="logo"
                width={200}
                height={200}
                className="flex items-center justify-center"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Login To Your Account
              </h2>
            </div>
            <form className="mt-8 space-y-6">
              <input type="hidden" name="remember" value="True" />
              <div className="rounded-md shadow-sm -space-y-px">
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
                  <Input name="password" type="password" placeholder="Password" label="Password" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <Link to="/">
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={setLoggedIn(true)}
                  >
                    Sign in
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Login
