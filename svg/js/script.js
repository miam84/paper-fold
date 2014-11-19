SVGElement.prototype.hasClass = function (className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(this.getAttribute('class'));
};
SVGElement.prototype.addClass = function (className) {
  if (!this.hasClass(className)) {
    this.setAttribute('class', this.getAttribute('class') + ' ' + className);
  }
};
SVGElement.prototype.removeClass = function (className) {
  var removedClass = this.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');
  if (this.hasClass(className)) {
    this.setAttribute('class', removedClass);
  }
};
SVGElement.prototype.toggleClass = function (className) {
  if (this.hasClass(className)) {
    this.removeClass(className);
  } else {
    this.addClass(className);
  }
};

$(document).ready(function(){
	makeItSnow();
	$('#mountains').on('click', function(e){
		var snowEl = document.getElementsByClassName('snow');
		for (i=0;i<snowEl.length;i++){
			snowEl[i].toggleClass('fall');
		}
	});


	function makeItSnow(){
		var s = Snap("#svg");
		var flocon = s.circle(50,50,10);
		flocon.attr({
		    fill: "#fff",
		    stroke: "#000",
		    strokeWidth: 2
		});
		flocon.animate({r: 5}, 1000);
	}
});