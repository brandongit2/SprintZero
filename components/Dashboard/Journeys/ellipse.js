import React from 'react';

const Label = ( { title, description } ) =>
{
    return (
        <div style={ { zIndex: 10000 } } className='absolute left-full top-1/2 -translate-y-2/4 w-1/3 pl-[12px]' >
            <p className='truncate'>{ title }</p>
            <p className='truncate'>{ description }</p>

        </div>
    );
};

const Dot = ( { style } ) =>
{
    return (
        <div style={ { zIndex: 10000, ...style } } className='absolute right-0 top-1/2 -translate-y-2/4 translate-x-2/4 w-[10px] h-[10px] border-[#A6AE9D] border-2 rounded-full bg-white' />
    );
};



const Ellipse = (
    {
        event,
        dims,
    }
) => 
{
    return (
        <div
            style={ {
                top: `${ dims.top }%`,
                height: `${ dims.height }%`,
                width: `${ dims.width }px`,

            } }
            className='absolute right-1/3'
        >
            <div style={ { width: "100%", height: "100%" } } className='relative'>
                <svg width='100%' height='100%' >
                    <ellipse
                        fill={ event.isDelighted ? "#009CD5" : "#FF4D4F" }
                        cx="100%"
                        cy="50%"
                        rx="100%"
                        ry="50%" />
                </svg>

                <Label
                    title={ event.title }
                    description={ event.description }
                />

                <Dot />

            </div>

        </div>
    );
};

export { Ellipse, Dot };
