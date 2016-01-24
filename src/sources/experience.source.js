var ExperienceActions = require('../actions/experience.actions');

var data = [{
	"services": [{
		"header": "Website Design and SEO",
		"subheader": "Customized Solutions for Your Business",
		"info": "We'll work with your business to ensure an optimized web presence. Responsive design techniques will be utilized to enhance the user experience on tablet and mobile platforms. We'll integrate blogs, and third-party software, such as; scheduling, and map widgets seamlessly. A comprehensive SEO strategy will be followed to boost your rankings.",
		"hyperlink": "http://alohadentalco.com",
		"image": "build/images/portfolio/aloha_dental.png"
	}, {
		"header": "UI/ UX Design and Development",
		"subheader": "JavaScript, HTML5, CSS3",
		"info": "Design and develop solutions to maximize the user experience. Storybording and prototyping is accomplished using Basalmiq and other tools as needed. Development is accomplished using the correct combination of frameworks for particular needs- Ember.js, Sencha Ext JS, Twitter Bootstrap, Handlebars and JQuery to name a few.",
		"hyperlink": "",
		"image": "build/images/portfolio/baseballextjs.png"
	}, {
		"header": "Interactive Development",
		"subheader": "RIA, Flex, Flash",
		"info": "Specialize in the creation of multimedia-rich user experiences, and data-driven interfaces- experienced in the development of RIA, games, entertainment features, media players, microsites, and websites.",
		"hyperlink": "",
		"image": "build/images/portfolio/kia_comparison_tool_1_service.jpg"
	}, {
		"header": "Web Development",
		"subheader": "Online Engineering",
		"info": "Focused on providing best quality services in web design, animation, software engineering, and online database development- we deliver engauging community sites and customized e-commerce solutions.",
		"hyperlink": "",
		"image": "build/images/portfolio/kswiss_tennis_1966_4_service.jpg"
	}, {
		"header": "Social Media",
		"subheader": "Marketing and Strategy",
		"info": "Ready to help execute your company's social media strategy, whether it's integrating a viral marketing campaign, or it's developing your next great facebook app.",
		"hyperlink": "",
		"image": "build/images/portfolio/ibm_sep_2_service.jpg"
	}],
	"apples": [{
		"header": "DaVita, Inc. Falcon EHR",
		"image": "build/images/portfolio/falcon_scheduler1.jpg"
	}, {
		"header": "Beatport, LLC.",
		"image": "build/images/portfolio/baseware_delivery.jpg"
	}, {
		"header": "KIA Motors America, Inc.",
		"image": "build/images/portfolio/kia_build_and_price_3.jpg"
	}, {
		"header": "K-Swiss",
		"image": "build/images/portfolio/kswiss_tennis_1966_1.jpg"
	}, {
		"header": "Royal Elastics",
		"image": "build/images/portfolio/royal_elastics_royal_world_1.jpg"
	}, {
		"header": "L.A.M.B.",
		"image": "build/images/portfolio/lamb_1.jpg"
	}, {
		"header": "Fox Searchlight Pictures",
		"image": "build/images/portfolio/original_moments_1.jpg"
	}, {
		"header": "Universal Pictures",
		"image": "build/images/portfolio/eyes_on_the_road_1.jpg"
	}, {
		"header": "Hollywood Stock Exchange",
		"image": "build/images/portfolio/hsx_1.jpg"
	}, {
		"header": "Leopard Communications, Inc.",
		"image": "build/images/portfolio/leopard_portfolio_1.jpg"
	}, {
		"header": "IBM",
		"image": "build/images/portfolio/ibm_event_in_box_1.jpg"
	}, {
		"header": "CKE Restaurants, Inc.",
		"image": "build/images/portfolio/superior_burger_2.jpg"
	}, {
		"header": "Hollywood Records",
		"image": "build/images/portfolio/jesse_mccartney_2.jpg"
	}, {
		"header": "HackTone Records",
		"image": "build/images/portfolio/hacktone_1.jpg"
	}, {
		"header": "HackMart",
		"image": "build/images/portfolio/hackmart_2.jpg"
	}, {
		"header": "Brian Morgan Photography",
		"image": "build/images/portfolio/brianmorgan2.jpg"
	}, {
		"header": "Aloha Dental",
		"image": "build/images/portfolio/aloha_dental_2.jpg"
	}, {
		"header": "WSV Architects, Inc.",
		"image": "build/images/portfolio/wsv-architects_1.jpg"
	}]
}];

var ExperienceSource = {
	fetchExperiences() {
		return {
			remote() {
				return new Promise(function (resolve, reject) {
					// simulate an asynchronous flow where data is fetched on
					// a remote server somewhere.
					setTimeout(function () {

						// change this to `false` to see the error action being handled.
						if (true) {
							// resolve with some mock data
							resolve(data);
						} else {
							reject('Things have broken');
						}
					}, 250);
				});
			},

			local() {
				// Never check locally, always fetch remotely.
				return null;
			},

			success: ExperienceActions.updateExperiences,
			error: ExperienceActions.experiencesFailed,
			loading: ExperienceActions.fetchExperiences
		}
	}
};

module.exports = ExperienceSource;

