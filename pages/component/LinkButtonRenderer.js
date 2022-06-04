import { DownloadIcon } from "@heroicons/react/outline";
import LinkButton from "@components/LinkButton";

export default function LinkButtonRenderer(){
  return (
    <div className="flex items-center flex-wrap gap-2">
      <LinkButton href="#" className="flex gap-1 items-center"><DownloadIcon className="h-5 w-5" />Default</LinkButton>
      <LinkButton.secondary href="#">Secondary</LinkButton.secondary>
      <LinkButton.green href="#">Green</LinkButton.green>
      <LinkButton.yellow href="#">Yellow</LinkButton.yellow>
      <LinkButton.orange href="#">Orange</LinkButton.orange>
      <LinkButton.red href="#" pills>Red</LinkButton.red>
      <LinkButton.purple href="#" pills>Purple</LinkButton.purple>
      <LinkButton.dark href="#" pills>Dark</LinkButton.dark>
    </div>
  )
}