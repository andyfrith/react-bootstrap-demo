var alt = require('../alt');

class ExperienceActions {
	updateExperiences(experiences) {
		this.dispatch(experiences);
	}

	fetchExperiences() {
		this.dispatch();
	}

	experiencesFailed(errorMessage) {
		this.dispatch(errorMessage);
	}
}

module.exports = alt.createActions(ExperienceActions);