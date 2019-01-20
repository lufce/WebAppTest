/**
 *
 */
var canvas;
var ctx;

onload = function() {
	  /* canvas要素のノードオブジェクト */
	  canvas = document.getElementById('canvas1');
	  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
	  if ( ! canvas || ! canvas.getContext ) {
	    return false;
	  }
	  drawGrid();
};
function drawGrid() {

  /* 2Dコンテキスト */
  ctx = canvas.getContext('2d');
  /* グリッド線を描く */
  var interval = 10;
  //ctx.lineWidth = 0.5;
  canvasHeight = canvas.height;
  canvasWidth = canvas.width;
  ctx.beginPath();
  for (var i = 0; i*interval <= canvasHeight; i++){
    ctx.moveTo(i*interval, 0);
    ctx.lineTo(i*interval, canvasWidth)
  }

  for (var i = 0; i*interval <= canvasWidth; i++){
    ctx.moveTo(0, i*interval);
    ctx.lineTo(canvasHeight, i*interval)
  }
  ctx.closePath();
  ctx.stroke();

  ctx.fillRect(0,0,30,30);
}