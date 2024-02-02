import { QAF } from "@/app/lib/definitions";
import {ChevronDownIcon,ChevronUpIcon
} from  "@heroicons/react/24/outline";
const {Collapse} =   require('react-collapse');

export default function AcordionItem({ open, toggle, question, response }) {
  return (<div>
    
  <div className="" onClick={toggle}></div>
    {open ? <ChevronUpIcon/> : <ChevronDownIcon/>}
    <Collapse>
    
    </Collapse>
    </div>);
}
