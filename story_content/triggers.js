function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JlWmTZsmC0":
        Script1();
        break;
      case "5aow0Fiwvg3":
        Script2();
        break;
      case "5yKVJbc3zQ6":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('6hQp1FxRDKP');
const duration = 1750;
const easing = 'ease-out';
const id = '5dJ1PCpSG7P';
const pulseAmount = 0.1;
const delay = 7500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6RvrCxHieiu');
const duration = 1750;
const easing = 'ease-out';
const id = '6Zep0HX5vmV';
const pulseAmount = 0.1;
const delay = 7500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6TrjJKX3YZb');
const duration = 1750;
const easing = 'ease-out';
const id = '6cguHWjVP0O';
const pulseAmount = 0.07;
const delay = 6500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
