
lib = require('./lib.js');
CODE = require('./CODE.js');
CSS = require('./CSS.js');

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function rint(upto){ return Math.floor(Math.random()*upto)}
function ra(a){return a[rint(a.length)];}



var NODE = ["adoptNode",
"createTextNode",
"importNode",
"createNodeIterator",
"removeNode",
"replaceNode",
"swapNode",
"cloneNode",
"hasChildNodes",
"isEqualNode",
"isSameNode"]


SCROLL = ["scrollbarDown",
"scrollbarHThumb",
"scrollbarLeft",
"scrollbarPageDown",
"scrollbarPageLeft",
"scrollbarPageRight",
"scrollbarPageUp",
"scrollbarRight",
"scrollbarUp",
"scrollbarVThumb",
"down",
"left",
"pageDown",
"pageLeft",
"pageRight",
"pageUp",
"right",
"up"]


var WINDOW = ["onload",
"addEventListener",
"dispatchEvent",
"removeEventListener",
"attachEvent",
"detachEvent",
"execScript",
"item",
"moveBy",
"moveTo",
"msWriteProfilerMark",
"navigate",
"resizeBy",
"resizeTo",
"showHelp",
"showModelessDialog",
"toStaticHTML",
"scroll",
"scrollBy",
"scrollTo",
"getComputedStyle",
"blur",
"focus",
"getSelection",
"postMessage",
"toString"]






function getRandomHtml(iters) {
				var s2 = new Date();
				function shouldStop() {
					if (new Date() - s2 > 1000 || html.length > 100000) {
						return true;
					}
				}
				var html = '';
				var stack = [];
				for (var i = 0; i < iters; i++) {
					if (shouldStop()) {
						break;
					}
					var n = 18;
					n += Math.floor(stack.length / 5);
					var s = stack.toString();
					if (s.indexOf('xmp') != -1) {
						n += 40;
					}
					if (s.indexOf('noframes') != -1) {
						n += 10;
					}
					if (s.indexOf('noscript') != -1) {
						n += 10;
					}
					if (s.indexOf('frameset') != -1) {
						n += 30;
					}
					var x;
					switch (x = getRandom(n)) {
						case 1:
							html += '<div>';
							stack.push('div');
							break;
						case 2:
							html += '<font family="Times" size="' + getRandom(7) + '" color="blue">';
							stack.push('font');
							break;
						case 3:
							html += '<select><!-- --><option>';
							stack.push('select');
							stack.push('option');
							break;
						case 4:
						//	html += '<iframe src="about:blank">';
						//	stack.push('iframe');
					//		html += '<img src="http://www.google.com/favicon.ico">';
							break;
						case 5:
							html += '<br>';
							stack.push('br');
							break;
						case 6:
							html += '<xmp>';
							stack.push('xmp');
							break;
						case 7:
							//html += '<frameset rows="*"><frame src="about:blank">';
							//stack.push('frame');
							//stack.push('frameset');
							html += '<nobr>';
							stack.push('nobr');
							break;
						case 8:
							//html += '<noframes>';
							//stack.push('noframes');
							html += '<wbr>';
							break;
						case 9:
							//html += '<noscript>';
							//stack.push('noscript');
							html += '<input>';
							break;
						case 10:
							html += '<div contentEditable="false">';
							stack.push('div');
							break;
						case 11:
							html += '<span contentEditable>';
							stack.push('span');
							break;
						case 12:
							//html += '<script id="' + Math.random() + '" type="javascript">void 0;<\/script>';
							break;
						case 13:
							html += '<style type="text/css"> * { color: blue }';
							stack.push('style');
							break;
						case 14:
							html += '<table><thead><tr><th colspan=2>hello!</th></tr></thead><tbody><tr><td rowspan=2>hmm</td><td>asdf</td></tr><tr><td>last cell';
							stack.push('table');
							stack.push('tbody');
							stack.push('tr');
							stack.push('td');
							break;
                        case 15:
                            html += '<style type="text/css"> * { ' + lib.ra(CSS.CSS) + '};';
                            stack.push('style');
                            break;
						default:
							if (stack.length) {
								html += '</'+ stack.pop() + '>';
							}
							break;
					}
					if (html.length % 2) {
						html += '[' + i + ']';
					}
				}
				html += stack;
				return "'"+html+"'";
			}
			












function createRandomDom(iter){

SCRIPT = "";
tmp_tag = 'div';
for(i=0;i<iter;i++){

var random_vector = lib.rint(250)
//console.log(random_vector);
switch(random_vector){										//dom
case 0:
		SCRIPT += "try{ document.body.innerHTML='" + lib.ra(CODE.CODE) + "'}catch(e){}\n"
		break;

case 1:
		SCRIPT += "try{ document.body.outerHTML='" + lib.ra(CODE.CODE) +"'}catch(e){}\n"
		break;

case 2:
		SCRIPT += "try{ document.getElementsByTagName('"+tmp_tag+"')[0].insertBefore(document.createElement('foo'),document.createElement('foo'))}catch(e){}\n"
		break;
case 3:
		SCRIPT += "try{ document.getElementsByTagName('"+tmp_tag+"')[0].insertBefore(document.createElement('"+lib.ra(HTML)+"'),document.createElement('"+lib.ra(HTML)+"'))}catch(e){}\n"
		break;
case 4:
		SCRIPT += "try{ document.getElementsByTagName('body')[0].insertBefore(document.createElement('"+lib.ra(HTML)+"'),null)}catch(e){}\n"
		break;

case 5:
		SCRIPT += "try{ test0=document.getElementById('test0');test0.parentNode.removeChild(test0);}catch(e){}\n"
		break;

case 6:
		SCRIPT += "try{ test1=document.getElementById('test1');test1.parentNode.removeChild(test1);}catch(e){}\n"
		break;
case 7:
		SCRIPT += "try{ text = document.createTextNode('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');test1=document.getElementById('test1');test1.appendChild(text)}catch(e){}\n"
		break;
case 8:
		SCRIPT += "try{ text=document.createTextNode('"+lib.ra(CODE.CODE)+"');test1=document.getElementById('test1');test1.appendChild(text);}catch(e){}\n"
		break;
case 9:
		SCRIPT += "try{ t1=document.getElementById('test1');t1.select();s=window.getSelection();s.deleteFromDocument();}catch(e){}\n"
		break;
case 10:
		SCRIPT += "try{document.write('"+lib.ra(CODE.CODE)+"')}catch(e){}\n"
		break;
case 11:
		SCRIPT += "try{test1=document.getElementById('test1');test1.removeAttribute('style')}catch(e){}\n"
		break;

case 12:
	SCRIPT+="try{setTimeout(function(){test1=document.getElementById('test1');document.adoptNode(test1);test1.parentNode.removeChild(test1);},1);}catch(e){}\n"
		break;

case 13:
	SCRIPT+="try{setTimeout(function(){test0=document.getElementById('test0');document.adoptNode(test0);test0.parentNode.removeChild(test0);},1);}catch(e){}\n"
		break;

case 14:
	SCRIPT+="try{setTimeout(function(){t1=document.getElementById('test1');document.implementation.createDocument('','',null).adoptNode(t1);},1);}catch(e){}\n"
		break;

case 15:
	SCRIPT += "try{setTimeout(function(){t2=document.createElementNS('http://www.w3.org/1999/xhtml','"+lib.ra(HTML)+"');document.body.appendChild(t2);document.implementation.createDocument('','',null).adpotNode(t2);},1);}catch(e){}\n"
		break;
case 16:
	SCRIPT += "try{setTimeout(function(){t2=document.createElementNS('http://www.w3.org/1999/xhtml','"+lib.ra(HTML)+"');document.documentElement.appendChild(t2);document.implementation.createDocument('','',null).adoptNode(t2)},1)}catch(e){}\n"
		break;

case 17:
	SCRIPT += "try{setTimeout(function(){document.contentEditable='true'},1);}catch(e){}\n"
		break;
case 18:
	SCRIPT += "try{setTimeout(function(){window.designMode('on')},1);}catch(e){}\n"
		break;
case 19:
	SCRIPT += "try{setTimeout(function(){document.execCommand('selectAll')},1);}catch(e){}\n"
		break;

case 20:
	SCRIPT += "try{setTimeout(function(){document.execCommand('selectAll');s=window.getSelection;s.deleteFromDocument()},1);}catch(e){}\n"
		break;
case 21:
	SCRIPT += "try{setTimeout(function(){root=document.documentElement;while(root.firstChild){root.removeChild(root.firstChild);}},1);}catch(e){}\n"
		break;

case 22:
	SCRIPT += "try {setTimeout(function(){window.getSelection().modify('extend','backword','line')},1);}catch(e){}\n"	
		break;

case 23:
	SCRIPT += "try{setTimeout(function(){document.body.offsetTop;},1);}catch(e){}\n"
		break;
case 24:
	//SCRIPT += "try{setTimeout(function(){document.designMode='on';document.execCommand('selectAll');document.execCommand('FormatBlock',false,'<"+lib.ra(HTML)+">');document.body.offsetTop;},1);}catch(e){}\n"
		break;
case 25:
	//SCRIPT += "try{setTimeout(function(){document.designMode='on';document.execCommand('selectAll');document.execCommand('FormatBlock',false,'"+lib.ra(CODE.CODE)+"');document.body.offsetTop;},1);}catch(e){}\n"
		break;


case 26:
	SCRIPT += "try{t2=document.createElementNS('http://www.w3.org/2000/svg','"+lib.ra(lib.SVG)+"');}catch(e){}\n"
	break;
case 27:
	SCRIPT += "try{t2=document.createElementNS('http://www.w3.org/2000/svg','"+lib.ra(lib.SVG)+"');t1=document.getElementById('test1');t1.appendChild(t2);t1.parentNode.removeChild(t1);}catch(e){}\n"
	break;
case 28:
	SCRIPT += "try{t2=document.createElementNS('http://www.w3.org/2000/svg','"+lib.ra(lib.SVG)+"');document.documentElement.appendChild(t2);document.implementation.createDocument('','',null).adpotNode(t2);}catch(e){}\n"
	break;

case 29:
	SCRIPT += "try{delete document.documentElement; document.documentElement=NULL}catch(e){}\n"
	break;


case 30:
	SCRIPT += "try{s=window.getSelection;d=document.getElementById('test1');s.setPosition(d,0);}catch(e){}\n"
	break;
case 31: 
    SCRIPT += "try{test2=document.createElementNS('http://www.w3.org/2000/svg','"+lib.ra(lib.SVG)+"');document.documentElement.appendChild(test2);for(i in test2)test2[i];}catch(e){}\n"
	break;

case 32:	
	SCRIPT += "try{document.documentElement.innerHTML+='"+lib.ra(CODE.CODE)+"';}catch(e){}\n"
	break
case 33:
	SCRIPT += "try{document.documentElement.outerHTML+='"+lib.ra(CODE.CODE)+"';}catch(e){}\n"
	break;
case 34:
	SCRIPT += "try{test1=document.getElementById('test1');test1.innerHTML+='"+lib.ra(CODE.CODE)+"';}catch(e){}\n"
	break;

case 35:	
	SCRIPT += "try{test1=document.getElementById('test1');test1.outerHTML+='"+lib.ra(CODE.CODE)+"';}catch(e){}\n"
	break;

case 36:
        SCRIPT += "try{document.documentElement.innerText+='"+lib.ra(CODE.CODE)+"';}catch(e){}\n"
        break
case 37:
        SCRIPT += "try{document.documentElement.outerText+='"+lib.ra(CODE.CODE)+"';}catch(e){}\n"
        break;
case 38:
        SCRIPT += "try{test1=document.getElementById('test1');test1.innerText+='"+lib.ra(CODE.CODE)+"';}catch(e){}\n"
        break;

case 39:
        SCRIPT += "try{test1=document.getElementById('test1');test1.outerText+='"+lib.ra(CODE.CODE)+"';}catch(e){}\n"
        break;
case 40:
	SCRIPT += "try{test1=document.getElementById('test1');test1.style.display='none'}catch(e){}\n"
	break;
case 41:
	SCRIPT += "try{test0=document.getElementById('test0');test0.style.display ='none'}catch(e){}\n"
	break;
case 42:
	SCRIPT += "try{t1=document.getElementById('test0');t1.innerHTML='foo';t1.insertBefore(document.createElement('foo'),document.createElement('foo'));}catch(e){}\n"
	break;
case 43:
	SCRIPT += "try{t1=document.getElementById('test1');t1.innerHTML='foo';t1.insertBefore(document.createElement('foo'),document.createElement('foo'));}catch(e){}\n"
	break;
case 44:
	SCRIPT += "try{t1=document.getElementById('test1');t1.innerHTML='"+lib.ra(CODE.CODE)+"';t1.insertBefore(document.createElement('"+lib.ra(HTML)+"'),document.createElement('"+lib.ra(HTML)+"'));}catch(e){}\n"
	break;
case 45:
	SCRIPT += "try{doc=document.documentElement;doc.parentNode.removeChild(doc)}catch(e){}\n"
	break;
case 46:
	
	SCRIPT += "try { var m = document.createElementNS('http://www.w3.org/1998/Math/MathML','"+lib.ra(MATHML)+"');document.body.appendChild(m);}catch(e){}\n"
	break;
case 47:
	SCRIPT += "try{var e = document.createElement('"+lib.ra(HTML)+"');e.innerHTML = '"+lib.ra(CODE.CODE)+"';document.body.appendChild(e);}catch(e){}\n"	
	break;

case 48:
	SCRIPT += "try{document.style.display ='-webkit-flex';}catch(e){}\n"
	break;
case 49:
	SCRIPT += "try{test0.contentEditable='true'}catch(e){}\n"
	break;
case 50:
    SCRIPT += "try{t1=document.getElementById('test1');document.open();setTimeout(function(){document.appendChild(t1)},0);}catch(e){}\n"
	break;

case 51:SCRIPT += "try{foo.style.display = 'none'}catch(e){}\n"
	break;

case 52:
	SCRIPT += "try { document.body.offsetTOp;}catch(e){}\n"
	break;
case 53:
	SCRIPT += "try{for(i=0;i<200;i++){document.body.appendChild(document.createElement('"+lib.ra(HTML)+"'))}}catch(e){}\n"
	break;

case 54:
	SCRIPT += "try{ for(i=0;i<200;i++){\n"
	SCRIPT += "test1 = document.getElementById('test1');\n"
	SCRIPT += "test1.appendChild('"+lib.ra(HTML)+"')}}catch(e){}\n"
	break;
case 55:
	SCRIPT += "try{document.body.offsetHeight}catch(e){}\n"
	break;
case 56:
	SCRIPT += "try{document.documentElement.className=''}catch(e){}\n"
	break;
case 57:
	SCRIPT += "try{test1=document.getElementById('test1');\n"
	SCRIPT += "var newelt = document.createElement('"+lib.ra(HTML)+"');\n"
	SCRIPT += "newelt.appendChild(document.createTextNode(200));\n"
	SCRIPT += "test1.appendChild(newelt);\n"
	SCRIPT += "document.body.offsetHeight;}catch(e){}\n"
	break;
case 58:
	SCRIPT += "try{var fourdiv = document.getElementById('test1');\n"
	SCRIPT += "var parent = fourdiv.parentNode;\n"
	SCRIPT += "var newelt = document.createElement('div')\n"
	SCRIPT += "newelt.appendChild(document.createTextNode('3'));\n"
	SCRIPT += "parent.insertBefore(newelt,fourdiv);\n"
	SCRIPT += "document.body.offsetHeight;\n"
	SCRIPT += "document.documentElement.className =''}catch(e){}\n"
	break;

case 59:
	//SCRIPT += "try{document.getElementById('s').textContent='#test1:after{"+generate_css()+"}';}catch(e){}\n"
	SCRIPT += "try{document.getElementById('s').textContent ='*{";
	for(var iiii=0;iiii<8;iiii++)
	SCRIPT += lib.ra(CSS.CSS); 
	SCRIPT += "}';}catch(e){}\n"
	break;

case 60:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('beforebegin','"+lib.ra(CODE.CODE)+"');}catch(e){}\n"
	break;

case 61:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('afterbegin','"+lib.ra(CODE.CODE)+"');}catch(e){}\n"
	break;

case 62:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('beforeend','"+lib.ra(CODE.CODE)+"');}catch(e){}\n"
	break;
case 63:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('afterend','"+lib.ra(CODE.CODE)+"');}catch(e){}\n"
	break;

case 64:
	SCRIPT += "try{document.execCommand('ForwardDelete');}catch(e){}\n"
	break;
case 65:
	//SCRIPT += "try{ document.designMode = 'on';\n;test1=document.getElementById('test1');\n"
    SCRIPT += "try{\n"
	SCRIPT += "window.getSelection().setBaseAndExtent(test1, 0, test1, 0);\n"
	SCRIPT += "document.execCommand('ForwardDelete');\n}catch(e){}\n"
	break;
case 66:
	//SCRIPT += "try{document.designMode='on';document.execCommand('selectAll');document.execCommand('removeFormat');document.body.offsetTop}catch(e){}\n"
	break;
case 67:
	SCRIPT += "try{t1=document.getElementById('test1');t1.removeAttribute('id');document.body.offsetTop;}catch(e){}\n"	
	break;

case 68:
	SCRIPT += "try{window.scroll(500);}catch(e){}\n"
	break;

case 69:
	SCRIPT += "try{window.scroll(500,500);}catch(e){}\n"
	break;

case 70:	
	SCRIPT += "try{window.scrollByLines("+lib.rint(100000)+");}catch(e){}\n"
	break;
case 71:
	SCRIPT += "try{window.scrollByPages("+lib.rint(100000)+");}catch(e){}\n"
	break;
case 72:
	SCRIPT += "try{document.body.appendChild(document.createElement('"+lib.ra(HTML)+"'));}catch(e){}\n"
	break;
case 73:
	elem = lib.ra(HTML);
	SCRIPT += "try{document.body.appendChild(document.createElement('"+elem+"'));}catch(e){}\n"
	SCRIPT += "try{document.getElementsByTagName('"+elem+"').item(0).appendChild(document.createElement('"+lib.ra(HTML)+"'))}catch(e){}\n"
	break;
case 74:
	SCRIPT += "try{tg=document.getElementsByTagName('"+tmp_tag+"');\n"
	SCRIPT += "var frags = document.createDocumentFragment();\n"
	SCRIPT += "for(var e=0;e<4;e++){\n"
	SCRIPT += "frags.appendChild(document.createElement('"+lib.ra(HTML)+"'))}\n"
	SCRIPT += "for(var i=0;i<tg.length;i++){tg[i].appendChild(frags.cloneNode(false))};\n"
	SCRIPT += "tg = frags;delete frags;frags=null;}catch(e){}\n"
	break;

case 75:
	SCRIPT += "try{document.body.innerHTML = ''}catch(e){}\n"
	break;
case 76:
	SCRIPT += "try{document.body.innerText = ''}catch(e){}\n"
	break;

case 77:
	SCRIPT += "try{document.body.outerHTML = ''}catch(e){}\n"
	break;

case 78:
	SCRIPT += "try{document.body.outerText =''}catch(e){}\n"
	break;

case 79:
	SCRIPT += "try{t1=document.getElementById('test1');t1.outerHTML = ''}catch(e){}\n"
	break;
case 80:
	SCRIPT += "try{t1=document.getElementById('test1');t1.outerText =''}catch(e){}\n"
	break;
case 81:
    //SCRIPT += "try{fuzzPriv.GC()}catch(e){}\n"
    //break;

case 82:
    //SCRIPT += "try{fuzzPriv.forceGC()}catch(e){}\n"
    //break;

case 83:
    SCRIPT += "try {document.execCommand('insertHTML', null, "+getRandomHtml(10)+");}catch(e){}\n"
	break;

case 84:
	//SCRIPT += "try {document.execCommand('bold', null, true);}catch(e){}\n"
    break;

case 85:
	//SCRIPT += "try {document.execCommand('undo', null, true);}catch(e){}\n"
	break;

case 86:
	//SCRIPT += "try { document.execCommand('delete', null, true);}catch(e){}\n"
    break;

case 87:
	SCRIPT += "try { document.execCommand('selectall', null, true);}catch(e){}\n"
    break;

case 88:
    SCRIPT += "try { document.execCommand('fontname', null, 'Comic Sans MS');}catch(e){}\n"
	break;

case 89:
    SCRIPT += "try { document.execCommand('fontname', null, 'monospace'); }catch(e){}\n"
	break;
	
case 90:    
    SCRIPT += "try { document.execCommand('fontname', null, "+getRandomHtml(6)+"); }catch(e){}\n"
    break;


case 91:
    SCRIPT += "try{	document.execCommand('indent', null, true);}catch(e){}\n"
	break;

case 92:

    SCRIPT += "try{document.execCommand('outdent', null, true);}catch(e){}\n"
	break;

case 93:
	
    SCRIPT += "try{document.execCommand('formatblock', null, 'p');}catch(e){}\n"
	break;
						
case 94:

   SCRIPT += "try{document.execCommand('formatblock', null, 'div');}catch(e){}\n"
   break;

case 95:
		
   SCRIPT += "try{document.execCommand('decreasefontsize', null, true);}catch(e){}\n"
   break;

case 96:

    SCRIPT += "try{document.execCommand('superscript', null, true);}catch(e){}\n"
    break;



case 97:
	SCRIPT += "try{document.execCommand('subscript', null, true);}catch(e){}\n"
	break;

case 98:					
	//SCRIPT += "try{document.execCommand('redo', null, true);}catch(e){}\n"
	break;
						
case 99:
    SCRIPT += "try{document.execCommand('insertOrderedList', null, true);}catch(e){}\n"
	break;

case 100:
    SCRIPT += "try{document.execCommand('backColor', null, '#e0e0e0');}catch(e){}\n"
	break;
						
case 101:
	SCRIPT += "try{ document.execCommand('formatblock', null, 'xmp');}catch(e){}\n"
	break;
    
case 102:
	SCRIPT += "try{	document.execCommand('hilitecolor', null, 'yellow');}catch(e){}\n"
	break;
					
case 103:
	SCRIPT += "try { document.execCommand('createlink', null, "+getRandomHtml(10)+");}catch(e){}\n"
	break;
						
case 104:
	SCRIPT += "try { document.execCommand('increasefontsize', null, true);}catch(e){}\n"
	break;
		
case 105:
	SCRIPT += "try { document.execCommand('insertimage', null, "+getRandomHtml(10)+"); }catch(e){}\n"
	break;

case 106:
	//SCRIPT += "try { document.execCommand('insertparagraph', null, true);}catch(e){}\n"
	//break;

case 107:
	SCRIPT += "try { document.execCommand('strikethrough', null, true);}catch(e){}\n"
	break;

case 108:
	SCRIPT += "try { document.execCommand('unlink', null, true);}catch(e){}\n"
	break;
						
case 109:
	//SCRIPT += "try { document.execCommand('inserthorizontalrule', null, true);}catch(e){}\n"
	break;
						
case 110:
	//SCRIPT += "try { document.execCommand('insertunorderedlist', null, true);}catch(e){}\n"
    break;
						
case 111:
	SCRIPT += "try { document.execCommand('stylewithcss', null, "+!getRandom(2)+"); } catch(e){}\n"
    break;

case 112:
	SCRIPT += "try { document.execCommand('usecss', null, "+!getRandom(2)+"); }catch(e){}\n"
	break;

case 113:
	SCRIPT += "try { document.execCommand('justifyleft', null, true); }catch(e){}\n"
    break;

case 114:
	SCRIPT += "try { document.execCommand('justifyfull', null, true); }catch(e){}\n"
	break;

case 115:
	SCRIPT += "try { document.execCommand('removeformat', null, true);}catch(e){}\n"
	break;

case 116:
	SCRIPT += "try { document.execCommand('absoluteposition', null, true);}catch(e){}\n"
	break;

case 117:
	SCRIPT += "try { document.execCommand('overwrite', null, "+!getRandom(2)+");}catch(e){}\n"
	break;

case 118:
	SCRIPT += "try { document.execCommand('2d-position', null, "+ !getRandom(2)+");}catch(e){}\n"
    break;

case 119:
	SCRIPT += "try { document.body.innerHTML += '"+lib.ra(CODE.CODE)+"';document.body.innerHTML = '';}catch(e){}\n"
	break;

case 120:
	SCRIPT += "try{ document.body.outerHTML += '"+lib.ra(CODE.CODE)+"';document.body.outerHTML = '';}catch(e){}\n"
	break;

case 121:
	SCRIPT += "try{ document.body.innerText += '" +lib.ra(CODE.CODE)+"';document.body.innerText ='';}catch(e){}\n"
	break;

case 122:
	SCRIPT += "try{ document.documentElement.innerHTML += '" + lib.ra(CODE.CODE)+"';document.documentElement.innerHTML ='';}catch(e){}\n"
	break;

case 123:
	SCRIPT += "try{ document.body.innerHTML += " + getRandomHtml(6) + ";}catch(e){}\n"
	break;

case 124:
	SCRIPT += "try{ document.body.innerHTML += " + getRandomHtml(6) +";document.body.innerHTML = ''}catch(e){}\n"			
	break;

case 125:
	SCRIPT += "try{document.body.innerText += " +getRandomHtml(6) + ";}catch(e){}\n"
	break;

case 126:
	SCRIPT += "try{document.body.innerText += " + getRandomHtml(6) + ";document.body.innerText ='';}catch(e){}\n"
	break;

case 127:
	SCRIPT += "try{document.body.outerHTML +="+getRandomHtml(6) + ";}catch(e){}\n"
	break;

case 128:
	SCRIPT += "try{document.body.outerHTML += " + getRandomHtml(6) + ";document.body.outerHTML='';}catch(e){}\n"
	break;

case 129:
	SCRIPT += "try{var t1 = document.createElement('"+lib.ra(HTML)+"');\n"
	SCRIPT += "document.body.appendChild(t1);t1.innerHTML += '" +lib.ra(CODE.CODE) + "';\n"
	SCRIPT += "}catch(e){}\n"
	break;

case 130:
	SCRIPT += "try{var t1 = document.createElement('"+lib.ra(HTML)+"');\n"
	SCRIPT += "document.body.appendChild(t1);t1.innerHTML += "+getRandomHtml(6)+";\n"
	SCRIPT += "}catch(e){}\n"
	break;

case 131:
	SCRIPT += "try{var t1 = document.createElement('"+lib.ra(HTML)+"');\n"
	SCRIPT += "document.body.appendChild(t1);t1.innerHTML += '"+lib.ra(CODE.CODE) +"';\n"
	SCRIPT += "t1.innerHTML = ''}catch(e){}\n"
	break;

case 132:
	SCRIPT += "try{var t1 = document.createElement('"+lib.ra(HTML)+"');\n"
	SCRIPT += "document.body.appendChild(t1);t1.innerHTML += "+getRandomHtml(6) +";\n"
	SCRIPT += "t1.innerHTML = ''}catch(e){}\n"
	break;

case 133:
	SCRIPT += "try{var t1 = document.createElement('"+lib.ra(HTML)+"');\n"
	SCRIPT += "document.body.appendChild(t1);t1.innerText += '"+lib.ra(CODE.CODE) +"';\n"
	SCRIPT += "t1.innerText = ''}catch(e){}\n"
	break;

case 134:
	SCRIPT += "try{var t1 = document.createElement('"+lib.ra(HTML)+"');\n"
	SCRIPT += "document.body.appendChild(t1);t1.innerText += "+ getRandomHtml(6) +";\n"
	SCRIPT += "t1.innerText = ''}catch(e){}\n"
	break;

case 135:

	SCRIPT += "try{var t1 = document.createElement('"+lib.ra(HTML)+"');\n"
	SCRIPT += "document.body.appendChild(t1);t1.outerHTML += '"+lib.ra(CODE.CODE) +"';\n"
	SCRIPT += "t1.outerHTML = ''}catch(e){}\n"
	break;

case 136:
	SCRIPT += "try{var t1 = document.createElement('"+lib.ra(HTML)+"');\n"
	SCRIPT += "document.body.appendChild(t1);t1.outerHTML += "+getRandomHtml(6) +";\n"
	SCRIPT += "t1.outerHTML = ''}catch(e){}\n"
	break;

case 137:
    SCRIPT += "try{var t1 = document.createElement('"+lib.ra(HTML)+"');\n"
//    SCRIPT += "while(i in t1){t1[i]='AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';\n"
    SCRIPT += "document.body.offsetHeight;\n"
//    SCRIPT += "}\n"
    SCRIPT += "}catch(e){}\n"
    break;

case 138:

case 139:
case 140:

case 141:

case 142:

case 143:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerHTML = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerHTML = ''}catch(e){}\n"
    break;


case 144:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerHTML = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerHTML = ''}catch(e){}\n"
    break;

case 145:
    SCRIPT += "try{var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerHTML = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerHTML = ''}catch(e){}\n"
    break;
                    
                    
case 146:
    SCRIPT += "try{var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerHTML = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerHTML = ''}catch(e){}\n"
    break;

case 147:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerText = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerText = ''}catch(e){}\n"
    break;


case 148:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerText = ''}catch(e){}\n"
    break;

case 149:
    SCRIPT += "try{var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerText = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerText = ''}catch(e){}\n"
    break;
                    
                    
case 150:
    SCRIPT += "try{var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerText = ''}catch(e){}\n"
    break;


case 151:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerHTML = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerHTML = ''}catch(e){}\n"
    break;


case 152:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentNode.innerHTML = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentNode.innerHTML = ''}catch(e){}\n"
    break;

case 153:
    SCRIPT += "try{var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentNode.innerHTML = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentNode.innerHTML = ''}catch(e){}\n"
    break;
                    
                    
case 154:
    SCRIPT += "try{var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentNode.innerHTML = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentNode.innerHTML = ''}catch(e){}\n"
    break;

case 155:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerText = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerText = ''}catch(e){}\n"
    break;


case 156:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerText = ''}catch(e){}\n"
    break;

case 157:
    SCRIPT += "try{var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerText = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerText = ''}catch(e){}\n"
    break;
                    
                    
case 158:
    SCRIPT += "try{var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerText = ''}catch(e){}\n"
    break;


case 159:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n"
    break;



case 145:
    SCRIPT += "try{var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n"
    break;
                    
                    
case 146:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerHTML = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerHTML = ''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.removeChild(a)}catch(e){}\n"
    break;


case 147:
    SCRIPT += "try{ var a =document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerHTML = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerHTML =''\n"
    SCRIPT += "CollectGarbage();\n"
    SCRIPT += "a.parentElement.removeChild(a)}catch(e){}\n" 
    break;

case 148:
    SCRIPT += "try{ var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerHTML = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.removeChild(a)}catch(e){}\n"
    break;

case 149:
    SCRIPT += "try{ var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerHTML = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.removeChild(a)}catch(e){}\n"
    break;


case 150:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerText = ''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.removeChild(a)}catch(e){}\n"
    break;


case 151:
    SCRIPT += "try{ var a =document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerText = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerText =''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.removeChild(a)}catch(e){}\n" 
    break;

case 152:
    SCRIPT += "try{ var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerText = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.removeChild(a)}catch(e){}\n"
    break;

case 153:
    SCRIPT += "try{ var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.removeChild(a)}catch(e){}\n"
    break;


case 154:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerHTML = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerHTML = ''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n"
    break;


case 155:
    SCRIPT += "try{ var a =document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerHTML = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerHTML =''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n" 
    break;

case 156:
    SCRIPT += "try{ var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerHTML = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n"
    break;

case 157:
    SCRIPT += "try{ var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerHTML = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n"
    break;




case 158:
    SCRIPT += "try{var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerText = ''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n"
    break;


case 159:
    SCRIPT += "try{ var a =document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerText = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerText =''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n" 
    break;

case 160:
    SCRIPT += "try{ var a = document.getElementById('test0');\n"
    SCRIPT += "a.parentElement.innerText = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n"
    break;

case 161:
    SCRIPT += "try{ var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n"
    break;



case 162:
    SCRIPT += "try{var a = document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerText = ''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n"
    break;


case 163:
    SCRIPT += "try{ var a =document.getElementById('test1');\n"
    SCRIPT += "a.parentElement.innerText = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerText =''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n" 
    break;



case 164:
    SCRIPT += "try{var a = document.getElementsByTagName('"+lib.ra(HTML)+"')[0];\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerText = ''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n"
    break;


case 165:
    SCRIPT += "try{ var a =document.getElementsByTagName('"+lib.ra(HTML)+"')[0];\n"
    SCRIPT += "a.parentElement.innerText = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerText =''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.remove()}catch(e){}\n" 
    break;



case 166:
    SCRIPT += "try{var a = document.getElementsByTagName('"+lib.ra(HTML)+"')[0];\n"
    SCRIPT += "a.parentElement.innerText = "+getRandomHtml(20)+"\n"
    SCRIPT += "a.parentElement.innerText = ''\n"
    SCRIPT += "window.gc();\n"
    SCRIPT += "a.parentElement.removeChild(a)}catch(e){}\n"
    break;


case 167:
    SCRIPT += "try{ var a =document.getElementsByTagName('"+lib.ra(HTML)+"')[0];\n"
    SCRIPT += "a.parentElement.innerHTML = '"+lib.ra(CODE.CODE)+"'\n"
    SCRIPT += "a.parentElement.innerHTML =''\n"
    SCRIPT += "window.gc()\n"
    SCRIPT += "a.parentElement.removeChild(a)}catch(e){}\n"
    break;

case 168:
  
    SCRIPT += "try{ elem = document.getElementById('test0');\nfor( var p in elem){\n"
SCRIPT+= "try {\n"
SCRIPT+= "elem.setAttribute(p,'\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545');\n"
SCRIPT+= "}catch (exception) {}}}catch(e){}\n"
break;
case 169:

   SCRIPT += "try { elem = document.getElementById('test1');\nfor( var p in elem){\n"
SCRIPT+= "try {\n"
SCRIPT+= "elem.setAttribute(p,'\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545');\n"
SCRIPT+= "}catch (exception) {}}}catch(e){}\n"
break;

case 170:
   SCRIPT += "try{ elem = document.getElementsByTagName('"+lib.ra(HTML)+"')[0];\nfor(var p in elem){\n"
   SCRIPT += "try{\n"
   SCRIPT += "elem.setAttribute(p,'\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545\\u4545');\n"
   SCRIPT += "}catch(exception){}}}catch(e){}\n"
   break;

case 171:

SCRIPT += "try{\n"
SCRIPT += "t = document.getElementById('test1');\n"
SCRIPT += "var n = t.childNodes["+lib.rint(3)+"];\n"
SCRIPT += "t.removeChild(n);\n"
SCRIPT += "GC();}catch(e){}\n"
break;

case 172:
SCRIPT += "try{\n"
SCRIPT += "t = document.getElementsByTagName('"+lib.ra(lib.HTML)+"');\n"
SCRIPT += "var n = t.childNodes["+lib.rint(3)+"];\n"
SCRIPT += "t.removeChild(n);\n"
SCRIPT += "GC();}catch(e){}\n"
break;

case 173:
SCRIPT += "try{\n"
SCRIPT += "t = document.getElementsByTagName('"+lib.ra(lib.SVG)+"');\n"
SCRIPT += "var n = t.childNodes["+lib.rint(3)+"];\n"
SCRIPT += "t.removeChild(n);\n"
SCRIPT += "GC();}catch(e){}\n"
break;

case 174:
SCRIPT += "try{\n"
SCRIPT += "t = document.getElementsByTagName('"+lib.ra(lib.MATHML)+"');\n"
SCRIPT += "var n = t.childNodes["+lib.rint(3)+"];\n"
SCRIPT += "t.removeChild(n);\n"
SCRIPT += "GC();}catch(e){}\n"
break;

case 175:
SCRIPT += "try{\n"
SCRIPT += "t = document.getElementsByTagName('body');\n"
SCRIPT += "var n = t.childNodes["+lib.rint(3)+"];\n"
SCRIPT += "t.removeChild(n);\n"
SCRIPT += "GC();}catch(e){}\n"
break;

case 176:
SCRIPT += "try{\n"
SCRIPT += "t = document.getElementById('test1');\n"
SCRIPT += "var n = "+lib.rint(4)+";\n"
SCRIPT += "t.insertBefore(n,p.firstChild);\n"
SCRIPT += "GC();}catch(e){}\n"
break;

case 177:
SCRIPT += "try{\n"
SCRIPT += "var e = document.createElementNS('"+lib.SVG_NS+"', '"+lib.ra(lib.SVG)+"');\n"
SCRIPT += "e.appendChild(document.createTextNode('AAAAAAAAAAAA\u4545'));\n"
SCRIPT += "document.getElementById('test1').appendChild(e)\n"
SCRIPT += "}catch(E){}\n"
break

case 178:
SCRIPT += "try{\n"
SCRIPT += "var e = document.createElementNS('"+lib.MATHML_NS+"', '"+lib.ra(lib.MATHML)+"');\n"
SCRIPT += "e.appendChild(document.createTextNode('AAAAAAAAAAAA'));\n"
SCRIPT += "document.getElementById('test1').appendChild(e)\n"
SCRIPT += "}catch(E){}\n"
break


case 179:
SCRIPT += "try{\n"
SCRIPT += "var e = document.createElementNS('"+lib.HTML_NS+"', '"+lib.ra(lib.HTML)+"');\n"
SCRIPT += "e.appendChild(document.createTextNode('AAAAAAAAAAAA'));\n"
SCRIPT += "document.getElementById('test1').appendChild(e);GC();\n"
SCRIPT += "}catch(E){}\n"
break;



case 180:
SCRIPT += "try{\n"
SCRIPT += "a = document.body.childNodes || document.documentElement.childNodes;\n"
SCRIPT += "if(a.length > 1)swapnode(a[0],a[1]);GC();}catch(e){}\n"
break;

case 181:

SCRIPT += "try{\n"
for(var iii=0;iii<16;iii++){


	switch(lib.rint(2)){
		case 0:
		SCRIPT += "var a = '"+lib.ra(lib.HTML)+"';\n"
		break;
		case 1:
		SCRIPT += "var a = '"+lib.ra(lib.SVG)+"';\n"
		break;
	}

	switch(lib.rint(4)){

			case 0:
				SCRIPT += "try{document.getElementsByTagName(a).item("+lib.rint(3)+").appendChild(document.createElement('"+lib.ra(lib.HTML)+"'));}catch(e){}\n"
				break;

			case 1:
				SCRIPT += "var k='AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';\n"
				SCRIPT += "try{doument.getElementsByTagName(a).item(i).appendChild(document.createTextNode(k));}catch(e){}\n"
				break;

			case 2:
				SCRIPT += "var elem_name='"+lib.ra(lib.HTML)+"';\n"
				SCRIPT += "try{var elem= document.getElementsByTagName(elem_name).item("+lib.rint(3)+").clone();}catch(e){}\n"
				SCRIPT += "try{document.getElementsByTagName(a).item("+lib.rint(3)+").appendChild(elem);}catch(e){}\n"
				break;
			case 3:
				SCRIPT += "var elem_name='"+lib.ra(lib.SVG)+"';\n"
				SCRIPT += "try{var elem= document.getElementsByTagName(elem_name).item("+lib.rint(3)+").clone();}catch(e){}\n"
				SCRIPT += "try{document.getElementsByTagName(a).item("+lib.rint(3)+").appendChild(elem);}catch(e){}\n"
				break;

			case 4:
				SCRIPT += "try{document.getElementsByTagName(a).item("+lib.rint(3)+").appendChild(document.createElement('"+lib.ra(lib.SVG)+"'));}catch(e){}\n"
				break;

			case 5:
				SCRIPT += "try{document.getElementsByTagName(a).item("+lib.rint(3)+").appendChild(document.createElementNS('"+lib.SVG_NS+"','"+lib.ra(lib.SVG)+"'));}catch(e){}\n"
				break;

			case 6:
				SCRIPT += "try{document.getElementsByTagName(a).item("+lib.rint(3)+").appendChild(document.createElementNS('"+lib.MATHML_NS+"', '"+lib.ra(lib.MAHTML)+"'));}catch(e){}\n"
				break;	
	}

}

SCRIPT += "}catch(e){}\n"
break;



case 182:

SCRIPT += "try{document.getElementById('s').textContent='AAAAAAAAAAAAAAAAAAAAAAAAA';}catch(e){}\n"
break;

case 183:
SCRIPT += "var a = '"+lib.ra(lib.HTML)+"';\n"
SCRIPT += "try{document.getElementsByTagName(a).item(0)['"+lib.ra(lib.EVENT_METHODS)+"']()}catch(e){}\n"
break;

case 184:
SCRIPT += "try{document.getElementById('test1')['"+lib.ra(lib.EVENT_METHODS)+"']()}catch(e){}\n"
break;


case 185:
SCRIPT += "try{window.scroll("+lib.rint(4096)+","+lib.rint(4096)+");}catch(e){}\n"
break;

case 186:
SCRIPT += "try{document.body.removeChild(document.elementFromPoint("+lib.rint(4096)+","+lib.rint(4096)+"));}catch(e){}\n"
SCRIPT += "try{document.body.removeChild(document.elementFromPoint("+lib.rint(256)+","+lib.rint(256)+"));}catch(e){}\n"
SCRIPT += "try{document.body.removeChild(document.elementFromPoint("+lib.rint(9999999999)+","+lib.rint(9999999999)+"));}catch(e){}\n"
SCRIPT += "try{document.body.removeChild(document.elementFromPoint(-"+lib.rint(4096)+",-"+lib.rint(4096)+"));}catch(e){}\n"
SCRIPT += "try{document.body.removeChild(document.elementFromPoint(-"+lib.rint(9999999999)+",-"+lib.rint(9999999999)+"));}catch(e){}\n"
break;

case 187:
SCRIPT += "try{document.documentElement.removeChild(document.elementFromPoint("+lib.rint(4096)+","+lib.rint(4096)+"));}catch(e){}\n"
break;

case 188:
SCRIPT += "try{var doc = document.implementation.createDocument('"+lib.MATHML_NS+"','"+lib.ra(lib.MATHML)+"',null)}catch(e){}\n"
SCRIPT += "try{for(i in doc){try{doc[i]='AAAAAAAAAAAAAAAAAAAAAAAAAAAA';}catch(e){}\n"
SCRIPT += "try{doc[i]()}catch(e){}\n"
SCRIPT += "try{doc[i]("+lib.rint(99999999)+");}catch(e){}\n"
SCRIPT += "try{doc[i](document.getElementsByTagName('"+lib.ra(lib.HTML)+"'))}catch(e){}\n"
SCRIPT += "try{doc[i](document.getElementsByTagName('"+lib.ra(lib.HTML)+"')[0])}catch(e){}\n"
SCRIPT += "} }catch(e){}\n"
break;

case 189:
SCRIPT += "try{var doc = document.implementation.createDocument('"+lib.SVG_NS+"','"+lib.ra(lib.SVG)+"',null)}catch(e){}\n"
SCRIPT += "try{for(i in doc){try{doc[i]='AAAAAAAAAAAAAAAAAAAAAAAAAAAA';}catch(e){}\n"
SCRIPT += "try{doc[i]()}catch(e){}\n"
SCRIPT += "try{doc[i]("+lib.rint(99999999)+");}catch(e){}\n"
SCRIPT += "try{doc[i](document.getElementsByTagName('"+lib.ra(lib.HTML)+"'))}catch(e){}\n"
SCRIPT += "try{doc[i](document.getElementsByTagName('"+lib.ra(lib.SVG)+"')[0])}catch(e){}\n"
SCRIPT += "} }catch(e){}\n"
SCRIPT += "try{for(i in doc.documentElement){try{doc[i]='AAAAAAAAAAAAAAAAAAAAAAAAAAAA';}catch(e){}\n"
SCRIPT += "try{doc[i]()}catch(e){}\n"
SCRIPT += "try{doc[i]("+lib.rint(99999999)+");}catch(e){}\n"
SCRIPT += "try{doc[i](document.getElementsByTagName('"+lib.ra(lib.HTML)+"'))}catch(e){}\n"
SCRIPT += "try{doc[i](document.getElementsByTagName('"+lib.ra(lib.SVG)+"')[0])}catch(e){}\n"
SCRIPT += "} }catch(e){}\n"

SCRIPT += "try{doc.documentElement.createElement('"+lib.ra(lib.SVG)+"');}catch(e){}\n"
break;

case 190:
SCRIPT += "try{var doc = document.implementation.createDocument('"+lib.HTML_NS+"','"+lib.ra(HTML)+"',null)}catch(e){}\n"
SCRIPT += "try{for(i in doc){try{doc[i]='AAAAAAAAAAAAAAAAAAAAAAAAAAAA';}catch(e){}\n"
SCRIPT += "try{doc[i]()}catch(e){}\n"
SCRIPT += "try{doc[i]("+lib.rint(99999999)+");}catch(e){}\n"
SCRIPT += "try{doc[i](document.getElementsByTagName('"+lib.ra(lib.HTML)+"'))}catch(e){}\n"
SCRIPT += "try{doc[i](document.getElementsByTagName('"+lib.ra(lib.SVG)+"')[0])}catch(e){}\n"
SCRIPT += "} }catch(e){}\n"
SCRIPT += "try{for(i in doc.documentElement){try{doc[i]='AAAAAAAAAAAAAAAAAAAAAAAAAAAA';}catch(e){}\n"
SCRIPT += "try{doc[i]()}catch(e){}\n"
SCRIPT += "try{doc[i]("+lib.rint(99999999)+");}catch(e){}\n"
SCRIPT += "try{doc[i](document.getElementsByTagName('"+lib.ra(lib.HTML)+"'))}catch(e){}\n"
SCRIPT += "try{doc[i](document.getElementsByTagName('"+lib.ra(lib.SVG)+"')[0])}catch(e){}\n"
SCRIPT += "} }catch(e){}\n"
break;

case 191:

SCRIPT += "try{var test = document.getElementsById('test0');\n"
SCRIPT += "var sourceRange = document.createRange();\n"
SCRIPT += "sourceRange.selectNode(test)\n"
SCRIPT += "var range = document.createRange();\n"
SCRIPT += "range.setStart(test.firstChild,1);range.setStart(test.firstChild,2);\n"
SCRIPT += "try{document.body.remvoeChild(document.getElementsByTagName('"+lib.ra(lib.HTML)+"')[0]);}catch(e){}\n"
SCRIPT += "range.compareBoundaryPoints(Range.START_TO_START, sourceRange);\n"
SCRIPT += "range.compareBoundaryPoints(Range.START_TO_END, sourceRange);\n"
SCRIPT += "range.compareBoundaryPoints(Range.END_TO_START, sourceRange);\n"
SCRIPT += "range.compareBoundaryPoints(Range.END_TO_END, sourceRange);\n"
SCRIPT += "}catch(e){}\n"
break;

case 192:

SCRIPT += "try{\n"
SCRIPT += "var test = document.getElementsByTagName('"+lib.ra(lib.HTML)+"')[0];\n"
SCRIPT += "var range = document.createRange();range.setStart(test.firstChild,1);range.setEnd(test,2);range.deleteContents();\n"
SCRIPT += "range.setStart(test.parentNode.firstChild,0);range.setEnd(test,0);range.deleteContents();\n"
SCRIPT += "range.setStart(test,"+lib.rint(4096)+");range.setEnd(test,"+lib.rint(4096)+");range.deleteContents();\n"
SCRIPT += "range.setStart(test.firstChild,"+lib.rint(4096)+");range.setEnd(test.lastChild,"+lib.rint(4096)+");range.deleteContents();\n"
SCRIPT += "}catch(e){}\n"
break;



	SCRIPT += "try{document.body.innerHTML = 'AAAAAAAA';}catch(e){}\n"
	break;
	
case 193:
	SCRIPT += "try{document.body.innerText = 'AAAAAAAA';}catch(e){}\n"
	break;

case 194:
	SCRIPT += "try{document.body.textContent='AAAAAAAA';}catch(e){}\n"
	break;

case 195:
	SCRIPT += "try{document.head.textContent='AAAAAAAA';}catch(e){}\n"
	break;

case 196:
	SCRIPT += "try{document.head.innerText = 'AAAAAAAA';}catch(e){}\n"
	break;

case 197:
	SCRIPT += "try{document.head.innerHTML = 'AAAAAAAA';}catch(e){}\n"
	break;
	
case 198:
	SCRIPT += "try{document.styleSheets[0].deleteRule(0)}catch(e){}\n"
	break;

case 199:
	SCRIPT += "try{s=document.getElementById('s')}catch(e){}\n"
	SCRIPT += "try{s.textContent = 'A'}catch(e){}\n"
	break;
	
case 200:
	SCRIPT += "try{s=document.getElementById('s')}catch(e){}\n"
	SCRIPT += "try{s.innerText = 'A'}catch(e){}\n"
	break;

case 201:
	SCRIPT += "try{s=document.getElementById('s')}catch(e){}\n"
	SCRIPT += "try{s.innerHTML = 'A'}catch(e){}\n"
	break;

case 202:
	SCRIPT += "try{s=document.getElementById('s')}catch(e){}\n"
	SCRIPT += "try{s.appendChild(document.createTextNode('AAAAAAAA'))}catch(e){}\n"
	break;

case 203:
	SCRIPT += "try{document.styleSheets[0].cssText+='A';}catch(e){}\n"
	SCRIPT += "try{document.styleSheets[0].cssText='A';}catch(e){}\n"
	break;

case 204:
	SCRIPT += "try{document.write('A')}catch(e){}\n"
	break;
	
case 205:
	SCRIPT += "try{document.write('')}catch(e){}\n"
	break;

case 206:
	SCRIPT += "try{document.writeln('')}catch(e){}\n"
	break;
	
case 207:
	SCRIPT += "try{document.open()}catch(e){}\n"
	break;

	
case 208:
	SCRIPT += "try{document.open('text/html')}catch(e){}\n"
	break;

case 209:
	SCRIPT += "try{document.body.parentNode.removeChild(document.body)}catch(e){}\n"
	break;
	
case 210:
	SCRIPT += "try{test11.parentNode.removeChild(test11)}catch(e){}\n"
	break;

case 211:
	SCRIPT += "try{document.documentElement.innerText+='A'}catch(e){}\n"
	break;

case 212:
	SCRIPT += "try{document.documentElement.innerHTML='A'}catch(e){}\n"
	break;
	
case 213:
	SCRIPT +="try{test1.innerHTML = 'A'}catch(e){}\n"
	break;
	
case 214:
	SCRIPT += "try{test11.style.display = 'none'}catch(e){}\n"
	break;

case 215:
	SCRIPT += "try{test1.style.display = 'none'}catch(e){}\n"
	break;

case 216:
	SCRIPT += "try{test1['"+ra(NODE)+"'](test11)}catch(e){}\n"
	break;

case 217:
	SCRIPT += "try{test1['"+ra(NODE)+"'](test11)}catch(e){}\n"
	break;
	
case 218:
	SCRIPT += "try{document.execCommand('delete',null,true)}catch(e){}\n"
	break;

case 219:
	SCRIPT += "try{document.execCommand('removeformat', null, true);}catch(e){}\n"
	break;


case 220:
		SCRIPT += "try{document.selection.empty()}catch(e){}\n"
		break;
case 221:
		SCRIPT += "try{document.selection.clear()}catch(e){}\n"
		break;

		
case 222:
		SCRIPT += "try{document.body.offsetHeight;}catch(e){}\n"
		break;
case 223:
		SCRIPT += "try{test1.offsetHeight;}catch(e){}\n"
		break;
case 224:
		SCRIPT += "try{window['"+ra(WINDOW)+"']()}catch(e){}\n"
		break;
case 225:
		SCRIPT += "try{window['"+ra(WINDOW)+"'](0x100)}catch(e){}\n"
		break;
case 226:
		SCRIPT += "try{window['"+ra(WINDOW)+"'](0x1000,0x100)}catch(e){}\n"
		break;
case 227:
		SCRIPT += "try{window['"+ra(WINDOW)+"'](0x0100,0x0100)}catch(e){}\n"
		break;
case 228:	
		SCRIPT += "try{window['"+ra(WINDOW)+"']('#test5')}catch(e){}\n"
		break;
case 229:
		SCRIPT += "try{window.navigate('#test5')}catch(e){}\n"
		break;
case 230:
		SCRIPT += "try{document.selection.createRange().pasteHTML('Some Text Can Do!!!!!!!');}catch(e){}\n"
		break;

case 231:
		SCRIPT += "try{document.selection.empty()}catch(e){}\n"
		break;
case 232:
		SCRIPT += "try{document.selection.clear()}catch(e){}\n"
		break;
case 233:
		SCRIPT += "try{test11.clientWidth}catch(e){}\n"
		break;
	
case 234:
		SCRIPT += "try{for(var i in test1){test1[i]}}catch(e){}\n"
		break;
		
case 235:
		SCRIPT += "try{for(var i in document.body){document.body[i]}}catch(e){}\n"
		break;

case 236:
		SCRIPT += "try{test1.setActive()}catch(e){}\n"
		break;

case 237:
		SCRIPT += "try{test1.doScroll('"+lib.ra(SCROLL)+"')}catch(e){}\n"
		break;
		
case 238:
		SCRIPT += "try{var test1 = document.getElementById('test1')\n"
		SCRIPT += "test1.scrollIntoView()}catch(e){}\n"
		break;
case 239:
		SCRIPT += "try{test1.innerText;}catch(e){}\n"
		break;
case 240:
SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('beforebegin','AAAA');}catch(e){}\n"
	break;

case 241:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('afterbegin','AAAA');}catch(e){}\n"
	break;

case 242:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('beforeend','AAAA');}catch(e){}\n"
	break;
case 243:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('afterend','AAAA');}catch(e){}\n"
	break;

case 244:
SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('beforebegin','<"+lib.ra(lib.HTML)+">');}catch(e){}\n"
	break;

case 245:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('afterbegin','<"+lib.ra(lib.HTML)+">');}catch(e){}\n"
	break;

case 246:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('beforeend','<"+lib.ra(lib.HTML)+">');}catch(e){}\n"
	break;
case 247:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('afterend','<"+lib.ra(lib.HTML)+">');}catch(e){}\n"
	break;


case 248:
SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('beforebegin','<svg><"+lib.ra(lib.SVG)+"></svg>');}catch(e){}\n"
	break;

case 249:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('afterbegin','<svg><"+lib.ra(lib.SVG)+"></svg>');}catch(e){}\n"
	break;

case 250:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('beforeend','<svg><"+lib.ra(lib.SVG)+"></svg>');}catch(e){}\n"
	break;
case 251:
	SCRIPT += "try{t1=document.getElementById('test1');t1.insertAdjacentHTML('afterend','<svg><"+lib.ra(lib.SVG)+"></svg>');}catch(e){}\n"
	break;
case 252:
case 253:
case 254:
case 255:
case 256:
case 257:
		SCRIPT += "try{document.write('')}catch(e){}\n"
		break;

		
}





}//for



return SCRIPT;

}//function



module.exports.getRandomHtml = getRandomHtml
module.exports.createRandomDom = createRandomDom

