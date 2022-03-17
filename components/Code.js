import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Code({ code, className }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<div className="Code mt-4">
			<pre>
				<code className={`language-javascript`}>{code}</code>
			</pre>
		</div>
	);
}