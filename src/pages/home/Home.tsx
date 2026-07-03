import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
} from '@/components/ui/card';
import AppData from '@/context/AppContext';

function Home() {
    const { info } = AppData();

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Fully responsive grid layout */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                {info?.map((project) => (
                    <Card 
                        key={project.id} 
                        className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between border-muted-foreground/10"
                    >
                        <div className="w-full flex flex-col">
                            {/* Massive, full-width iframe container */}
                            <CardHeader className="p-0 bg-muted/40 aspect-video w-full overflow-hidden border-b relative">
                                <iframe 
                                    src={project?.url} 
                                    title={`Preview of ${project.name}`}
                                    className="absolute inset-0 w-full h-full border-none pointer-events-none select-none"
                                    loading="lazy"
                                />
                            </CardHeader>
                            
                            {/* Project Information */}
                            <CardContent className="p-6 sm:p-8">
                                <h3 className="text-2xl font-bold tracking-tight text-foreground capitalize">
                                    {project.name}
                                </h3>
                            </CardContent>
                        </div>

                        {/* Action Layout */}
                        <CardAction className="p-6 sm:p-8 pt-0 flex justify-end">
                            <Button asChild size="lg" className="w-full sm:w-auto font-semibold shadow-sm tracking-wide">
                                <Link to={`/${project.name}`}>
                                    View Project
                                </Link>
                            </Button>
                        </CardAction>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;