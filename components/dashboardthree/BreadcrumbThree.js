import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BreadcrumbThree() {
  const router = useRouter()
  // split by "/" and remove first item 
  const paths = router.pathname.split("/").splice(1)
  // ['', 'dashboard', 'first']

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
    // example paths array = ['dashboard', 'first']
    paths.map((item, index) => {
      // first iteration, slice array from index 0, take 0+1 item then push to arrayPath
      // ['/dashboard']
      // second iteration, slice array from index 0, take 1+1 item then push to arrayPath join with "/"
      // ['/dashboard', '/dashboard/first']
      // N iteration, slice array from index 0, take N+1 item then push to arrayPath join with "/"
      // ['/dashboard', '/dashboard/first', ...N]
      arrayPath.push("/" + paths.slice(0, index + 1).join("/"))
    })
    return arrayPath
  }

  const breadcrumb = generateBreadcrumb();
  // console.log(breadcrumb)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // console.log(paths)  

  return (
    <div className="pb-2">
      <nav className="py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded" aria-label="Breadcrumb">
        {/* <nav className="p-2 border dark:border-neutral-700 my-2 overflow-x-auto" aria-label="Breadcrumb"> */}
        <ol className="flex items-center space-x-1 last:pr-4">
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="text-gray-500 dark:text-gray-300 w-4 h-4" />
              <Link href="/">
                <a className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all">Home</a>
              </Link>
            </div>
          </li>
          {paths.map((item, index) => {
            // last index is current active page 
            if (index == paths.length - 1) {
              return (
                <li aria-current="page">
                  <div className="flex items-center">
                    <ChevronRightIcon className="text-gray-500 dark:text-gray-300 w-4 h-4" />
                    <span className="ml-1 mr-3 text-sm font-medium text-blue-500">
                      {capitalizeFirstLetter(item)}
                    </span>
                  </div>
                </li>
              )
            }
            // make link if not last index 
            return (
              <li key={index}>
                <div className="flex items-center">
                  <ChevronRightIcon className="text-gray-500 dark:text-gray-300 w-4 h-4" />
                  <Link href={breadcrumb[index]}>
                    <a className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all">
                      {capitalizeFirstLetter(item)}
                    </a>
                  </Link>
                </div>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}