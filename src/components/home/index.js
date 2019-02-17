import React from 'react';
import Featured from './featured/index';
import MatchesHome from './matches/index';
import MeetPlayers from './meetplayers/index';

function Home() {
    return (
        <div className='bck_blue'>
            <Featured />
            <MatchesHome />
            <MeetPlayers />
        </div>
    )
}

export default Home;
