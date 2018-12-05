import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

export class BusinessList extends React.Component {

   render() {
      return (
	  <div className="BusinessList">
		{
			this.props.businesses.map(function(business, i) {
				return <Business key={business.id} business={business}/>
			})
		}
	</div>)
      }

}

export default BusinessList;