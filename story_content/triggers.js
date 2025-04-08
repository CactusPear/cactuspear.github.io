function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68iFRX8Jg3n":
        Script1();
        break;
      case "6dbzLLt5YX6":
        Script2();
        break;
      case "5xJt1TUx16O":
        Script3();
        break;
      case "6mHG2I4TEpN":
        Script4();
        break;
      case "5vEri8QOWhA":
        Script5();
        break;
      case "5V9PQq3a7ZH":
        Script6();
        break;
      case "6cJO1USknKg":
        Script7();
        break;
      case "5i6CxMPmfvx":
        Script8();
        break;
      case "5zuhyjIRQO0":
        Script9();
        break;
      case "6WGtDS2y01n":
        Script10();
        break;
      case "5nD6wsgOj8X":
        Script11();
        break;
      case "6561HqwLFvX":
        Script12();
        break;
      case "5tGoJEWrG6m":
        Script13();
        break;
      case "6BYWdzJn5C7":
        Script14();
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
window.Script1 = function()
{
  player.once(() => {
const target = object('5hnRCmK1z8b');
const duration = 6000;
const easing = 'ease-out';
const id = '5XVmvyoULiO';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5hnRCmK1z8b');
const duration = 6000;
const easing = 'ease-out';
const id = '5XVmvyoULiO';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5XskZJoSviV');
const duration = 6000;
const easing = 'ease-out';
const id = '6AgewKfJMAx';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6azgmtzhfpM');
const duration = 6000;
const easing = 'ease-out';
const id = '6IcVAv5ewtc';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6IroATCmepz');
const duration = 6000;
const easing = 'ease-out';
const id = '5k4pV8XX28T';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6pimZUk9IqF');
const duration = 6000;
const easing = 'ease-out';
const id = '5lt8Heae3Sv';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  const target = object('6IroATCmepz');
const duration = 6000;
const easing = 'ease-out';
const id = '5k4pV8XX28T';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5XskZJoSviV');
const duration = 6000;
const easing = 'ease-out';
const id = '6AgewKfJMAx';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6pimZUk9IqF');
const duration = 6000;
const easing = 'ease-out';
const id = '5lt8Heae3Sv';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6azgmtzhfpM');
const duration = 6000;
const easing = 'ease-out';
const id = '6IcVAv5ewtc';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('69Kk6p4uPoj');
const duration = 6000;
const easing = 'ease-out';
const id = '5g4jEfEDwra';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6goOmDcBSdT');
const duration = 6000;
const easing = 'ease-out';
const id = '6F45mFISrtQ';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('64pTvz7BNOh');
const duration = 6000;
const easing = 'ease-out';
const id = '5pY1z1p48TE';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6PqPMwXLPre');
const duration = 6000;
const easing = 'ease-out';
const id = '6ObQKUuOtpU';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
