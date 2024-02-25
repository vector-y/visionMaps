import React from 'react';
import { motion } from "framer-motion"
import Image from "next/image";
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { MapIcon } from '@heroicons/react/16/solid';

const Explainer = () => {
    return (
        <div className='mx-auto px-48 font-inter'>
            <ul className="grid gap-x-3.5 gap-y-4 p-0 lg:-mx-32 lg:grid-cols-2">
                <li className='not-prose bg-gray-200 m-0 flex flex-col rounded-2xl p-8'>
                    <div className="-ml-1.5 mb-3 self-start"><svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M17.2502 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.2502C18.3548 4.75 19.2502 5.64543 19.2502 6.75V17.25C19.2502 18.3546 18.3548 19.25 17.2502 19.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 12.5H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 16H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                        <div className="flex flex-col gap-2"><p className="font-bold">Posts</p><p className="text-secondary"><span data-br=":R2h9ad6:" data-brr="1" className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 389px;">The middle ground between docs and chat, the default way to share updates and ideas.</span><script>self.__wrap_b(":R2h9ad6:",1)</script></p></div>
                    </div>
                </li>
                <li className='not-prose bg-gray-200 m-0 flex flex-col rounded-2xl p-8'>
                    <div className="-ml-1.5 mb-3 self-start"><svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M17.2502 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.2502C18.3548 4.75 19.2502 5.64543 19.2502 6.75V17.25C19.2502 18.3546 18.3548 19.25 17.2502 19.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 12.5H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 16H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                        <div className="flex flex-col gap-2"><p className="font-bold">Posts</p><p className="text-secondary"><span data-br=":R2h9ad6:" data-brr="1" className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 389px;">The middle ground between docs and chat, the default way to share updates and ideas.</span><script>self.__wrap_b(":R2h9ad6:",1)</script></p></div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Explainer;