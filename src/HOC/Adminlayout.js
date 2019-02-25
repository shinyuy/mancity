import React from 'react'
import Adminnav from '../components/admin/nav/Adminnav';

function Adminlayout(props) {
    return (
        <div className='admin_container'>
            <div className='admin_left_nav'>
                <Adminnav/>
            </div>
            <div className='admin_right'>
               {props.children}
            </div>
        </div>
    );
};

export default Adminlayout;
