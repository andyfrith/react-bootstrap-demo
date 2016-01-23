var alt = require('../alt');
var ExperienceActions = require('../actions/experience.actions');
var ExperienceSource = require('../sources/experience.source');

class ExperienceStore {
	constructor() {
		this.experiences = [];
		this.errorMessage = null;

		this.bindListeners({
			handleUpdateExperiences: ExperienceActions.UPDATE_EXPERIENCES,
			handleFetchExperiences: ExperienceActions.FETCH_EXPERIENCES,
			handleExperiencesFailed: ExperienceActions.EXPERIENCES_FAILED
		});

		this.exportPublicMethods({
			getExperience: this.getExperience
		});

		this.exportAsync(ExperienceSource);
	}

	handleUpdateExperiences(experiences) {
		this.experiences = experiences;
		this.errorMessage = null;
	}

	handleFetchExperiences() {
		this.experiences = [];
	}

	handleExperiencesFailed(errorMessage) {
		this.errorMessage = errorMessage;
	}

	getExperience(id) {
		var { experiences } = this.getState();
		for (var i = 0; i < experiences.length; i += 1) {
			if (experiences[i].id === id) {
				return experiences[i];
			}
		}

		return null;
	}
}

module.exports = alt.createStore(ExperienceStore, 'ExperienceStore');
