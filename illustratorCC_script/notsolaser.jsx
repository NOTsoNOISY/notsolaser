/*------------------
  /)_/) NOTsoNOISY
 ( x_x) GUILLAUME
 (/   ) REYMOND
 www.notsonoisy.com
 +41(0)78.913.11.69
---------------------
Illustrator CC script v1.1
for drawing text with the "Notsolaser"
original monospaced mono-line font for laser drawing
This script was adapted from the "MonolineText.jsx" 
by "Jongware" http://www.jongware.com

The font draw (and coordonates) were created by NOTsoNOISY GUILLAUME REYMOND
You can also find the "Notsolaser.otf" font to use in your software for your print, app or website
http://www.notsonoisy.com
The font file are FL (SIL Open Font License): http://scripts.sil.org/OFL

(CC BY-NC-SA) by NOTsoNOISY Guillaume Reymond
Creative Commons License: https://creativecommons.org/licenses/by-nc-sa/4.0/
-------------------*/

var simplex = Array (
Array(0,17,// espace 
	Array(  ) ),
Array(5,17,// !
	Array(5,20,5,7,-1,-1,5,2,5,0) ),
Array(5,17,// "
	Array(2,20,2,14,-1,-1,8,20,8,14) ),
Array(11,17,// #
	Array(4,20,0,0,-1,-1,10,20,6,0,-1,-1,0,12,10,12,-1,-1,0,6,10,6) ),
Array(27,17,// $
	Array(10,16,9,18,8,19,6,20,4,20,2,19,1,18,0,16,0,14,1,12,2,11,4,10,6,10,8,9,9,8,10,6,10,4,9,2,8,1,6,0,4,0,2,1,1,2,0,4,-1,-1,5,23,5,-3) ),
Array(22,17,// %
	Array(4,19,3,20,1,20,0,19,0,17,1,16,3,16,4,17,4,19,-1,-1,10,18,0,2,-1,-1,10,3,9,4,7,4,6,3,6,1,7,0,9,0,10,1,10,3) ),
Array(15,17,// &
	Array(10,7,7,2,5,0,3,0,1,1,0,3,0,10,1,12,5,15,6,17,5,19,3,20,1,19,0,17,10,0) ),
Array(2,17,// '
	Array(5,20,5,14) ),
Array(10,17,// ( 
	Array(10,23,8,23,6,22,5,21,4,19,4,1,5,-1,6,-2,8,-3,10,-3) ),
Array(10,17,// )
	Array(0,23,2,23,4,22,5,21,6,19,6,1,5,-1,4,-2,2,-3,0,-3) ),
Array(8,17,// *
	Array(5,20,5,12,-1,-1,8,18,2,14,-1,-1,2,18,8,14) ),
Array(5,17,// +
	Array(5,14,5,4,-1,-1,0,9,10,9) ),
Array(3,17,// ,
	Array(5,2,5,0,3,-4) ),
Array(2,17,// -
	Array(0,9,10,9) ),
Array(2,17,// .
	Array(5,2,5,0) ),
Array(2,17,// /
	Array(10,23,0,-3) ),
Array(20,17,// 0 
	Array(10,16,9,18,8,19,6,20,4,20,2,19,1,18,0,16,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,10,16,-1,-1,10,16,0,4) ),
Array(6,17,// 1
	Array(0,13,5,20,5,0,-1,-1,0,0,10,0) ),
Array(13,17,// 2
	Array(0,16,1,18,2,19,4,20,6,20,8,19,9,18,10,16,10,14,9,12,0,2,0,0,10,0) ),
Array(26,17,// 3
	Array(0,16,1,18,2,19,4,20,6,20,8,19,9,18,10,16,10,14,9,12,8,11,6,10,4,10,-1,-1,6,10,8,9,9,8,10,6,10,4,9,2,8,1,6,0,4,0,2,1,1,2,0,4) ),
Array(6,17,// 4
	Array(10,6,0,6,0,8,5,20,7,20,7,0) ),
Array(17,17,// 5
	Array(10,20,0,20,0,10,1,11,3,12,6,12,8,11,9,10,10,8,10,4,9,2,8,1,6,0,4,0,2,1,1,2,0,4) ),
Array(24,17,// 6
	Array(10,16,9,18,8,19,6,20,4,20,2,19,1,18,0,16,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,10,8,9,10,8,11,6,12,4,12,2,11,1,10,0,8) ),
Array(7,17,// 7
	Array(0,20,10,20,10,18,2,0,-1,-1,1,10,10,10) ),
Array(32,17,// 8
	Array(6,10,8,11,9,12,10,14,10,16,9,18,8,19,6,20,4,20,2,19,1,18,0,16,0,14,1,12,2,11,4,10,6,10,8,9,9,8,10,6,10,4,9,2,8,1,6,0,4,0,2,1,1,2,0,4,0,6,1,8,2,9,4,10) ),
Array(24,17,// 9
	Array(10,12,9,10,8,9,6,8,4,8,2,9,1,10,0,12,0,16,1,18,2,19,4,20,6,20,8,19,9,18,10,16,10,4,9,2,8,1,6,0,4,0,2,1,1,2,0,4) ),
Array(5,17,// :
	Array(5,12,5,10,-1,-1,5,2,5,0) ),
Array(6,17,// ;
	Array(5,12,5,10,-1,-1,5,2,5,0,3,-4) ),
Array(3,17,// <
	Array(10,18,0,9,10,0) ),
Array(5,17,// =
	Array(0,12,10,12,-1,-1,0,6,10,6) ),
Array(3,17,// >
	Array(0,18,10,9,0,0) ),
Array(17,17,// ?
	Array(0,16,1,18,2,19,4,20,6,20,8,19,9,18,10,16,10,14,9,12,8,11,6,10,5,10,5,7,-1,-1,5,2,5,0) ),
Array(23,17,// arobase
	Array(10,12,8,14,6,14,4,12,4,7,6,5,8,5,10,7,-1,-1,10,5,10,16,9,18,8,19,6,20,4,20,2,19,1,18,0,16,0,4,1,2,2,1,4,0,10,0) ),
Array(7,17,// A 
	Array(0,0,4,20,6,20,10,0,-1,-1,1,5,9,5) ),
Array(21,17,// B 
	Array(0,0,0,20,6,20,8,19,9,18,10,16,10,14,9,12,8,11,6,10,0,10,-1,-1,6,10,8,9,9,8,10,6,10,4,9,2,8,1,6,0,0,0) ),
Array(16,17,// C 
	Array(10,16,9,18,8,19,6,20,4,20,2,19,1,18,0,16,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4) ),
Array(11,17,// D 
	Array(0,0,0,20,6,20,8,19,9,18,10,16,10,4,9,2,8,1,6,0,0,0) ),
Array(7,17,// E 
	Array(10,20,0,20,0,0,10,0,-1,-1,0,10,9,10) ),
Array(6,17,// F 
	Array(10,20,0,20,0,0,-1,-1,0,10,9,10) ),
Array(18,17,// G 
	Array(10,16,9,18,8,19,6,20,4,20,2,19,1,18,0,16,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,10,10,6,10) ),
Array(8,17,// H 
	Array(0,20,0,0,-1,-1,0,10,10,10,-1,-1,10,20,10,0) ),
Array(8,17,// I 
	Array(0,20,10,20,-1,-1,5,20,5,0,-1,-1,0,0,10,0) ),
Array(11,17,// J 
	Array(1,20,10,20,10,4,9,2,8,1,6,0,4,0,2,1,1,2,0,4,0,6) ),
Array(6,17,// K 
	Array(0,20,0,0,10,20,-1,-1,5,10,10,0) ),
Array(3,17,// L 
	Array(0,20,0,0,10,0) ),
Array(7,17,// M 
	Array(0,0,0,20,2,20,5,8,8,20,10,20,10,0) ),
Array(6,17,// N 
	Array(0,0,0,20,2,20,8,0,10,0,10,20) ),
Array(17,17,// O 
	Array(10,16,9,18,8,19,6,20,4,20,2,19,1,18,0,16,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,10,16) ),
Array(11,17,// P 
	Array(0,0,0,20,6,20,8,19,9,18,10,16,10,14,9,12,8,11,6,10,0,10) ),
Array(20,17,// Q 
	Array(10,16,9,18,8,19,6,20,4,20,2,19,1,18,0,16,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,10,16,-1,-1,5,7,10,0) ),
Array(14,17,// R
	Array(0,0,0,20,6,20,8,19,9,18,10,16,10,14,9,12,8,11,6,10,0,10,-1,-1,6,10,10,0) ),
Array(24,17,// S
	Array(10,16,9,18,8,19,6,20,4,20,2,19,1,18,0,16,0,14,1,12,2,11,4,10,6,10,8,9,9,8,10,6,10,4,9,2,8,1,6,0,4,0,2,1,1,2,0,4) ),
Array(5,17,// T
	Array(0,20,10,20,-1,-1,5,20,5,0) ),
Array(10,17,// U
	Array(0,20,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,10,20) ),
Array(4,17,// V
	Array(0,20,4,0,6,0,10,20) ),
Array(7,17,// W
	Array(0,20,0,0,2,0,5,11,8,0,10,0,10,20) ),
Array(5,17,// 17
	Array(0,20,10,0,-1,-1,10,20,0,0) ),
Array(13,17,// Y
	Array(0,20,0,14,1,12,2,11,4,10,6,10,8,11,9,12,10,14,10,20,-1,-1,5,10,5,0) ),
Array(6,17,// Z
	Array(0,20,10,20,10,18,0,2,0,0,10,0) ),
Array(4,17,// [
	Array(10,23,4,23,4,-3,10,-3) ),
Array(2,17,// \
	Array(0,23,10,-3) ),
Array(4,17,// ]
	Array(0,23,6,23,6,-3,0,-3) ),
Array(3,17,// ^
	Array(0,14,5,20,10,14) ),
Array(2,17,// _
	Array(0,-5,10,-5) ),
Array(3,17,// `
	Array(4,20,4,18,6,14) ),
Array(23,17,// a
	Array(10,5,9,7,8,8,6,9,4,9,2,8,1,7,0,5,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,-1,-1,1,13,3,14,7,14,9,13,10,11,10,0) ),
Array(19,17,// b
	Array(0,20,0,0,-1,-1,0,10,1,12,2,13,4,14,6,14,8,13,9,12,10,10,10,4,9,2,8,1,6,0,4,0,2,1,1,2,0,4) ),
Array(14,17,// c
	Array(10,12,9,13,7,14,4,14,2,13,1,12,0,10,0,4,1,2,2,1,4,0,7,0,9,1,10,2) ),
Array(19,17,// d
	Array(10,10,9,12,8,13,6,14,4,14,2,13,1,12,0,10,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,-1,-1,10,20,10,0) ),
Array(17,17,// e
	Array(0,7,10,7,10,10,9,12,8,13,6,14,4,14,2,13,1,12,0,10,0,4,1,2,2,1,4,0,7,0,9,1,10,2) ),
Array(9,17,// f
	Array(10,19,8,20,6,20,4,19,3,17,3,0,-1,-1,0,14,7,14) ),
Array(25,17,// g
	Array(10,10,9,12,8,13,6,14,4,14,2,13,1,12,0,10,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,-1,-1,10,14,10,-2,9,-4,8,-5,6,-6,3,-6,1,-5,0,-4) ),
Array(12,17,// h
	Array(0,20,0,0,-1,-1,0,10,1,12,2,13,4,14,6,14,8,13,9,12,10,10,10,0) ),
Array(9,17,// i
	Array(5,21,5,19,-1,-1,0,14,5,14,5,0,-1,-1,0,0,10,0) ),
Array(13,17,// j
	Array(10,21,10,19,-1,-1,4,14,10,14,10,-2,9,-4,8,-5,6,-6,4,-6,2,-5,1,-4,0,-2) ),
Array(6,17,// k
	Array(0,20,0,0,10,14,-1,-1,5,7,10,0) ),
Array(6,17,// l
	Array(0,20,5,20,5,0,-1,-1,0,0,10,0) ),
Array(18,17,// m
	Array(0,14,0,0,-1,-1,0,11,1,13,2,14,3,14,4,13,5,11,5,0,-1,-1,5,11,6,13,7,14,8,14,9,13,10,11,10,0) ),
Array(12,17,// n
	Array(0,14,0,0,-1,-1,0,10,1,12,2,13,4,14,6,14,8,13,9,12,10,10,10,0) ),
Array(17,17,// o
	Array(10,10,9,12,8,13,6,14,4,14,2,13,1,12,0,10,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,10,10) ),
Array(19,17,// p
	Array(0,10,1,12,2,13,4,14,6,14,8,13,9,12,10,10,10,4,9,2,8,1,6,0,4,0,2,1,1,2,0,4,-1,-1,0,14,0,-6) ),
Array(19,17,// q
	Array(10,10,9,12,8,13,6,14,4,14,2,13,1,12,0,10,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,-1,-1,10,14,10,-6) ),
Array(10,17,// r
	Array(0,14,0,0,-1,-1,0,10,1,12,2,13,4,14,7,14,9,13,10,12) ),
Array(18,17,// s 
	Array(10,12,9,13,7,14,3,14,1,13,0,11,0,10,1,8,3,7,7,7,9,6,10,4,10,3,9,1,7,0,3,0,1,1,0,2) ),
Array(9,17,// t 
	Array(3,20,3,3,4,1,6,0,8,0,10,1,-1,-1,0,14,10,14) ),
Array(12,17,// u
	Array(0,14,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,-1,-1,10,14,10,0) ),
Array(4,17,// v
	Array(0,14,4,0,6,0,10,14) ),
Array(7,17,// w
	Array(0,14,0,0,2,0,5,10,8,0,10,0,10,14) ),
Array(5,17,// 17
	Array(0,14,10,0,-1,-1,10,14,0,0) ),
Array(18,17,// y
	Array(0,14,0,4,1,2,2,1,4,0,6,0,8,1,9,2,10,4,-1,-1,10,14,10,-2,9,-4,8,-5,6,-6,3,-6,1,-5,0,-4) ),
Array(6,17,// z
	Array(0,14,10,14,10,12,0,2,0,0,10,0) ),
Array(19,17,// {
	Array(10,23,8,22,7,21,6,19,6,17,7,15,7,14,6,12,5,11,3,10,5,9,6,8,7,6,7,5,6,3,6,1,7,-1,8,-2,10,-3) ),
Array(2,17,// |
	Array(5,23,5,-3) ),
Array(19,17,// }
	Array(0,23,2,22,3,21,4,19,4,17,3,15,3,14,4,12,5,11,7,10,5,9,4,8,3,6,3,5,4,3,4,1,3,-1,2,-2,0,-3) ),
Array(6,17,// ~
	Array(0,8,2,10,3,10,7,8,8,8,10,10) )
);




myDlg = new Window('dialog', 'Notsolaser');
myDlg.orientation = 'column';
myDlg.alignment = 'right';
myDlg.add('statictext', undefined, "Notsolaser Font Script");

//--- for Trotec color settings ---
var newRGBColor = new RGBColor();
newRGBColor.red = 255;
newRGBColor.green = 0;
newRGBColor.blue = 0; app.activeDocument.defaultStrokeColor = newRGBColor;
app.activeDocument.defaultStrokeWidth = 4.7;
app.activeDocument.defaultStrokeCap = StrokeCap.ROUNDENDCAP;
app.activeDocument.defaultStrokeJoin = StrokeJoin.ROUNDENDJOIN;
//---

with (myDlg.add('group'))
{
	orientation = 'row';
	add('statictext', undefined, "Font size (pts)");
	Ptsz = add('edittext', [0,0, 200,20], "40", {helpTip:"Enter the size (in points) here"});
}
with (myDlg.add('group'))
{
	orientation = 'row';
	TextField = add('edittext', [0,0, 300,120], " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~", {multiline:true, helpTip:"Enter the text here"} );
}
with (myDlg.add('group'))
{
	orientation = 'row';
	add('button', undefined, "OK", {helpTip:"Click to insert text into document"});
	add('button', undefined, "Cancel", {helpTip:"Click to close this dialog"});
}

replacePrevious = false;
position = Array (app.activeDocument.activeView.centerPoint[0], app.activeDocument.activeView.centerPoint[1]);

if (app.selection.length == 1 && app.selection[0].note != undefined)
{
	if (app.selection[0].note.substr(0,8) == "[JW]\tSz\t" && app.selection[0].note.length > 8)
	{
		split = app.selection[0].note.split('\t');
		if (split.length == 5)
		{
			Ptsz.text = split[2];
			TextField.text = split[4];
			replacePrevious = true;
			position = Array(app.selection[0].geometricBounds[0], app.selection[0].geometricBounds[1]);
		}
	}
}

if (myDlg.show() == 1)
{
	ptsize = Number (Ptsz.text);
	text = TextField.text;
	if (text != null && text != '')
	{
		if (replacePrevious && app.selection.length == 1)
			app.selection[0].remove();
		drawString (text, ptsize, position);
	}
} else
	myDlg.hide();

	
function drawString (text, pointSize, position)
{
	var xpos = position[0];
	var ypos = position[1]-21*pointSize/29;
	var chCount, code, nvertex, vtx, rx,ry;
	var doc = app.activeDocument;
	var group = doc.groupItems.add();
	var firstCharOffset = undefined;

	chCount = 0;
	while (chCount++ < text.length)
	{
		code = text.charCodeAt(chCount-1);
		if (code == 10)
		{
			xpos = position[0];
			ypos -= 1.1*pointSize;//ypos -= 1.25*pointSize;
			continue;
		}
		if (code < 32)
			continue;
		if (code > 126)
			continue;
		code -= 32;
		nvertex = simplex[code][0];
		
		vtx = 0;
		myPath = Array();
		while (vtx < simplex[code][2].length)
		{
			rx = simplex[code][2][vtx]; vtx++;
			ry = simplex[code][2][vtx]; vtx++;
			if (rx == -1 && ry == -1)
			{
				if (myPath.length > 1)
				{
					p = group.pathItems.add();
					p.setEntirePath (myPath);
					p.filled = false;
					p.stroked = true;
					//p.strokeWidth = 2;
				}
				myPath = Array();
			} else
			{
				if (firstCharOffset == undefined)
					firstCharOffset = rx*pointSize/29;
				myPath.push (Array(xpos-firstCharOffset+rx*pointSize/29, ypos+ry*pointSize/29));
			}
		}
		if (myPath.length > 1)
		{
			p = group.pathItems.add();
			p.setEntirePath (myPath);
			p.filled = false;
			p.stroked = true;
			//p.strokeWidth = 2;
		}

		xpos += simplex[code][1]*pointSize/29;
	}
	group.note = "[JW]\tSz\t"+String(pointSize)+"\tTXT\t"+text;
	doc.selection = group;
}