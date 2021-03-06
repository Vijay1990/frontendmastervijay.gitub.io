$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    smartSpeed: 3000,
    slideSpeed: 3000,
    touchDrag: false,
    mouseDrag: false,
    animateIn: 'rollIn',
    items: 1,
    loop: false,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
  });

  owl.on('changed.owl.carousel', function (event) {
    if (event.item.index === 2) {
      $('.footer').css('background', '#a20d9e');
    } else {
      $('.footer').css('background', '#488ee2');
    }
    if (event.item.index === 3) {
      $('.footer').css('display', 'none');
    } else {
      $('.footer').css('display', 'inline-block');
    }
  });

  $('body').on('keyup', function (event) {
    owl.owlCarousel();
    // handle cursor keys
    if (event.keyCode == 37) {
      // go left
      owl.trigger('prev.owl.carousel');
    } else if (event.keyCode == 39) {
      // go right
      owl.trigger('next.owl.carousel');
    }

  });
});

var cords = [];
var smallPoint, largePoint;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);

  var res = 20;
  var countX = ceil(width / res) + 1;
  var countY = ceil(height / res) + 1;

  for (var j = 0; j < countY; j++) {
    for (var i = 0; i < countX; i++) {
      cords.push(new p5.Vector(res * i, res * j));
    }
  };

  noFill();
  stroke(255, 255, 255);
  smallPoint = 40;
  largePoint = 140;
  cnv.parent('container');
}

function draw() {
  background(30, 67, 137);
  for (var i = cords.length - 1; i >= 0; i--) {
    var h = calculateVector(cords[i].x - mouseX, cords[i].y - mouseY);
    line(
      cords[i].x,
      cords[i].y,
      cords[i].x + 18 * cos(h.heading()),
      cords[i].y + 18 * sin(h.heading())
    );
  };
  var pointillize = map(mouseX, mouseY, width, 300, 300);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  ellipse(mouseX, mouseY, pointillize, pointillize);
}

function calculateVector(x, y) {
  return new p5.Vector(y - x, -x - y);
}
//Gallery View
$(function () {
  $('.image-link').viewbox({
    setTitle: true,
    resizeDuration: 500,
    openDuration: 300,
    closeDuration: 200,
    closeButton: true,
    navButtons: true,
    closeOnSideClick: true,
    nextOnContentClick: true
  });
});

