import { WordAnalyticsProvider } from '@/context/wordAnalyticsContext';
import Container from './Container';

function WordAnalytics() {
    return (
        <WordAnalyticsProvider>
            {/* Smooth subtle gradient background with a modern, clean feel */}
            <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 w-full min-h-screen flex justify-center items-center p-4 md:p-8">
                <Container />
            </div>
        </WordAnalyticsProvider>
    );
}

export default WordAnalytics;
