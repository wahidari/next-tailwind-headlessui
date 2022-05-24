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
				:not(pre)>code[class*=language-], pre[class*=language-] {
					background: #171717;
					border-radius: 0.375rem;
				}
      `}</style>
			<div className={`Code mt-4 rounded-md border border-transparent dark:border dark:border-neutral-700 ${className ? className : " "}`}>
				<pre className="line-numbers">
					<code className={`language-javascript`}>{code}</code>
				</pre>
			</div>
		</>
	);
}