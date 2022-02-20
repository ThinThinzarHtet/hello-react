import React from 'react';

function Header(props) {
    return (
        <>
            <div className='menu'>
                <a href="/">Home</a>
            </div>
            <div className='menu'>
                <a href="/">Product</a>
            </div>
            <div>
                <div className='menu'>
                    <a href="/">Service</a>
                </div>
            </div>
            <div className='menu'>
                <a href="/">About</a>
            </div>
        </>
    );
}

export default Header;

// import React from 'react';

// function Header(props) {
//     console.log('header props', props.name);
//     return (
//         <>
//             <div className='menu'>
//                 <a href='/'>Home</a>
//             </div>
//             <div className='menu'>
//                 <a href='/'>Product</a>
//             </div>
//             <div className='menu'>
//                 <a href='/'>Service</a>
//             </div>
//             <div className='menu'>
//                 <a href='/'>About</a>
//             </div>
//             <div>Hello , {props.name}</div>
//         </>
//     );
// }

// export default Header;