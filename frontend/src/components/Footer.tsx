import Link from 'next/link';
import { MapIcon } from '@heroicons/react/16/solid';

const emailAddress = 'shopsleeveco@gmail.com'

const Footer = () => {
    return (
        <div className="font-inter py-8 px-8 border-gray-150 flex w-full flex-col gap-16 border-t bg-[#white]">
            <div className="mx-auto grid w-full sm:max-w-lg md:max-w-4xl lg:max-w-6xl grid-cols-1 gap-12 md:grid-cols-4 sm:grid-cols-2">
                <div className="flex flex-col md-max:order-4">
                    <a className="flex items-center" href="/">
                        <MapIcon className="h-8 w-8 text-blue-500" />
                    </a>
                    <div className="mt-4 flex flex-col gap-1 opacity-70">
                        <p className="font-normal text-sm text-tertiary whitespace-nowrap text-black">vision maps software</p>
                        <p className="font-normal text-sm text-tertiary text-black">© 2024</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 order-1 md:order-3">
                    <p className="font-semibold text-sm text-black">Company</p>
                    <a target="_self" rel="auto" className="text-secondary text-slate-400 hover:text-black" href="/" />
                    <Link target="_self" rel="auto" className="text-secondary text-slate-400 hover:text-black" href={`mailto:${emailAddress}`}>
                        <p className="font-normal text-sm text-inherit">Contact</p>
                    </Link>
                </div>
                <div className="flex flex-col gap-2 order-2 md:order-4">
                    <p className="font-semibold text-sm text-black">Resources</p>
                    <a target="_self" rel="auto" className="text-secondary text-slate-400 hover:text-black" href="https://docs.google.com/document/d/1OkHrAaNtno7RDpsVHJy5734nmThsuDS05Pd8PGl4QiI/edit?usp=sharing">
                        <p className="font-normal text-sm text-inherit">Privacy policy</p>
                    </a>
                </div>
                <div className="flex flex-col gap-2 order-3 md:order-5">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-sm text-black">Follow</p>
                        <a target="_blank" rel="noopener noreferrer" className="text-secondary text-slate-400 hover:text-black" href="https://www.instagram.com/shopsleeve/">
                            <p className="font-normal text-sm text-inherit">Instagram</p>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="text-secondary text-slate-400 hover:text-black" href="https://substack.com/@shopsleeve">
                            <p className="font-normal text-sm text-inherit">Substack</p>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="text-secondar text-slate-400 hover:text-black" href="https://www.linkedin.com/company/shopsleeve/">
                            <p className="font-normal text-sm text-inherit">Linkedin</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer