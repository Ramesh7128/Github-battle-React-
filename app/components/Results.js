var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');


function Results(props) {


	var WinningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var LosingIndex = WinningIndex === 0 ? 1 : 0;


	return props.isLoading === true
			? <p>loading!</p>
			: <p>:<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Results</h1>
        <div className='col-sm-8 col-sm-offset-2'>

        <UserDetailsWrapper player="Winner">  
          <UserDetails scores={props.scores[WinningIndex]} info={props.playersInfo[WinningIndex]} />
        </UserDetailsWrapper>  
        
        <UserDetailsWrapper player="Loser">
          <UserDetails scores={props.scores[LosingIndex]} info={props.playersInfo[LosingIndex]} />
        </UserDetailsWrapper>  	
        </div>

        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
            </Link>
          </div>
        </div>
      </div></p>
}

Results.PropTypes = {
	isLoading: PropTypes.bool.isRequired,
	playerInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired,
}

module.exports = Results;