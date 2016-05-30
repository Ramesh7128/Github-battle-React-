var React = require('react');

function UserDetailsWrapper(props) {

	return (

		<div className='col-sm-6'>
          <p className='lead'>{props.player}</p>
          {props.children}
        </div>
		)


}

module.exports = UserDetailsWrapper;

