import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";

export default function Code({ code, className }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<div className={`Code mt-4 ${className ? className : " "}`}>
			<pre className="line-numbers">
				<code className={`language-javascript`}>{code}</code>
			</pre>
		</div>
	);
}