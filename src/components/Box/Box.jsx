import React from 'react';
import { ResizableBox } from 'react-resizable';
import './styles.css';

const Box = ({
     children,
     width = 1000,
     height = 300,
     style = {},
     className,
 }) => {
    return (
        <div className='wrapper'>
            <h2 className='chart_header'>Hourly chart</h2>
                <ResizableBox width={width} height={height}>
                    <div
                        style={{
                            ...style,
                            width: '100%',
                            height: '100%',
                        }}
                        className={className}
                    >
                        {children}
                    </div>
                </ResizableBox>
        </div>
    );
};

export default Box;
