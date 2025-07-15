export default function SignInLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="h-16 w-32 mx-auto bg-gray-200 animate-pulse rounded"></div>
        <div className="mt-6 h-8 bg-gray-200 animate-pulse rounded w-3/4 mx-auto"></div>
        <div className="mt-2 h-4 bg-gray-200 animate-pulse rounded w-2/3 mx-auto"></div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-5 bg-gray-200 animate-pulse rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 animate-pulse rounded"></div>
            </div>
            
            <div className="space-y-2">
              <div className="h-5 bg-gray-200 animate-pulse rounded w-1/3"></div>
              <div className="h-10 bg-gray-200 animate-pulse rounded"></div>
            </div>

            <div className="flex justify-between">
              <div className="h-5 bg-gray-200 animate-pulse rounded w-1/3"></div>
              <div className="h-5 bg-gray-200 animate-pulse rounded w-1/4"></div>
            </div>

            <div className="h-10 bg-gray-200 animate-pulse rounded"></div>
            
            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="px-2 bg-white">
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-8"></div>
                </div>
              </div>
            </div>

            <div className="h-5 bg-gray-200 animate-pulse rounded w-2/3 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
