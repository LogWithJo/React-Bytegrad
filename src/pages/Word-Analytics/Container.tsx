import React from 'react';
import TextArea from './TextArea';
import Analytics from './Analytics';


function Container() {
    return (
        <div className='rounded-2xl shadow-2xl flex flex-col md:flex-row justify-between min-h-[60vh] md:h-[60vh] w-full max-w-5xl bg-white items-stretch overflow-hidden border border-gray-100 transition-all duration-300'>
            <TextArea />
            <Analytics />
        </div>
    );
}
export default Container;
