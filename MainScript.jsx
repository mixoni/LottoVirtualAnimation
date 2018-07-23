var pos = document.getElementById('center').getBoundingClientRect(),
    radiusSat = document.getElementById('sat1').offsetWidth * 0.5,
    radius = document.getElementById('center').offsetWidth * 0.5,
    cx = pos.left + radius,
    cy = pos.top + radius,
    
    x, y, angle = 0, angles = [],
    spc = 360 / 20,
    deg2rad = Math.PI / 180,
    i = 0;

for(;i < 20; i++) {
    angles.push(angle);
    angle += spc;
}

/// space out radius
radius += (radiusSat + 10);
setInterval(function() {
    loop();
}, 1000);

//loop();

function loop() {

    for(var i = 0; i < angles.length; i++) {
        var circle = document.getElementById('sat' + i);
        angle = angles[i];
        //console.log(angle);
            
        x = cx + radius * Math.cos(angle * deg2rad);
        y = cy + radius * Math.sin(angle * deg2rad);
        
        circle.style.left = (x - radiusSat).toString() + "px";
        var left = x - radiusSat;
        var top = y - radiusSat;
        circle.style.top = (y - radiusSat).toString()+ "px";
        
        angles[i] = angles[i] + 13;
    }
    
    //requestAnimationFrame(loop);
}