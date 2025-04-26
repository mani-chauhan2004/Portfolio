
import Card from '../utilities/Card';

function ProjectSection() {
    return (
        <div id='About' className='w-full h-[80vh] bg-background-dark flex items-center justify-center'>
            <Card 
                title='Log Analyser'
                description='A tool for analyzing log files and generating reports.'
            />
            <Card 
                title='ChessApp'
                description='A full-stack chess application with AI opponents.'
            />
            <Card 
                title='ChatApp'
                description='A real-time chat application using WebSockets.'
            />
        </div>
    )
}

export default ProjectSection;