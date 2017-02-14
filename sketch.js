function setup() {
  createCanvas(600,600); 
}

function draw() {
//Layer 1 600x600
//this layer fills in any gaps of color
fill(94,122,111,50);
rect(0,0,600,600);
  
fill(204,204,153,120);
//Tranparency put in with Alpha 120
noStroke();
beginShape();
vertex(0,130);
vertex(36,28);
vertex(36,118);
vertex(270,0);
vertex(324,109);
vertex(405,100);
vertex(378,145);
vertex(351,172);
vertex(135,183);
endShape(CLOSE);


//light tan triangles
triangle(293,257, 351,351, 234,351);
triangle(0,479, 48.333,600, 0,600);
triangle(69.5,600, 145,504, 188.5,600);
ellipse(481.5,621,250,108);
quad(171,566, 188.5,601, 379,601, 378,566);
    
//tan shapes
fill(153,153,102);
triangle(0,18, 18,81, 0,125);
//triangle(378,145, 351,172, 378,145);
triangle(0,132, 135,183, 0,180 );
quad(36,118, 36,90, 170,4, 180,45);
beginShape();
vertex(28,546);
vertex(118,447);
vertex(145,504);
vertex(69.5,600);
vertex(46,600);
endShape(CLOSE);
    
//dark tan shapes
fill(138,147,128);
rect(468,135,18,36);
rect(441,387,18,108);    
   
beginShape();
vertex(351,172);
vertex(360,207);
vertex(414,207);
vertex(414,99);
vertex(270,0);
vertex(324,109);
vertex(405,100);
vertex(468,45);
vertex( 270,-18);
vertex(270,0);
endShape(CLOSE);
    
//green ones
fill(120,153,119);
rect(351,387,45,99);
triangle(0,256.5, 18,324, 0,324);
triangle(326,0, 498,0,468,45);
beginShape();
vertex(396,341);
vertex(307,217);
vertex(293,257);
vertex(351,351);
vertex(234,351);
vertex(293,257);
vertex(270,234);
vertex(165,389);
vertex(351,387);
vertex(369,342);
endShape(CLOSE);
        
beginShape();
vertex();
vertex(360,206);
vertex(362,258);
vertex(464,256);
vertex(465,192);
vertex(414.5,190.5);
vertex(414,207);
endShape(CLOSE);

beginShape();
vertex(600,59);
vertex(600,77);
vertex(549,107);
vertex(531,53);
vertex(486,62);
vertex(468,44);
vertex(476,33.5);
vertex(554,35);
vertex(559,57);
endShape(CLOSE);
    
beginShape();
vertex(99,414);
vertex(118,447);
vertex(28,546);
vertex(9,504);
endShape(CLOSE);
    
beginShape();
vertex(414,369);
vertex(441,387);
vertex(432,387);
vertex(396,387);
endShape(CLOSE);
    
beginShape();
vertex(270,486);
vertex(315,486);
vertex(315,567);
vertex(261,567);
endShape(CLOSE);
    
beginShape();
vertex(72,360);
vertex(81,387);
vertex(0,468);
vertex(0,423);
endShape(CLOSE);
        

//black green shapes
fill(51,51,51);
beginShape();
vertex(0,180);
vertex(135,183);
vertex(238.75,178);
vertex(67,344);
vertex(59,316.5);
vertex(0,346.5);
vertex(0,324);
vertex(18.5,321);
vertex(1.5,258);
vertex(0,180);
vertex(0,180);
endShape(CLOSE);
    
beginShape();
vertex(463,184);
vertex(494,184);
vertex(600,310.5);
vertex(598.5,346);
vertex(587.5,358);
vertex(511.5,264);
vertex(505.5,449.5);
vertex(459,449);
endShape();
    
beginShape();
vertex(544,0);
vertex(600,0);
vertex(552,22.);
endShape();
    
triangle(304,214, 357,214, 364,288);
triangle(195,469,247.062,481, 239,567);
    
beginShape();
vertex(292.5,486);
vertex(253.5,406.543);
vertex(194.5,468.878); 
vertex(149,366 );
vertex(189,387.285);
vertex(298,387.792);
vertex(303.5,486.5);
endShape();
    
beginShape();
vertex(370.5,302);
vertex(463.5,304);
vertex(461,388);
vertex(417.5,326.5);
vertex(371.5,370);
vertex(371,343);
vertex(393.5,342.5);
endShape();
  
          

//circle tranparency stripe actually ellipse
fill(166,124,82,95);
ellipse(222.75,110.512,132.394,113.549);
//stripe
fill(120,153,119,105);
beginShape();
vertex(210.5,51.5);
vertex(223,52);
vertex(238,56.5);
vertex(239.5,163);
vertex(223,165);
vertex(208.5,161);
vertex(210.5,51.5); 
endShape(CLOSE);

    
//green_one_tranparency
fill(120,153,119,50);  
beginShape();
vertex(82,330);
vertex(189,387);
vertex(322,173);
vertex(238.75,178);
vertex(82,330);
endShape();
    
//dark green shapes
fill(75,81,75,105);
beginShape();
vertex(441,387);
vertex(396,387);
vertex(396,486);
vertex(373,486);
vertex(379,600);
vertex(418,600);
vertex(428,588);
vertex(441,578);
vertex(455,571);
vertex(468,568);
vertex(482,567);
vertex(497,567);
vertex(505.5,449.5);
vertex(459,449);
vertex(459,495);
vertex(441,495);
endShape();
    
beginShape();
vertex(599,601);
vertex(543.7,600);
vertex(529.5,583.5);
vertex(514.5,573.9);
vertex(503.7,570);
vertex(497,567);
vertex(511.5,264);
vertex(587.5,358);
vertex(598.5,346);
endShape(CLOSE);
    
beginShape();
vertex(193.2,468);
vertex(253.6,406);
vertex(292.5,486);
vertex(270,486);
vertex(261,567);
vertex(239,567);
vertex(245.1,480);
endShape(CLOSE);
    
beginShape();
vertex(497,191);
vertex(414,191);
vertex(412.5,93.5);
vertex(468,44);
vertex(486,62);
vertex(531,53);
vertex(549,107);
vertex(600,77);
vertex(600,311);
endShape(CLOSE);

    
}

	