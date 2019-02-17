import React, { Component } from 'react'
import Stripes from '../../../Resources/images/stripes.png';
import Tag from '../../utils/Misc';
import Reveal from 'react-reveal/Reveal';
import Homecards from './Cards';

export default class MeetPlayers extends Component {

    state = {
       show : false
    }



    render() {
        return (
            <Reveal
             fraction={0.7}
             onReveal={()=>{
               console.log('reveal');
                this.setState({
                    show:false
                })
             }}
            >
                <div className='home_meetplayers'
                style={{ background: `#ffffff url(${Stripes})` }}
            >
                <div className='container'>
                    <div className='home_meetplayers_wrapper'>
                        <div className='home_card_wrapper'>
                            <Homecards
                             show={this.state.show}
                             />
               </div>
                        <div className='home_text_wrapper'>
                            <div className='divstyle'>
                                <Tag
                                    bck='#0e1731'
                                    size='100px'
                                    color='#ffffff'
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '20px'
                                    }}
                                >
                                    Meet
                    </Tag>
                            </div>
                            <div className='divstyle'>
                                <Tag
                                    bck='#0e1731'
                                    size='100px'
                                    color='#ffffff'
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '20PX'
                                    }}
                                >
                                    The
                    </Tag>
                            </div>
                            <div className='divstyle'>
                                <Tag
                                    bck='#0e1731'
                                    size='100px'
                                    color='#ffffff'
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '20PX'
                                    }}
                                >
                                    Players
                    </Tag>
                            </div>
                            <div className='divstyle'>
                                <Tag
                                    bck='#ffffff'
                                    size='27px'
                                    color='#0e1731f'
                                    Link={true}
                                    linkto='/the_team'
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '30PX',
                                        border: '1px solid #0e1731f'
                                    }}
                                >
                                Meet Them Here
                                </Tag>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
            </Reveal>
           
        );
    }
}
