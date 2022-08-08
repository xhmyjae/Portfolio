var map = $('.map');
var followTimer;
var tickCount = 0;
var mouseX;
var moveGradient = function(newOffset) {
    var currentOffset = parseFloat(map.find('stop:eq(1)').attr('offset'))
    var change = newOffset - currentOffset;
    var offset = change*Math.min(tickCount,5)/5 + currentOffset;
    map.find('stop:eq(1)').attr('offset', offset);
}
map.mousemove(function(e) {
    mouseX = e.offsetX;
    tickCount = 0;
}).mouseenter(function(e) {
    clearInterval(followTimer);
    followTimer = setInterval(function() {
        tickCount++;
        moveGradient(mouseX/map.width());
    }, 100);
}).mouseleave(function(e) {
    tickCount = 0;
    clearInterval(followTimer);
    followTimer = setInterval(function() {
        tickCount++;
        moveGradient(0);
        if (offset = 0) clearInterval(followTimer);
    }, 100);
});
