var imgstore = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var tileexist = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

// 이하 타일 선택하는 부분
var xPosition = 0;
var yPosition = 0;
clickscreen = document.querySelector('#canvas');
clickscreen.addEventListener("click", ifClickPosition, false);
function ifClickPosition(e) {
    xPosition = e.clientX;
    yPosition = e.clientY;
	var xymatrix = xytomat(xPosition, yPosition);
	console.log(xymatrix[0]);
	console.log(xymatrix[1]);
	// x,y 좌표 획득해서 사각형 내 위치 확인
	if (xymatrix[0] < 0 || xymatrix[0] > 15) {
	} else if (xymatrix[1] < 0 || xymatrix[1] > 15) {
	} else {
		// x,y 좌표가 사각형 바깥일 경우 함수 탈출
		const tilech = document.querySelector('input[name="tile"]:checked').value;
		console.log(tilech);
		// 클릭 당시 타일 종류 확인
		if (tileexist[xymatrix[0]][xymatrix[1]]) {
		imgstore[xymatrix[0]][xymatrix[1]].parentNode.removeChild(imgstore[xymatrix[0]][xymatrix[1]]);
		countminus(tileexist[xymatrix[0]][xymatrix[1]]);
		countminus(0);
		}
		// 기존 타일 제거
		if (tilech == 'tilech0') {
			tileexist[xymatrix[0]][xymatrix[1]] = 0;
		} else {
			imgstore[xymatrix[0]][xymatrix[1]] = document.createElement('img');
			if (tilech == 'tilech1') {
				imgstore[xymatrix[0]][xymatrix[1]].src = './tilesimulator/IB000132_01.png';
				tileexist[xymatrix[0]][xymatrix[1]] = 1;
			} else if (tilech == 'tilech2') {
				imgstore[xymatrix[0]][xymatrix[1]].src = './tilesimulator/IB000133_01.png';
				tileexist[xymatrix[0]][xymatrix[1]] = 2;
			} else if (tilech == 'tilech3') {
				imgstore[xymatrix[0]][xymatrix[1]].src = './tilesimulator/IB000134_01.png';
				tileexist[xymatrix[0]][xymatrix[1]] = 3;
			} else if (tilech == 'tilech4') {
				imgstore[xymatrix[0]][xymatrix[1]].src = './tilesimulator/IB000135_01.png';
				tileexist[xymatrix[0]][xymatrix[1]] = 4;
			} else if (tilech == 'tilech5') {
				imgstore[xymatrix[0]][xymatrix[1]].src = './tilesimulator/IB000136_01.png';
				tileexist[xymatrix[0]][xymatrix[1]] = 5;
			} else if (tilech == 'tilech6') {
				imgstore[xymatrix[0]][xymatrix[1]].src = './tilesimulator/IB000137_01.png';
				tileexist[xymatrix[0]][xymatrix[1]] = 6;
			} else if (tilech == 'tilech7') {
				imgstore[xymatrix[0]][xymatrix[1]].src = './tilesimulator/IB000138_01.png';
				tileexist[xymatrix[0]][xymatrix[1]] = 7;
			} else if (tilech == 'tilech8') {
				imgstore[xymatrix[0]][xymatrix[1]].src = './tilesimulator/IB000139_01.png';
				tileexist[xymatrix[0]][xymatrix[1]] = 8;
			}
			imgstore[xymatrix[0]][xymatrix[1]].style.position = 'absolute';
			imgstore[xymatrix[0]][xymatrix[1]].style.left = 32 * xymatrix[0] + 32 * xymatrix[1] + 8 + 'px';
			imgstore[xymatrix[0]][xymatrix[1]].style.top = -16 * xymatrix[0] + 16 * xymatrix[1] + 248 + 'px';
			imgstore[xymatrix[0]][xymatrix[1]].style.zIndex = 4;
			document.body.appendChild(imgstore[xymatrix[0]][xymatrix[1]]);
			countplus(tileexist[xymatrix[0]][xymatrix[1]]);
			countplus(0);
		}
	}
}
// 좌표에 타일 부여
function xytomat(xPosition, yPosition) {
	const xPosition2 = (xPosition - 519.5) / 2;
	const yPosition2 = -(yPosition - 263.5);
	const xPosition3 = Math.sqrt(2) * xPosition2 / 2 + Math.sqrt(2) * yPosition2 / 2;
	const yPosition3 = -Math.sqrt(2) * xPosition2 / 2 + Math.sqrt(2) * yPosition2 / 2;
	const xPosition4 = Math.ceil(xPosition3 / (16 * Math.sqrt(2))) + 7;
	const yPosition4 = -Math.ceil(yPosition3 / (16 * Math.sqrt(2))) + 8;
	return [xPosition4,yPosition4];
}
// x,y 좌표를 사각형 내 위치로 변환하는 함수
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
}
// 리셋 버튼을 누르면 타일 구성을 리셋시키는 함수