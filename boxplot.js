const my_custom_viz = {
    options: {
        // ... define your options ...
    },

    create: function(element, config) {
        // ... one-time visual setup ...
    },

    updateAsync: function(data, element, config, queryResponse, details, done) {
        // ... code to modify chart ...
        done();
    }
}

looker.plugins.visualizations.add(my_custom_viz);
