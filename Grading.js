function grading(){
  
    var Eng=parseInt(prompt("Enter your english score"));
    var Kis=parseInt(prompt("Enter your Kis score"));
    var Math=parseInt(prompt("Enter your math score"));
    var Phyc=parseInt(prompt("Enter your phyc score"));
    var Histo=parseInt(prompt("Enter your history score"));
    var Total=(Eng + Kis + Math + Phyc + Histo);
    var avg=(Total)/5;
    var grade;
    if(avg>=70 && avg<=100){grade="A";}
    else if(avg>=60 && avg<70){grade="B";}
    else if(avg>=50 && avg<60){grade="C";}
    else if(avg>=40 && avg<50){grade="D";}
    else if(avg<40){grade="E";}
    else{grade="Invalid";}
  console.log("You have scored a total marks of", Total, "and a mean grade of", grade , "thank you!");
  
  
  }
  console.log(grading());
  