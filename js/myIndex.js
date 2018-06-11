window.onload=function(){
	var navbar=document.getElementById("navbar");
	var navbarLis=navbar.getElementsByTagName("li");
	var showSection=document.getElementById("showSection");
	var showSectionWrap=showSection.getElementsByClassName("wrap");
	var leftNav=document.getElementById("leftNav");
	var leftNavLis=leftNav.getElementsByTagName("li");
	var rightContent=document.getElementById("rightContent");
	var rightContentDivs=rightContent.children;
	
	showSectionWrap[0].style.display="block";

	for(var i=0;i<navbarLis.length;i++){
		var navbarLi=navbarLis[i];
		navbarLi.index=i;
		navbarLis[i].onclick=function(){
			for(var i=0;i<navbarLis.length;i++){
			navbarLis[i].className="";
			showSectionWrap[i].style.display="none";
			}
			if(this.index==0){
				this.className="header active";
			}
			else{
				this.className="active";
				navbarLis[0].className="header";
			}
			showSectionWrap[this.index].style.display="block";
		}
	}

	for(var i=0;i<leftNavLis.length;i++){
		var leftNavLi=leftNavLis[i];
		leftNavLi.index=i;
		leftNavLis[i].onclick=function(){
			for(var i=0;i<leftNavLis.length;i++){
			leftNavLis[i].className="";
			rightContentDivs[i].className="";
			}
			this.className="selected";
			rightContentDivs[this.index].className="chose";
			if(leftNavLis[1].className){
				
			};
		}
	}
	
	// 控制删除确认面板的隐藏
	var choseBodyTable=document.getElementById("choseBodyTable");
	var choseBodyTableDeleteRows=choseBodyTable.tBodies[0].rows;
	var choseBodyList=document.getElementById("choseBodyList");
	var choseBodyLis=choseBodyList.getElementsByTagName("li");
	

	for(var i=0;i<choseBodyTableDeleteRows.length;i++){
		var deleteDiv0=document.getElementById("deleteDiv0");
		var deletePanelFooter=deleteDiv0.getElementsByClassName("deletePanelFooter")[0];
		var deletePanelFooterButton=deletePanelFooter.getElementsByTagName("input");;
		var close0=document.getElementById("close0");
		var choseBodyTableDeleteRow=choseBodyTableDeleteRows[i];
		choseBodyTableDeleteRow.index=i;
		var j=0;
		var choseBodyTableDeleteRowsCells=choseBodyTableDeleteRows[i].cells[3];
		var choseBodyTableDeleteRowsCellsButton=choseBodyTableDeleteRowsCells.getElementsByTagName("input")[0];
		choseBodyTableDeleteRowsCellsButton.onclick=function(){
			deleteDiv0.style.display="block";
			j=this.parentNode.parentNode.index;
			//console.log(j);
		}
		
		close0.onclick=function(){
			deleteDiv0.style.display="none";
		}
		deletePanelFooterButton[0].onclick=function(){
			deleteDiv0.style.display="none";
		}
		deletePanelFooterButton[1].onclick=function(){
			deleteDiv0.style.display="none";
			choseBodyTableDeleteRows[j].style.display="none";
			//choseBodyTable.tBodies[0].removeChild(choseBodyTableDeleteRows[j]);
		}
	}
	for(var i=0;i<choseBodyLis.length;i++){
		var deleteDiv1=document.getElementById("deleteDiv1");
		var deletePanelFooter=deleteDiv1.getElementsByClassName("deletePanelFooter")[0];
		var deletePanelFooterButton=deletePanelFooter.getElementsByTagName("input");;
		var close1=document.getElementById("close1");
		var choseBodyLi=choseBodyLis[i];
		choseBodyLi.index=i;
		var j=0;
		choseBodyLi.onclick=function(){
			deleteDiv1.style.display="block";
			j=this.index;
			console.log(j);
		}
		
		close1.onclick=function(){
			deleteDiv1.style.display="none";
		}
		deletePanelFooterButton[0].onclick=function(){
			deleteDiv1.style.display="none";
		}
		deletePanelFooterButton[1].onclick=function(){
			deleteDiv1.style.display="none";
			choseBodyLis[j].style.display="none";
		}
	}
	
	
	
}