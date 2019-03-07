import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FirebaseMatches } from '../../Firebase';
import { firebaseLooper, reverseLooper, reverseArray } from '../utils/Misc';
import Leaguetable from './Leaguetable';
import Matcheslist from './Matcheslist';

export default class Thematches extends Component {

    state = {
        loading: true,
        matches:[],
        filterMatches: [],
        playerFilter:'All',
        resultFilter: 'All'
    }

    componentDidMount(){
        FirebaseMatches.once('value').then(snapshot=>{
            const matches = firebaseLooper(snapshot);

            this.setState({
                loading : false,
                matches: reverseArray(matches),
                filterMatches: reverseArray(matches)
            })
        })
    }

    render() {

        const state = this.state;

        return (
            <div className='the_matches_container'>
                <div className='the_matches_wrapper'>
                     <div className='left'>
                       <div className='match_filters'>
                          <Matcheslist matches={state.filterMatches} />
                       </div>
                     </div>
                     <div className='right'>
                        <Leaguetable />
                     </div>
                </div>
            </div>
        )
    }
}