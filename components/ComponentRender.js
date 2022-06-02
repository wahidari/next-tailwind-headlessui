import { Rnd } from "react-rnd";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

export default function ComponentRender({ componentUrl, iframeKey }) {
  console.log(iframeKey)

  const ResizeHandle = (
    <div className="rounded-r flex focus:outline-none w-5 bg-gray-200 dark:bg-neutral-800 absolute right-1 inset-y-0">
      <ArrowCircleLeftIcon className="text-gray-700 dark:text-white" />
    </div>
  );

  const componentBlockRefs = {};

  const updateComponentBlockIframeHeight = iframe => {
    iframe.style.height = "auto";
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  };

  return (
    <div className="mb-8">
      <div className="relative min-h-[10rem]">
        <Rnd
          minWidth={350}
          default={{
            width: "100%",
            height: "100%"
          }}
          bounds="parent"
          disableDragging={true}
          enableResizing={{ right: true }}
          resizeHandleComponent={{ right: ResizeHandle }}
          resizeHandleWrapperClass={`resizeHandleWrapper`}
          onResize={() => updateComponentBlockIframeHeight(componentBlockRefs[componentUrl])}
        >
          <iframe
            className="border dark:border-neutral-600 min-h-[10rem] p-4 pr-8 rounded"
            src={componentUrl}
            width="100%"
            key={iframeKey}
            ref={ref => (componentBlockRefs[componentUrl] = ref)}
            onLoad={e => updateComponentBlockIframeHeight(e.target)}
          />
        </Rnd>
      </div>
    </div>
  )
}