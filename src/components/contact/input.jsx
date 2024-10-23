import React from 'react';

const Input = ({type, value,onChange, name, label, placeholder}) => {
    return (
        <div className='space-y-1 font-bold'>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange}
            name={name} placeholder={placeholder}
            className='w-full bg-purple-100 p-3 rounded-lg'/>
        </div>
    );
};

export default Input;