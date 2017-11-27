import React from 'react';

const loadingText = 'Finding grub...';

const LoadingSearch = props => (
    <div id='loading'
    className='loading-container text-center display-4'>
        { loadingText.split('').map((char, index) => {
            return (
                <span key={ 'char-' + index }
                className='loading-char'>
                { char }
                </span>
            );
        }) }
    </div>
);

export default LoadingSearch;