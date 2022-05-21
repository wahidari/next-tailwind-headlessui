import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";

export default function Code({ code, className }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<>
			<style jsx>{`
        code[class*=language-], pre[class*=language-] {
					-moz-tab-size: 2;
					-o-tab-size: 2;
					tab-size: 2;
				}
      `}</style>
			<div className={`Code mt-4 ${className ? className : " "}`}>
				<pre className="line-numbers">
					<code className={`language-javascript`}>{code}</code>
				</pre>
			</div>
		</>
	);
}