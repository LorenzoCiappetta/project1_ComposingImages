// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite( bgImg, fgImg, fgOpac, fgPos )
{
    //alert(fgPos.x);
    var w = bgImg.width;
    var h = bgImg.height;
    
    var data = bgImg.data;
    
    for(var i = 0; i < w; i++){
        for(var j = 0; j < h; j++){
            for(var c = 0; c < 3; c++){
                //data[i * j * c] = 0 //fgImg.data[i, j, c];
            }
        }
    }
    
}
