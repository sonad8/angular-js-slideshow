var app = angular.module('Slideshows using Angular JS',['slick']);

app.directive('slideit',function() {
    return {
       restrict: 'A',
       replace: true,
       scope: {
         slideit: '=' 
       },
       template: '<ul class="bxslider">' +
                  '<li ng-repeat="slide in slides">' +
                 '<img ng-src="{{slide.src}}" alt="" />' +
                 '</li>' +
                 '</ul>',
       link: function(scope, elm, attrs) {
          elm.ready(function() {
            scope.$apply(function() {
                scope.slides = scope.slideit;
            });                    
            elm.bxSlider({
              adaptiveHeight: true,
              mode: 'fade'});   
            });
       }
    }; 
});

app.controller('MainCtrl', function($scope) {
  $scope.base = 'http://image.tmdb.org/';
  $scope.images = [
       {src: $scope.base + 't/p/w1280/8y2IcNwQBuyuud3YO8IP41xUgEz.jpg' },
       {src: $scope.base + 't/p/w1280/2BXd0t9JdVqCp9sKf6kzMkr7QjB.jpg' },
       {src: $scope.base + 't/p/w1280/oYZtd7Md78HuzBvT5dlJlHWc89O.jpg' },
       {src: $scope.base + 't/p/w1280/8fW3GPYTFUCutgfh77LbGbw3yQI.jpg'},
       {src: $scope.base + 't/p/w1280/8y2IcNwQBuyuud3YO8IP41xUgEz.jpg' },
       {src: $scope.base + 't/p/w1280/2BXd0t9JdVqCp9sKf6kzMkr7QjB.jpg' },
       {src: $scope.base + 't/p/w1280/oYZtd7Md78HuzBvT5dlJlHWc89O.jpg' },
       {src: $scope.base + 't/p/w1280/8fW3GPYTFUCutgfh77LbGbw3yQI.jpg'},
       {src: $scope.base + 't/p/w1280/8y2IcNwQBuyuud3YO8IP41xUgEz.jpg' },
       {src: $scope.base + 't/p/w1280/2BXd0t9JdVqCp9sKf6kzMkr7QjB.jpg' },
       {src: $scope.base + 't/p/w1280/oYZtd7Md78HuzBvT5dlJlHWc89O.jpg' },
       {src: $scope.base + 't/p/w1280/8fW3GPYTFUCutgfh77LbGbw3yQI.jpg'},

     ];
});




