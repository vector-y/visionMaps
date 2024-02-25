import React from 'react';
import { motion } from "framer-motion"
import Image from "next/image";
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { ClipboardDocumentIcon } from '@heroicons/react/16/solid';

const Explainer = () => {
    return (
        <div className='mx-auto px-48 font-inter'>
            <ul className="grid gap-x-3.5 gap-y-4 p-0 lg:-mx-32 lg:grid-cols-2">
                <li className='not-prose bg-gray-200 m-0 flex flex-col rounded-2xl p-8'>
                    <div className="my-auto self-start">
                        <ClipboardDocumentIcon className="h-6 w-6 text-black" />
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-2xl mt-2">Posts</p>
                            <p className="text-secondary"><span data-br=":R2h9ad6:" data-brr="1" className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 389px;">The middle ground between docs and chat, the default way to share updates and ideas.</span></p>
                        </div>
                    </div>
                </li>
                <li className='not-prose bg-gray-200 m-0 flex flex-col rounded-2xl p-8'>
                    <div className="my-auto self-start">
                        <ClipboardDocumentIcon className="h-6 w-6 text-black" />
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-2xl mt-2">Posts</p>
                            <p className="text-secondary"><span data-br=":R2h9ad6:" data-brr="1" className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 389px;">The middle ground between docs and chat, the default way to share updates and ideas.</span></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Explainer;