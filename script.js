let current_position = 0;
const incrementor = 350;

let wrapper_width = 0;

const test_block = document.querySelector("#gallery-items");
const lefty = document.querySelector("#right");
const righty = document.querySelector("#left");
const wrapper = document.querySelector("#invisi-wrap");

const init = () => {
  test_block.style.left = current_position + "px";
  wrapper_width = wrapper.offsetWidth;
  console.log(wrapper_width);
};
init();

window.addEventListener("resize", () => {
  init();
});

righty.addEventListener("click", () => {
  console.log("step right " + test_block.style.left);
  current_position = current_position + incrementor;
  lefty.style.visibility = " visible ";

if(parseInt(test_block.style.left, 10)>=0){
    // current_position = 0;
    righty.style.visibility = "hidden";
    
  }


  test_block.style.left = current_position + "px";
});

lefty.addEventListener("click", () => {
  console.log("step left " + test_block.style.left);
  current_position = current_position - incrementor;
  righty.style.visibility = " visible ";


       if(parseInt(test_block.style.left, 10) <= (wrapper_width - test_block.offsetWidth)){
    // current_position = wrapper_width - test_block.offsetWidth;
    lefty.style.visibility = "hidden";
  }
  
  test_block.style.left = current_position + "px";
});