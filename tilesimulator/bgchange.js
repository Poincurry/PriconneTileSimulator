let bg1 = ['','']
bg1[0] = document.createElement('img');
bg1[1] = document.createElement('img');
bg1[0].src = './tilesimulator/IB000050_01.png';
bg1[1].src = './tilesimulator/IB000050_01_inv.png';

let bg2 = ['','']
bg2[0] = document.createElement('img');
bg2[1] = document.createElement('img');
bg2[0].src = './tilesimulator/IB000062_01.png';
bg2[1].src = './tilesimulator/IB000062_01_inv.png';

let bg3 = ['','']
bg3[0] = document.createElement('img');
bg3[1] = document.createElement('img');
bg3[0].src = './tilesimulator/IB000076_01.png';
bg3[1].src = './tilesimulator/IB000076_01_inv.png';

let bgexist = [false, false, false]

function floorsetting(floorch) {
if (floorch == 'floorch1') {
var ibg;
for (ibg = 0; ibg < 2; ibg++) {
bg1[ibg].style.width = '524.288px';
bg1[ibg].style.height = '524.288px';
bg1[ibg].style.position = 'absolute';
bg1[ibg].style.top = '8px';
bg1[ibg].style.zIndex = 3;
}
bg1[0].style.left = '-4.288px';
bg1[1].style.left = '520px';
document.body.appendChild(bg1[0]);
document.body.appendChild(bg1[1]);
bgexist[0] = true;
} else if (floorch == 'floorch2') {
var ibg;
for (ibg = 0; ibg < 2; ibg++) {
bg2[ibg].style.width = '524.288px';
bg2[ibg].style.height = '524.288px';
bg2[ibg].style.position = 'absolute';
bg2[ibg].style.top = '8px';
bg2[ibg].style.zIndex = 3;
}
bg2[0].style.left = '-4.288px';
bg2[1].style.left = '520px';
document.body.appendChild(bg2[0]);
document.body.appendChild(bg2[1]);
bgexist[1] = true;
} else if (floorch == 'floorch3') {
var ibg;
for (ibg = 0; ibg < 2; ibg++) {
bg3[ibg].style.width = '524.288px';
bg3[ibg].style.height = '524.288px';
bg3[ibg].style.position = 'absolute';
bg3[ibg].style.top = '8px';
bg3[ibg].style.zIndex = 3;
}
bg3[0].style.left = '-4.288px';
bg3[1].style.left = '520px';
document.body.appendChild(bg3[0]);
document.body.appendChild(bg3[1]);
bgexist[2] = true;
} else {
if (bgexist[0]) {
bg1[0].parentNode.removeChild(bg1[0]);
bg1[1].parentNode.removeChild(bg1[1]);
bgexist[0] = false;
}
if (bgexist[1]) {
bg2[0].parentNode.removeChild(bg2[0]);
bg2[1].parentNode.removeChild(bg2[1]);
bgexist[1] = false;
}
if (bgexist[2]) {
bg3[0].parentNode.removeChild(bg3[0]);
bg3[1].parentNode.removeChild(bg3[1]);
bgexist[2] = false;
}
}
}