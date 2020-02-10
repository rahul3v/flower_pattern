var canvas = document.getElementById("my_canvas"),
  	color = 'rgba(0,0,0,0.4)',
    fillcolor = 'rgba(0,0,0,0.4)',
    seedRadius =  2,
  	seedDistance = 4;
  const pi2 = Math.PI * 2;
  canvas.width=canvas.height=Math.abs(Math.max(window.innerWidth/3.6, 340)); //To fix canvas size at specific screen loads it
  const maxD = canvas.height;
  const phi = (Math.sqrt(5) + 1) / 2;
  const center = maxD / 2;

  var ctx = canvas.getContext("2d");
  function downlaodcanvas(e){
  let imgUrl = e.toDataURL('image/png');
      newlink = document.createElement('a');
      newlink.href = imgUrl;
      newlink.download="flower"+Math.random()+".png";
      newlink.style.display="none";
      document.body.appendChild(newlink);
      newlink.click();
      newlink.remove();
}
 
  // Draw a circlular seed centered at (x,y)
  function drawSeed(x, y) {
   ctx.beginPath();
   ctx.lineWidth = 2;
   ctx.fillStyle = fillcolor; //''black''
   ctx.strokeStyle = color;
   ctx.arc(x, y, seedRadius, 0, pi2, false);
   ctx.fill();
   ctx.closePath();
   ctx.stroke();
  }

  function drawFlower(seeds=(total_seeds.value||100)) {
    //console.log('seed value = '+ seeds);
    ctx.clearRect(0, 0, maxD, maxD);
    for(var i = 0; i < seeds; i++){
      var theta = i * pi2 / phi;
      var r = Math.sqrt(i) * seedDistance;
      var x = center + r * Math.cos(theta);
      var y = center - r * Math.sin(theta);
      drawSeed(x, y);
    }
  }
  drawFlower();