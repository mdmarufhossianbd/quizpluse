
const Heading = ({name, description}) => {
    return (
        <div className="my-10 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-semibold md:font-bold text-center mb-4">{name}</h2>
            <p className="text-center">{description}</p>
        </div>
    );
};

export default Heading;