describe('Unit Test', function(){
	
	beforeEach(module('starter.controllers', 'starter.services'));

	var diaryCtrl;
	beforeEach(inject(function($controller){
		diaryCtrl = $controller('DiaryCtrl', {});

	}));

    it('can get an instance of my factory', function() {
        expect(true).toBeTruthy();
    });
});