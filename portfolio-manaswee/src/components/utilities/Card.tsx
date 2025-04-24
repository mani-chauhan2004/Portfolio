type CardProps = {
    title: string;
    image?: string;
    description: string;
}

function Card({ title, image='./IMG/undraw_personal-website_kz7a.svg', description }: CardProps) {
    return (
        <div className='card flex justify-center w-96 h-88 items-start grayscale hover:scale-130 hover:grayscale-0 px-6 py-8 rounded-md flex-col bg-background-dark transition-all duration-700'>
            <img className='w-full h-48 object-center rounded-lg' src={image} alt={title} />
            <h3 className='text-xl font-semibold mt-4'>{title}</h3>
            <p className='text-sm text-gray-600 mt-2'>{description}</p>
        </div>
    );
}

export default Card