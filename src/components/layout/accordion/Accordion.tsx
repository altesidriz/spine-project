'use client';
import { Questions } from '@/types/questions';
import { useState } from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';
import { TiArrowSortedDown } from 'react-icons/ti';



const Accordion = (props: Questions) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-auto flex flex-col gap-4">
            <div 
            className="p-4 bg-green flex flex-row justify-between items-center rounded-lg hover:bg-primary"
            onClick={()=>(setOpen(!open))}
            >
                <h4 className="font-bold text-2xl">{props.question}</h4>
                <div>
                {
                    open ? <TiArrowSortedUp size={20} /> : <TiArrowSortedDown size={20} />
                }
                </div>
            </div>
            {open &&
                <div className="p-4 bg-[#F1F4F5] flex justify-start items-center rounded-lg">
                    <p className="w-[90%] font-bold text-xl text-[#606060]">{props.answer}</p>
                </div>
            }

        </div>
    );
};
export default Accordion;