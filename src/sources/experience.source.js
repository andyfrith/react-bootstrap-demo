var ExperienceActions = require('../actions/experience.actions');

// /var mockData = [
//	{ id: 0, name: 'Abu Dhabi' },
//	{ id: 1, name: 'Berlin' },
//	{ id: 2, name: 'Bogota' },
//	{ id: 3, name: 'Buenos Aires' },
//	{ id: 4, name: 'Cairo' },
//	{ id: 5, name: 'Chicago' },
//	{ id: 6, name: 'Lima' },
//	{ id: 7, name: 'London' },
//	{ id: 8, name: 'Miami' },
//	{ id: 9, name: 'Moscow' },
//	{ id: 10, name: 'Mumbai' },
//	{ id: 11, name: 'Paris' },
//	{ id: 12, name: 'San Francisco' }
//];

var data = [
	{
		"header": "Website Design and SEO",
		"subheader": "Customized Solutions for Your Business",
		"info": "We'll work with your business to ensure an optimized web presence. Responsive design techniques will be utilized to enhance the user experience on tablet and mobile platforms. We'll integrate blogs, and third-party software, such as; scheduling, and map widgets seamlessly. A comprehensive SEO strategy will be followed to boost your rankings.",
		"hyperlink": "http://alohadentalco.com",
		"image": "build/images/portfolio/aloha_dental.png"
	},
	{
		"header": "UI/ UX Design and Development",
		"subheader": "JavaScript, HTML5, CSS3",
		"info": "Design and develop solutions to maximize the user experience. Storybording and prototyping is accomplished using Basalmiq and other tools as needed. Development is accomplished using the correct combination of frameworks for particular needs- Ember.js, Sencha Ext JS, Twitter Bootstrap, Handlebars and JQuery to name a few.",
		"hyperlink": "http://alohadentalco.com",
		"image": "build/images/portfolio/baseballextjs.png"
	},
	{
		"header": "Interactive Development",
		"subheader": "RIA, Flex, Flash",
		"info": "Specialize in the creation of multimedia-rich user experiences, and data-driven interfaces- experienced in the development of RIA, games, entertainment features, media players, microsites, and websites.",
		"hyperlink": "http://alohadentalco.com",
		"image": "build/images/portfolio/kia_comparison_tool_1_service.jpg"
	},
	{
		"header": "Web Development",
		"subheader": "Online Engineering",
		"info": "Focused on providing best quality services in web design, animation, software engineering, and online database development- we deliver engauging community sites and customized e-commerce solutions.",
		"hyperlink": "http://alohadentalco.com",
		"image": "build/images/portfolio/kswiss_tennis_1966_4_service.jpg"
	},
	{
		"header": "Social Media",
		"subheader": "Marketing and Strategy",
		"info": "Ready to help execute your company's social media strategy, whether it's integrating a viral marketing campaign, or it's developing your next great facebook app.",
		"hyperlink": "http://alohadentalco.com",
		"image": "build/images/portfolio/ibm_sep_2_service.jpg"
	}
];

//
//var data = {
//	"services": [{
//		"header": "Website Design and SEO",
//		"subheader": "Customized Solutions for Your Business",
//		"info": "I'll work with your business to ensure an optimized web presence. Responsive design techniques will be utilized to enhance the user experience on tablet and mobile platforms. We'll integrate blogs, and third-party software, such as; scheduling, and map widgets seamlessly. A comprehensive SEO strategy will be followed to boost your rankings.",
//		"hyperlink": "http://alohadentalco.com",
//		"image": "build/images/portfolio/aloha_dental.png"
//	}, {
//		"header": "UI/ UX Design and Development",
//		"subheader": "JavaScript, HTML5, CSS3",
//		"info": "Design and develop solutions to maximize the user experience. Storybording and prototyping is accomplished using Basalmiq and other tools as needed. Development is accomplished using the correct combination of frameworks for particular needs- Ember.js, Sencha Ext JS, Twitter Bootstrap, Handlebars and JQuery to name a few.",
//		"hyperlink": "http://alohadentalco.com",
//		"image": "build/images/portfolio/baseballextjs.png"
//	}, {
//		"header": "Interactive Development",
//		"subheader": "RIA, Flex, Flash",
//		"info": "Specialize in the creation of multimedia-rich user experiences, and data-driven interfaces- experienced in the development of RIA, games, entertainment features, media players, microsites, and websites.",
//		"hyperlink": "http://alohadentalco.com",
//		"image": "build/images/portfolio/kia_comparison_tool_1_service.jpg"
//	}, {
//		"header": "Web Development",
//		"subheader": "Online Engineering",
//		"info": "Focused on providing best quality services in web design, animation, software engineering, and online database development- we deliver engauging community sites and customized e-commerce solutions.",
//		"hyperlink": "http://alohadentalco.com",
//		"image": "build/images/portfolio/kswiss_tennis_1966_4_service.jpg"
//	}, {
//		"header": "Social Media",
//		"subheader": "Marketing and Strategy",
//		"info": "Ready to help execute your company's social media strategy, whether it's integrating a viral marketing campaign, or it's developing your next great facebook app.",
//		"hyperlink": "http://alohadentalco.com",
//		"image": "build/images/portfolio/ibm_sep_2_service.jpg"
//	}],
//	"apples": [{
//		"header": "DaVita, Inc. Falcon EHR",
//		"image": "build/images/portfolio/falcon_scheduler1.jpg"
//	}, {
//		"header": "Beatport, LLC.",
//		"image": "build/images/portfolio/baseware_delivery.jpg"
//	}]
//};

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

