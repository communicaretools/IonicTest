describe('Video Controller', function (){
	beforeEach(module('starter.controllers'));
	var videoCtrl;
	beforeEach(inject(function ($controller) {
		videoCtrl = $controller('VideoCtrl', {});
	}));

	it('should pass', function () {
		expect(videoCtrl.value).toBe("Hallo");
	});
});