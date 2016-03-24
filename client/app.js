/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
Meteor.startup(function() {
    console.log('client/app.js startup begin');

    // TODO studies_index should be moved to study_contrast_selector
    Meteor.subscribe('studies_index');
    // Meteor.subscribe('study_groups_index');

    // TODO clinical_events_index should be moved to samplePieCharts
    Meteor.subscribe('clinical_events_index');

    // TODO contrast should be moved to study_contrast_selector
    Meteor.subscribe('contrast');

    Session.set('selectedContrast', '');
    console.log('/client/app.js startup complete');
});

_.extend(App, {
});

App.helpers = {
    selectedStudy : function() {
        return Session.get('studyID');
    }
};

_.each(App.helpers, function(helper, key) {
    Handlebars.registerHelper(key, helper);
});
