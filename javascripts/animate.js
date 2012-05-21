
  //  Script:       Animated Image
  //  Version:      1.0
  //  Last Updated: June 12th 1998
  //  Author:       Scott Brady
  //  Org:          HotSource HTML Help
  //  Email:        webmaster@sbrady.com
  //  Website:      http://www.sbrady.com/hotsource/

if (document.images) {     // Preloaded images
    demo1 = new Image();
    demo1.src = "Images/home/purpleporn3.jpg";
    
    demo2 = new Image();
    demo2.src = "Images/home/purple2.jpg";
    
    demo3 = new Image();
    demo3.src = "Images/home/purple1.jpg";
    
    demo4 = new Image();
    demo4.src = "Images/home/purple4.jpg";
}

function timeimgs(numb) {  // Reusable timer
    thetimer = setTimeout("imgturn('" +numb+ "')", 5000);
}

function imgturn(numb) {   // Reusable image turner
    if (document.images) {

        if (numb == "4") {         // This will loop the image
            document["demo"].src = eval("demo4.src");
            timeimgs('1');
        }

        else {
            document["demo"].src = eval("demo" + numb + ".src");

            timeimgs(numb = ++numb);
        }
    }
}

