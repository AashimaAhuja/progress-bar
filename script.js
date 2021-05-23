(function() {
  const progressBars = document.getElementsByClassName('progress');
  const btnStartAnim = document.getElementById('start-animation');
  const progressPerc = document.querySelector('.progress .number');
  const progressBarTmpl = document.getElementsByClassName('progress-bar')[0];

  let progress = 0;
  let inProgress = false;
  let isCompleted = false;
  let index = 0;

  function createProgressBar() {
    const [eleContainer] = document.getElementsByClassName('container');

    const clonedNode = progressBarTmpl.cloneNode(true);

    clonedNode.querySelector('.number').innerText = '0 %';
    clonedNode.querySelector('.progress').style.width = 0;

    eleContainer.appendChild(clonedNode);
  }

  function renderFrame() {
    const eleProgress = progressBars[index];
    const progressPerc = eleProgress && eleProgress.querySelector('.number');

    if (eleProgress) {
      eleProgress.style.width = `${progress}%`;
      progressPerc.innerText = `${progress}%`;
    }
  }

  function startAnimation() {
    if (progress != 0) {
      createProgressBar();
    }
    const intervalId = setInterval(() => {
      progress += 1;
      renderFrame();
      if (progress >= 100) {
        progress = -1;
        index++;
        clearInterval(intervalId);
      }
    }, 16.7);
  }

  btnStartAnim.addEventListener('click', startAnimation);

  // let start = 0;
  // let inProgress = true;
  // function startBar(){
  //   return new Promise(res => setTimeout(res, 1000))
  // }

  // async function animate(){
  //   if(!inProgress){
  //     let i = start;
  //     inProgress = true;
  //     while(i < progressBars.length){
  //       await startBar();
  //       i++;
  //       start = i;
  //     }
  //     inProgress = false;
  //   }
  // }

  // function renderFrame() {
  //   for(let i=0; i< progressBars.length; i++){

  //     if(i==start){
  //       const eleProgress = progressBars[index];
  //       const progressPerc = eleProgress && eleProgress.querySelector('.number');

  //       if (eleProgress) {
  //         eleProgress.style.width = `${progress}%`;
  //         progressPerc.innerText = `${progress}%`;
  //       }
  //     }

  //   }

  // }

  // btnStartAnim.addEventListener('click', ()=>{
  //   createProgressBar();
  //   animate();
  // });
})();
