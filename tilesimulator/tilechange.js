var imgstore = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var tileexist = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var backmemory = ['', '', ''];
// 이하 타일 선택하는 부분
var xPosition = 0;
var yPosition = 0;
clickscreen = document.querySelector('#canvas');
clickscreen.addEventListener("click", ifClickPosition, false);
function ifClickPosition(e) {
    xPosition = e.offsetX;
    yPosition = e.offsetY;
	var xymatrix = xytomat(xPosition, yPosition);
	// x,y 좌표 획득해서 사각형 내 위치 확인
	if (xymatrix[0] < 0 || xymatrix[0] > 15) {
	} else if (xymatrix[1] < 0 || xymatrix[1] > 15) {
	} else {
		// x,y 좌표가 사각형 바깥일 경우 함수 탈출
		const tilech = document.querySelector('input[name="tile"]:checked').value;
		// 클릭 당시 타일 종류 확인
		backmemory.shift();
		backmemory.push([xymatrix[0], xymatrix[1], tileexist[xymatrix[0]][xymatrix[1]]]);
		// 뒤로가기를 위한 데이터 저장
		situatetile(xymatrix[0], xymatrix[1], tilech);
	}
}
// 좌표에 타일 부여
function xytomat(xPosition, yPosition) {
	const xPosition2 = (xPosition - 511.5) / 2;
	const yPosition2 = -(yPosition - 255.5);
	const xPosition3 = Math.sqrt(2) * xPosition2 / 2 + Math.sqrt(2) * yPosition2 / 2;
	const yPosition3 = -Math.sqrt(2) * xPosition2 / 2 + Math.sqrt(2) * yPosition2 / 2;
	const xPosition4 = Math.ceil(xPosition3 / (16 * Math.sqrt(2))) + 7;
	const yPosition4 = -Math.ceil(yPosition3 / (16 * Math.sqrt(2))) + 8;
	return [xPosition4,yPosition4];
}
// x,y 좌표를 사각형 내 위치로 변환하는 함수
function situatetile(coorX, coorY, tilecolor) {
	if (tileexist[coorX][coorY]) {
		imgstore[coorX][coorY].parentNode.removeChild(imgstore[coorX][coorY]);
		countminus(tileexist[coorX][coorY]);
		countminus(0);
	}
	// 기존 타일 제거
	if (tilecolor == 0) {
		tileexist[coorX][coorY] = tilecolor;
	} else if (tilecolor == 9) {
		tileexist[coorX][coorY] = 0;
	} else {
		imgstore[coorX][coorY] = document.createElement('img');
		if (tilecolor == 1) {
			imgstore[coorX][coorY].src = './tilesimulator/IB000132_01.png';
		} else if (tilecolor == 2) {
			imgstore[coorX][coorY].src = './tilesimulator/IB000133_01.png';
		} else if (tilecolor == 3) {
			imgstore[coorX][coorY].src = './tilesimulator/IB000134_01.png';
		} else if (tilecolor == 4) {
			imgstore[coorX][coorY].src = './tilesimulator/IB000135_01.png';
		} else if (tilecolor == 5) {
			imgstore[coorX][coorY].src = './tilesimulator/IB000136_01.png';
		} else if (tilecolor == 6) {
			imgstore[coorX][coorY].src = './tilesimulator/IB000137_01.png';
		} else if (tilecolor == 7) {
			imgstore[coorX][coorY].src = './tilesimulator/IB000138_01.png';
		} else if (tilecolor == 8) {
			imgstore[coorX][coorY].src = './tilesimulator/IB000139_01.png';
		}
		tileexist[coorX][coorY] = tilecolor;
		imgstore[coorX][coorY].style.position = 'absolute';
		imgstore[coorX][coorY].style.left = 32 * coorX + 32 * coorY + 8 + 'px';
		imgstore[coorX][coorY].style.top = -16 * coorX + 16 * coorY + 248 + 'px';
		imgstore[coorX][coorY].style.zIndex = 4;
		document.body.appendChild(imgstore[coorX][coorY]);
		countplus(tileexist[coorX][coorY]);
		countplus(0);
	}
}
// 지정된 타일을 주어진 자리에 위치시키는 함수

function countplus(tilenum) {
	if (tilenum == 1) {
		document.getElementById("count1").value++;
	} else if (tilenum == 2) {
		document.getElementById("count2").value++;
	} else if (tilenum == 3) {
		document.getElementById("count3").value++;
	} else if (tilenum == 4) {
		document.getElementById("count4").value++;
	} else if (tilenum == 5) {
		document.getElementById("count5").value++;
	} else if (tilenum == 6) {
		document.getElementById("count6").value++;
	} else if (tilenum == 7) {
		document.getElementById("count7").value++;
	} else if (tilenum == 8) {
		document.getElementById("count8").value++;
	} else if (tilenum == 0) {
		document.getElementById("counttotal").value++;
	}
}
function countminus(tilenum) {
	if (tilenum == 1) {
		document.getElementById("count1").value--;
	} else if (tilenum == 2) {
		document.getElementById("count2").value--;
	} else if (tilenum == 3) {
		document.getElementById("count3").value--;
	} else if (tilenum == 4) {
		document.getElementById("count4").value--;
	} else if (tilenum == 5) {
		document.getElementById("count5").value--;
	} else if (tilenum == 6) {
		document.getElementById("count6").value--;
	} else if (tilenum == 7) {
		document.getElementById("count7").value--;
	} else if (tilenum == 8) {
		document.getElementById("count8").value--;
	} else if (tilenum == 0) {
		document.getElementById("counttotal").value--;
	}
}
// 타일 제거나 변경시 타일 수를 증가 및 감소시키는 함수

function backtile() {
	if (backmemory[2]) {
		situatetile(backmemory[2][0], backmemory[2][1], backmemory[2][2]);
		backmemory.pop();
		backmemory.unshift('');
	}
}
// 뒤로 버튼을 누르면 타일 구성을 돌리는 함수

function resettile() {
	for (irow = 0; irow < 16; irow++) {
		for (icolumn = 0; icolumn < 16; icolumn++) {
			if (tileexist[irow][icolumn]) {
				imgstore[irow][icolumn].parentNode.removeChild(imgstore[irow][icolumn]);
				countminus(tileexist[irow][icolumn]);
				countminus(0);
				tileexist[irow][icolumn] = 0;
			}
		}
	}
	backmemory = ['', '', ''];
}
// 리셋 버튼을 누르면 타일 구성을 리셋시키는 함수

function showname(filedata) {
	document.getElementById("loadname").value = filedata[0].name;
}
// 타일 배열 선택 시 이름을 보여주는 함수

function loaddata(filedata) {
    var reader = new FileReader();
    reader.onload = function () {
        var rawdata = reader.result;
		resettile();
		datatomat(rawdata);	
    };
    reader.readAsText(filedata[0], /* optional */ "euc-kr");
}
// 타일 배열을 불러오는 함수

function datatomat(datastring) {
	for (idata = 0; idata < 512; idata = idata + 2) {
		const datacolor = Number(datastring[2 * idata]);
		if (Number.isInteger(datacolor)) {
			const datarow = parseInt(idata / 32);
			const datacol = (idata / 2) % 16;
			situatetile(datarow, datacol, datacolor);
		}
	}
}
// 불러온 타일 배열을 행렬로 변환하는 함수

function savedata() {
	download(tileexist, 'TileSimulator', 'txt')
}
// 타일 배열을 저장하는 함수

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
// 데이터를 저장하는 함수 기본