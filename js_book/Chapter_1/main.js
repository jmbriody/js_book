(function () {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    
    
    var tool = new Tool();
    tool.onMouseDown = function (event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    };
    

    paper.view.draw();

    //    console.log('main.js loaded');
}());

function draw(n) {
    if(n < 1 || n > 52) throw new Error('You must draw between 1 and 52 cards');
    const deck = [];
    for(let suit of ['\u2660', '\u2663', '\u2665', '\u2666']) {
        for(let rank of 'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',')) {
            deck.push(`${rank}${suit}`);
        }
    }
    const hand = [];
    while(n) {
        hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
        n--;
    }
    return hand;
}

console.log("Your hand");
console.log(draw(5));

