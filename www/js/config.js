angular.module('starter.config', []).constant("ApiEndpoint", {
        //url: "http://localhost:8100/api" // for localhost debugging
        url: "http://sps.rr-research.no/test/reconnect-pretest/webchoice/api"
        //url: "http://sps.rr-research.no/demo/connectwcp/webchoice/api"
        //url: "http://10.163.2.45:8080/api" // For running on device, add correct IP and port
    })
    .constant("resourcePath", 'resources/')
    .constant("language", 'nb-NO');
