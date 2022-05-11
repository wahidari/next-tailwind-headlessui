import { ChevronRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

export default function Breadcrumb() {
  const router = useRouter()
  // console.log(router.pathname)
  // split by "/" and remove first item 
  const paths = router.pathname.split("/").splice(1)
  // ['', 'dashboard', 'first']
  // console.log(paths)

  // function generateBreadcrumbs() {
  //   // Iterate over the list of paths list and build a "crumb item" object for each one.
  //   const crumblist = paths.map((subpath, idx) => {
  //     // We can get the partial nested route for the crumb
  //     // by joining together the path parts up to this point.
  //     const href = "/" + paths.slice(0, idx + 1).join("/");
  //     return { href };
  //   })
  //   console.log(crumblist)
  //   // Add in a default "Home" / "root /" crumb for the top-level
  //   return [{ href: "/"}, ...crumblist];
  // }

  // Call the function to generate the breadcrumbs list
  // const breadcrumbs = generateBreadcrumbs();
  // console.log(breadcrumbs)

  function generateBreadcrumb() {
    let arrayPath = []
    // console.log(paths)
    // example paths array = ['dashboard', 'first']
    paths.map((item, index) => {
      // first iteration, slice array from index 0, take 0+1 item then push to arrayPath
      // ['/dashboard']
      // second iteration, slice array from index 0, take 1+1 item then push to arrayPath
      // ['/dashboard', '/dashboard/first']
      // N iteration, slice array from index 0, take N+1 item then push to arrayPath
      // ['/dashboard', '/dashboard/first', ...N]
      arrayPath.push("/" + paths.slice(0, index + 1).join("/"))
      // console.log(index+1)
      // console.log("/" + paths.slice(0, index + 1).join("/"))
    })
    // console.log(arrayPath)
    return arrayPath
  }

  const breadcrumb = generateBreadcrumb();
  console.log(breadcrumb)

  function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  console.log(paths)
  paths.map((item, index) => {
    console.log(capitalizeFirstLetter(paths[index]))
  })

  return (
    <nav className="p-2 border dark:border-neutral-700 my-2 overflow-x-auto" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        <li>
          <div className="flex items-center">
            <ChevronRightIcon className="text-gray-600 dark:text-gray-300 w-4 h-4" />

            <a href="" className="ml-1 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all">Home</a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon className="text-gray-600 dark:text-gray-300 w-4 h-4" />
            <a href="#" className="ml-1 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all">Projects</a>
          </div>
        </li>
        {/* Current Page  */}
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRightIcon className="text-gray-600 dark:text-gray-300 w-4 h-4" />
            <span className="ml-1 text-sm font-medium text-blue-500">Page</span>
          </div>
        </li>
      </ol>
    </nav>
  )
}