function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CYCm8mleV0":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var min = 1;
var max = 10;
var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
player.SetVar("randomNum", randomNum);

}

};
