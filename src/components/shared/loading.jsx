import { ImSpinner9 } from 'react-icons/im';

const Loading = () => {
    return (
        <div className='flex justify-center items-center my-20'>
             <ImSpinner9 className="animate-spin" size={50} />
        </div>
    );
};

export default Loading;