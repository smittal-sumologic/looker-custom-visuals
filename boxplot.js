const my_custom_viz = {
    options: {
        // ... define your options ...
    },

    create: function(element, config) {
        // ... one-time visual setup ...
    },

    updateAsync: function(data, element, config, queryResponse, details, done) {
    var data = [
        {
            y: [1, 14, 14, 15, 16, 18, 18, 19, 19, 20, 20, 23],   // add the actual data
            type: 'box'
        }
    ];

    var layout = {
        title: 'Box Plot'
    };

    Plotly.newPlot('myDiv', data, layout);   // Replace 'myDiv' with the id of your DOM element
    }
}

looker.plugins.visualizations.add(my_custom_viz);
