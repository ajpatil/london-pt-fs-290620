// let newButton = document.createElement("button");
// newButton.innerText = "Click Me!";
// document.body.append(newButton);

const addCounterEl = document.querySelector("#new_timer");
//Add timer button
const timersContainerEl = document.querySelector(".timers");
//Div el where timers will be placed


let timersCount = 0;

/**
 * Exercise 1
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */
const createTimerEl = (num) => {
  let newDivElement = document.createElement("div");
  newDivElement.className = `timer_${num}`;
  newDivElement.innerHTML =`
		<div class="timer">
			<div class="remove"></div>
			<h3>
				<span class='sec'>0</span>
				<span class='milisec'>00</span>
			</h3>
			<div class="btn">
				<button class="reset">Reset</button>
				<button class="stop">stop</button>
			</div>
		</div>
	`;
  timersContainerEl.appendChild(newDivElement);

	newDivElement.querySelector('.remove').onclick = function(){
		newDivElement.parentNode.removeChild(newDivElement);
		timersCount -= 1;
	}

	let secEl = newDivElement.querySelector('.sec')
	let miliSecEl = newDivElement.querySelector('.milisec')

	let timer = setInterval(()=>{
		makeTimerAlive(secEl,miliSecEl)
	},10)

	newDivElement.querySelector('.reset').onclick = function(){
		secEl.innerHTML = '0'
		miliSecEl.innerHTML = '00'
	}
	newDivElement.querySelector('.stop').onclick = function(){
		if(this.innerHTML==='stop'){
			clearInterval(timer)
			this.innerHTML = 'start'
		}else{
			timer = setInterval(()=>{
				makeTimerAlive(secEl,miliSecEl)
			},10)
			this.innerHTML = 'stop'
		}
	}

	function stop(self){
		if(self.innerText==='stop'){
			clearInterval(timer)
			self.innerText = 'start'
		}else{
			timer = setInterval(()=>{
				makeTimerAlive(secEl,miliSecEl)
			},10)
			self.innerText = 'stop'
		}
	}

};

function makeTimerAlive(secEl,miliSecEl){
	let currentMiliSec = miliSecEl.innerHTML;
	let currentSec = secEl.innerHTML;
	if(+currentMiliSec===100){
		secEl.innerHTML = +currentSec + 1
		miliSecEl.innerHTML = '00'
	}else{
		miliSecEl.innerHTML = +currentMiliSec<9? '0'+(+currentMiliSec+1) : +currentMiliSec+1
	}
	
}

const clickedOnAddTimer = addCounterEl.addEventListener("click", function () {
  timersCount += 1;
  console.log(timersCount);
  if (timersCount <= 5) {
    createTimerEl(timersCount);
    
  } else if (timersCount > 5) {
    window.alert("Cant add any more timers. Delete some first!");
  }
});

// Selecting specific elements
// Deleting timer once cross is clicked






//Steps left:
// How to add CSS flexbox?
// No idea how to start a timer
