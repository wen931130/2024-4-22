function setup() {
  createCanvas(windowWidth,windowHeight);
  //產生一個文字框
  inputElement = createInput("淡江大學(●'◡'●)")  //新增一個文字框
  inputElement.position(50,50)   //把這文字框放到座標(50,50)
  inputElement.style("font-size","30px")  //網頁中的css
  inputElement.style("color","#fefae0") 
  inputElement.style("background-color","#d4a373")
  inputElement.style("width","500px") 
  inputElement.style("border","8px solid fill #d4a373")
  //滑桿
  sliderElement= createSlider(10,50,20,0.01)  //最小值，最大值，起始值，每滑一步0.1
  sliderElement.position(600,50)  //放到座標(600,50)
  //產生一個按鈕
  btnElement = createButton("瘋狂")
  btnElement.position(800,50)   //放到座標(800,50)
  btnElement.style("font-size","20px")
  btnElement.style("border","10px solid fill #d4a373")
  btnElement.style("border-color","green")
  btnElement.mousePressed(goCrazy)  //此按鈕被按下後，需要去執行goCrazy函數
  //顏色選擇器
  colorPickerElement = createColorPicker("#fefae0")  //設定顏色選擇器的預設值
  colorPickerElement.position(600,80)
}
var randomValue = 0
var stop = true
function goCrazy(){
  if(stop){
    randomValue=0
    btnElement.html("瘋狂");
    stop = false
  }
   else
   {
     randomValue=3
     btnElement.html("停止");
     stop = true
   }
 }
function draw() {
  background("#e9edc9");
  txts = inputElement.value()
  //顯示的文字
  fill(colorPickerElement.value())
  txt_width = sliderElement.value()
  textSize(txt_width)
  // 文字的寬度+10為間距
  textLength = textWidth(txts) +50  //計算文字長度
  for(y=140;y<height;y=y+txt_width+20){
   for(x=0;x<width;x=x+textLength){
    text(txts,x+random(-randomValue,randomValue),y+random(-randomValue,randomValue))
   }
}
}
