('.new_pos').click(function() {
  var bodyWidth = document.body.clientWidth;
  var bodyHeight = document.body.clientHeight;
  var randPosX = Math.floor((Math.random()*bodyWidth));
  var randPosY = Math.floor((Math.random()*bodyHeight));
  var posLog = document.getElementById('pos_log');
  var posXY = 'x: ' + randPosX + '<br />' + 'y: ' + randPosY;
  
  ('#rand_pos').css('left', randPosX);
  ('#rand_pos').css('top', randPosY);
  
  posLog.innerHTML = posXY;
});