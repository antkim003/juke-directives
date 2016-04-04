juke.directive('songList', function(PlayerFactory) {
  return {
    scope: {
      playlist: '='
    },
    templateUrl: 'js/song/templates/songs.html',
    link: function(scope, element, attrs) {
      scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.playlist.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };

      scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };

      scope.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };
    }
  }
});

juke.directive('doubleClick', function(PlayerFactory) {
  return {
    restrict: 'A',
    scope: {
      doubleClick: '&'
    },
    link: function(scope, element, attrs) {
      element.on('dblclick',function(event) {
        scope.doubleClick();
      });
    }
  }
});
