
if (document.images) {     // Preloaded images
    demo1 = new Image();
    demo1.src = "Images/home/purpleporn3.jpg";
    
    demo2 = new Image();
    demo2.src = "Images/home/purple4.jpg";
    
    demo3 = new Image();
    demo3.src = "Images/home/purple1.jpg";
    
   
}

function timeimgs(numb) {  // Reusable timer
    thetimer = setTimeout("imgturn('" +numb+ "')", 5000);
}

function imgturn(numb) {   // Reusable image turner
    if (document.images) {

        if (numb == "3") {         // This will loop the image
            document["demo"].src = eval("demo3.src");
            timeimgs('1');
        }

        else {
            document["demo"].src = eval("demo" + numb + ".src");

            timeimgs(numb = ++numb);
        }
    }
}

