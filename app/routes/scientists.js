import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{'name':'Marie Curie','title':'physics'},{'name':'Mae Jemison','title':'chemist'},{'name':'Albert Hofmann','title':'scientist'}];
	}
});
