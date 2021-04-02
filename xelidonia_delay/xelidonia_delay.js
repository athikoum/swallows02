let input;
let analyzer;
let playing = false;
let video;
let delay;
let fft;
let amp;
var fade;
var fadeAmount =0.01;
let img;
let pg;
function setup() {
  //background(0);
  createCanvas (windowWidth, windowHeight);
 
 img = loadImage('data/xe.png');
   video= createVideo('data/nn.mp4');
   video.position(0,100);
   video.size(1720,1080);
   video.hide();

   

  // video.loop();
  input = new p5.AudioIn();
  input.start();
  reverb = new p5.Reverb();
  delay = new p5.Delay();
 reverb.process(input, 6, 0.2);
  reverb.amp(0.7);

  delay.process(input, 0.25 ,0.8, 300);
  amp = new p5.Amplitude();
  //delay.amp(8);
  amp.setInput(input);
  

  
  
  //revb.amp(0);
  fft = new p5.FFT(0.0); 
  


}

function draw() {
  background(0);
 
   

//imageMode(CENTER);
 image(video,0,-150);
 image(img, mouseX,mouseY,1000,800); 
  
 
 

 let volume = input.getLevel();
 let threshold = 0.04;
 let col = map(volume,0,0.1,0,255);
  if (volume > threshold) {
    video.loop();
    
    tint(col);
   
    
}
if (volume< threshold){
  video.pause();
  tint(col);
  

}
pg=createGraphics();

let srt1 ='Wear Headphones. Lowering volume is recommended. If you want to see, you have to sing. Or, at least, read aloud, this story about swallows, hair, and snow.';
  text(srt1, windowWidth/2,50,500,500);
 textSize(16);
  fill(200);
  
  let srt2 = 'there once was a forest of hair, dwelling on a human body. The swallows living inside him flew away, as soon as it started to get cold.';
  text(srt2, windowWidth/2,200,500,500);
 textSize(20);
  fill(0);
  
  let srt3='Memory is covered in snow. Forests of hair, still appear though. In memory the bodies lie, reclaiming their flesh.';
text(srt3,mouseX,mouseY,500,500);
textSize(16);
  fill(200);
 

}
