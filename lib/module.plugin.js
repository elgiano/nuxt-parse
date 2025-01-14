import Vue from 'vue'

export default context => {

    let Parse = require('parse');

    Parse.initialize('<%= options.appId %>', '<%= options.javascriptKey %>');

    Parse.serverURL = '<%= options.serverUrl %>'
    
    Vue.prototype.$parse = Parse;
}
