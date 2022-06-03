import { PlusCircleIcon } from "@heroicons/react/outline";
import Button from "@components/Button";

export default function ButtonRenderer(){
  return (
    <div className="flex items-center flex-wrap gap-2">
      <Button className="flex gap-1 items-center"><PlusCircleIcon className="h-5 w-5" />Default</Button>
      <Button.secondary>Secondary</Button.secondary>
      <Button.green>Green</Button.green>
      <Button.yellow>Yellow</Button.yellow>
      <Button.orange>Orange</Button.orange>
      <Button.red pills>Red</Button.red>
      <Button.purple pills>Purple</Button.purple>
      <Button.dark pills>Dark</Button.dark>
      <Button.dark pills disabled>Dark Disabled</Button.dark>
    </div>
  )
}