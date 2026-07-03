import WordData from '@/context/wordAnalyticsContext';



const FACEBOOK_NUMBERS = 477;
const INSTA_NUMBERS = 300;

function Analytics() {
    const { text } = WordData();
    const state = {
        characters: {
            title: 'characters',
            number: text.split('').filter((item) => item !== ' ').length,
        },
        words: {
            title: 'words',
            number: text.split(' ').filter((item) => item !== '').length,
        },
        facebook: { title: 'facebook', number: text.split('').filter(item => item !== '').length > 0 ? text.split('').filter(item => item !== '').length + FACEBOOK_NUMBERS : 0 },
        instagram: { title: 'instagram', number: text.split('').filter(item => item !== '').length > 0 ? text.split('').filter(item => item !== '').length + INSTA_NUMBERS : 0},
    };

    return (
        <div className="h-full md:w-1/2 w-full text-slate-800 grid grid-cols-2 bg-slate-50 p-6 md:p-8 gap-4 border-t md:border-t-0 md:border-l border-slate-100">
            {Object.values(state).map((item) => (
                <State item={item} key={item.title} />
            ))}
        </div>
    );
}

export default Analytics;

function State({ item }: { item: { title: string; number: number } }) {
    return (
        <div
            key={item.title}
            className="flex justify-center p-6 items-center flex-col bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-200 group/card"
        >
            <div className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight group-hover/card:scale-105 transition-transform duration-200">
                {item.number}
            </div>
            <div className="text-xs md:text-sm tracking-wider text-slate-400 font-bold uppercase mt-1">
                {item.title}
            </div>
        </div>
    );
}