import React, { Component } from 'react'
import { FirebaseMatches } from '../../../Firebase';
import { firebaseLooper, reverseArray } from '../../utils/Misc';
import MatchesBlock from '../../utils/MatchesBlock';
import Slide from 'react-reveal/Slide';
export default class Blocks extends Component {
    
    state = {
        matches:[]
    }

   componentDidMount(){
        FirebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
             const matches = firebaseLooper(snapshot)

             this.setState({
                 matches: reverseArray(matches)
             })
        })
    }

    showMatches = (matches) => (
        matches ? 
            matches.map((match)=>(
                <Slide bottom key={match.id}>
                <div className='item'>
                  <div className='wrapper'>
                    <MatchesBlock match={match}/>
                  </div>
                </div>
                </Slide>
            ))
        :null
    )


  render() {
      console.log(this.state);
    return (
      <div className='home_matches'>
        {this.showMatches(this.state.matches)}
      </div>
    );
  }
}
