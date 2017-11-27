import React from 'react';

const loadingText = 'Finding grub...';

const LoadingSearch = props => (
    <div id='loading'
    className='loading-container text-center display-3'>
        { loadingText.split('').map(char => {
            return (
                <span className='loading-char'>{ char }</span>
            );
        }) }
    </div>
);

export default LoadingSearch;