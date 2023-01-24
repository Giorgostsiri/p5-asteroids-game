let controllerPad;
let controllerLeft;
let controllerRight;
let controllerNew;
let controllerPause;
let fire;
let leftIsPressed;
let rightIsPressed;


document.addEventListener('contextmenu', event => event.preventDefault()); // disable context menu that would appear on long taps

function setupTouchScreenControls()
{
	console.log("Execution of: setupTouchScreenControls()");
	controllerPad = createImg("./Assets/Controller.png");
	controllerLeft = createImg("./Assets/left.png");
	controllerRight = createImg("./Assets/right.png");
	controllerNew = createImg("./Assets/n.png");
	controllerPause = createImg("./Assets/p.png");
	fire = createImg("./Assets/Attack.png");

	
	controllerLeft.touchStarted(touchLeftPressed);
	controllerLeft.mouseReleased(releasedTouchControls);
	
	controllerRight.touchStarted(touchRightPressed);
	controllerRight.mouseReleased(releasedTouchControls);
	
	controllerNew.mousePressed(newGameTouchPressed);
	controllerPause.mousePressed(pauseGameTouchPressed);
	fire.mousePressed(getTouchFire);
}

function drawTouchScreenControls()
{
	controllerPad.position(450,490);
	controllerLeft.position(470,645);
	controllerRight.position(520,645);
	controllerNew.position(690,600);
	controllerPause.position(760,600);
	fire.position(200,600);
}

function releasedTouchControls()
{
	leftIsPressed = false;
	rightIsPressed = false;

}

function touchLeftPressed()
{
	leftIsPressed = true;
	rightIsPressed = false;

}

function touchRightPressed()
{
	leftIsPressed = false;
	rightIsPressed = true;
}

function getTouchFire()
{
	return true;
}

function getTouchDirectionControl()
{
	if (leftIsPressed)
	{
		return -1;
	}
	
	if (rightIsPressed)
	{
		return 1;
	}
}

function newGameTouchPressed()
{
	startGame = true;
	startOnce = true;
	gameOver = false;
}

function pauseGameTouchPressed()
{
	if (startGame && !gameOver && !paused)
					paused = true;
				else if (startGame && !gameOver && paused)
					paused = false;
					
				if (paused)
				{
                    Pd.start();
				    Pd.send('Pause', 1);
				}

					
				if (!paused)
				{ 
				    Pd.send('Resume', 1);
				}
}
