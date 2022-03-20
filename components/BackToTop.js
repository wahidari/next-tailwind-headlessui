import { useState, useEffect } from "react";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";

export default function BackToTop() {
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 200) {
				setShowBackToTop(true);
			} else {
				setShowBackToTop(false);
			}
		});
	}, []);

	// This function will scroll the window to the top 
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth' // for smoothly scrolling
		});
	};

	return (
		<>
			{showBackToTop &&
				<div className="!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-800 backdrop-filter backdrop-blur fixed bottom-6 right-3 md:right-10 z-40">
					<button onClick={scrollToTop} className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-white rounded-full">
						<ArrowCircleUpIcon />
					</button>
				</div>
			}
		</>
	)
}

