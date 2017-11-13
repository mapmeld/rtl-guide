function addTyping(input) {
  var repeatString = 'މިއެކުމާފާނަކީ ކޮންމެ ބޭފުޅަކަށް ވެސް މިނިވަންކަމާ އެކު އުނިއިތުރު ގެނެވޭނެ އެކުމާފާނެކެވެ.';
  var currentIndex = 0;
  inps[i].oninput = function (e) {
    if (e.inputType === 'deleteContentBackward') {
      // backspace
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex += repeatString.length;
      }
    } else {
      e.target.value = e.target.value.substring(0, e.target.value.length - 1) + repeatString[currentIndex];
      currentIndex = (currentIndex + 1) % repeatString.length;
    }
  };
}

var inps = document.getElementsByClassName("dhivehi-forced");
for (var i = 0; i < inps.length; i++) {
  addTyping(inps[i]);
}

var marhaba = 'مرحبا';
var ctx = document.getElementById("hello").getContext('2d');
ctx.font = '20px Arial';
ctx.fillText("hello", 0, 20);
var ctx2 = document.getElementById("hello2").getContext('2d');
ctx2.font = '20px Arial';
ctx2.fillText(marhaba, 0, 20);
var ctx3 = document.getElementById("hello3").getContext('2d');
ctx3.font = '20px Arial';
ctx3.fillText(marhaba, 150 - ctx3.measureText(marhaba).width, 20);
