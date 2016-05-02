var horizontal = document.querySelector('#horizontal');
var vertical = document.querySelector('#vertical');
var blur = document.querySelector('#blur');
var spread = document.querySelector('#spread');
var shadow = document.querySelector('#shadow-color');
var bgColor = document.querySelector('#bg-color');
var buttonColor = document.querySelector('#button-color');
var textColor = document.querySelector('#text-color');
var opacity = document.querySelector('#opacity');
var inset = document.querySelector('#inset');
var button = document.querySelector('.button');
var boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
var horiVal = document.querySelector('#horizontalVal');
var veriVal = document.querySelector('#verticalVal');
var blurVal = document.querySelector('#blurRadius');
var spreadVal = document.querySelector('#spreadRadius');
var shadowVal = document.querySelector('#shadowHex');
var codeSnippet = document.querySelector('.right-column pre code');
var opacVal = document.querySelector('#opacityVal');
var bgVal = document.querySelector("#bgHex");
var txtVal = document.querySelector('#textHex');
var buttVal = document.querySelector('#buttHex');

horiVal.value = getHorizontal();
veriVal.value = getVertical();
blurVal.value = getBlur();
opacVal.value = opacity.value;
spreadVal.value = getSpread();
shadowVal.value = shadow.value;
button.style.backgroundColor = buttonColor.value;
buttVal.value = buttonColor.value;
bgVal.value = bgColor.value;
txtVal.value = textColor.value;

codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
button.style.boxShadow = boxShadowString;
button.style.backgroundColor = buttonColor.value;
button.style.color = textColor.value;
document.querySelector('.right-column').style.backgroundColor = bgColor.value;

inset.addEventListener('change', function() {
  boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
  button.style.boxShadow = boxShadowString;
  codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
})

opacity.addEventListener('mousemove', function() {
  boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
  opacVal.value = opacity.value;
    button.style.boxShadow = boxShadowString;
  codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
})

horizontal.addEventListener('mousemove', function() {
  boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
  horiVal.value = getHorizontal();
    button.style.boxShadow = boxShadowString;
  codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
});

vertical.addEventListener('mousemove', function() {
  boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
 veriVal.value = getVertical();
    button.style.boxShadow = boxShadowString;
  codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
});

blur.addEventListener('mousemove', function() {
  boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
  blurVal.value = getBlur();
    button.style.boxShadow = boxShadowString;
  codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
});

spread.addEventListener('mousemove', function() {
  boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
  spreadVal.value = getSpread();
    button.style.boxShadow = boxShadowString;
  codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
});

shadow.addEventListener('change', function() {
  boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
  shadowVal.value = shadow.value;
    button.style.boxShadow = boxShadowString;
  codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
});

bgVal.addEventListener('change', function() {
  bgColor.value = bgVal.value; document.querySelector('.right-column').style.backgroundColor = bgColor.value;
});

buttVal.addEventListener('change', function() {
  buttonColor.value = buttVal.value; button.style.backgroundColor = buttonColor.value;
});

txtVal.addEventListener('change', function() {
  textColor.value = txtVal.value; button.style.color = textColor.value;
});


shadowVal.addEventListener('change', function() {
  shadow.value = shadowVal.value;
});

bgColor.addEventListener('change', function() {
  document.querySelector('.right-column').style.backgroundColor = bgColor.value;
  bgVal.value = bgColor.value;
});

textColor.addEventListener('change', function() {
 document.querySelector('.button').style.color = textColor.value;
  txtVal.value = textColor.value;
});

buttonColor.addEventListener('change', function() { document.querySelector('.button').style.backgroundColor = buttonColor.value;
  buttVal.value = buttonColor.value;
});



function getHorizontal() {
  return horizontal.value;
}

function getVertical() {
  return vertical.value;
}

function getBlur() {
  return blur.value;
}

function getSpread() {
  return spread.value;
}

function getInset() {
  if (inset.checked) {
    return "inset ";
  }
  return "";
}

function getOpacity() {
  getColor(shadow.val, opacity.val);
}

function getColor(hex, opacity) {
  var rgb = hexToRgb(hex);
  var rgbString = "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + opacity + ")";
  return rgbString;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
