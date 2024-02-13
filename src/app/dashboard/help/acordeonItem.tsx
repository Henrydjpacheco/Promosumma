import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Item } from "@/src/app/lib/definitions";
import { Collapse } from "react-collapse";
export default function AccordeonItem(Item: Item) {
  const expanded = Item.i === Item.open;

  return (
    <div onClick={() => Item.setOpen(expanded ? false : Item.i)}>
      <div className="flex items-center justify-between cursor-pointer ">
        <h2 className="flex  font-bold text-xl my-3 ">{Item.question}</h2>
        {expanded ? <ChevronUpIcon className=" flex w-5 h-5"/> : <ChevronDownIcon className=" flex w-5 h-5"/>} 
      </div>
      <Collapse isOpened={expanded && Item.open}>
        <hr className="text-[#E6E9EF] mb-3.5 mx-1" />
        <article className="p-1.5"><p>{Item.response}</p></article>
      </Collapse>
    </div>
  );
}
