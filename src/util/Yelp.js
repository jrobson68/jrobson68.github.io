const apiKey = 'nn2p3sYFKvmdvWsO_sv3vn1LTAeoUndcwdchFGRuN2q-Z8Dw6ns9jj6gJYGZWR_UwQ3HcS0gKgu5TgFTr8yswfYpQ6i6zwAhj0cUvNFfSdypLS743IMpIhZIENrlW3Yx';
export let Yelp = {search(term, location, sortBy) {
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: { Authorization: `Bearer ${apiKey}`}}).then(response => {
		return response.json().then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zipcode,
						category: business.categories.title,
						rating: business.rating,
						reviewCount: business.review_count
					}
				})
			}
		})
	})
}}; 
 

export default Yelp;