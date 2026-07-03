import React from 'react';
import WordData from '@/context/wordAnalyticsContext';

function TextArea() {
    const { text, setText } = WordData();
    const [showError, setShowError] = React.useState('');

    function handleClick(text: string) {
        if (showError) setShowError('');
        if (!(text.includes('<script>') || text.includes('@')))
            return setText(text);
        const newText = text.replaceAll('<script>', '') && text.replaceAll('@', '');
        setShowError(
            text.includes('<script>')
                ? 'no script tags allowed'
                : "'@' isn't allowed",
        );
        setText(newText);
        return;
    }

    return (
        <div className="md:w-1/2 flex flex-col w-full min-h-[300px] md:h-full p-6 md:p-8 bg-white relative group">
            <textarea
                value={text}
                className="w-full h-full outline-none resize-none placeholder:text-gray-400 text-gray-800 text-lg leading-relaxed font-normal focus:placeholder:text-gray-300 transition-colors"
                placeholder="Type your text here..."
                onChange={(e) => {
                    handleClick(e.target.value);
                }}
            ></textarea>
            <div className="absolute bottom-4 left-6 md:left-8 text-sm font-semibold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-md border border-rose-100 shadow-sm animate-fade-in empty:hidden">
                {showError}
            </div>
        </div>
    );
}


export default TextArea;
