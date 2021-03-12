(()=>{"use strict";const e=function(e){const t=e.projectsList,n=e.activeProjectIndex,i=document.querySelector(".projectWrapper");i.innerHTML="";for(let e=0;e<t.length;e++){t[e].projectTitle;let d=document.createElement("div");d.setAttribute("class","projectButton"),d.textContent=t[e].projectTitle,n===e&&d.classList.add("pressed"),i.appendChild(d),console.log()}},t={projectsList:[],activeProjectIndex:0,add:function(e){this.projectsList.push(e)},activeProjectName:function(){return this.projectsList[this.activeProjectIndex].projectTitle}};class n{constructor(e){this.projectTitle=e,this.itemList=[]}add(e){this.itemList.push(e)}}const i=new n("Default");t.add(i);const d=new n("Coding");t.add(d);class l{constructor(e,t,n,i,d){this.title=e,this.notes=t,this.dateDue=n,this.priority=i,this.projectName=d,this.done=!1}}const c=new l("Heat pan","First thing in the morning","2021-03-09","High","Default"),s=new l("Make pancakes","...","2021-03-09","Low","Default");function o(e,t){console.log("Expand task"),console.log(e,t);const n=e,i=t.dateDue,d=`${i[8]}${i[9]}/${i[5]}${i[6]}/${i[2]}${i[3]}`;let l=document.createElement("div");l.classList.add("listLower");let c=document.createElement("div");c.classList.add("dueDate"),c.innerHTML=`<em>Date: </em>${d}`;let s=document.createElement("div");s.classList.add("priority"),s.innerHTML=`<em>Priority: </em>${t.priority}`,l.appendChild(c),l.appendChild(s),n.appendChild(l);let o=document.createElement("div");o.classList.add("listLower");let a=document.createElement("div");a.classList.add("notes"),a.innerHTML=`${t.notes}`,o.appendChild(a),n.appendChild(o);let r=document.createElement("div");r.classList.add("listLower");let u=document.createElement("div");u.classList.add("editButton"),u.textContent="Edit";let p=document.createElement("div");p.classList.add("deleteButton"),p.textContent="Delete",r.appendChild(u),r.appendChild(p),n.appendChild(r)}i.add(c),i.add(s),function(){function i(){let n=document.querySelectorAll(".projectButton");n=Array.from(n);for(let d=0;d<n.length;d++)n[d].addEventListener("click",(()=>{t.activeProjectIndex=d,e(t),i(),a(),c()}))}function d(e){let n,i,d,c,s=t.activeProjectName();if("click"===e.type||"Enter"===e.key){if(n=document.querySelector("#titleInput").value,i=document.querySelector("#notes").value,d=document.querySelector("#dateDue").value,c=document.querySelector("#priority").value,!n)return}else n=e;let o=new l(n,i,d,c,s),r=t.activeProjectIndex;t.projectsList[r].add(o),document.querySelector("#titleInput").value="",a()}function c(){let e=document.querySelector(".projectWrapper"),t=document.createElement("div");t.id="newProjectButton",t.classList.add("projectNewButton"),t.textContent="Add New Project",t.addEventListener("click",(()=>{e.removeChild(t);let n=function(e){let t=document.createElement("div");t.classList.add("projectNewButtonPressed"),e.appendChild(t);let n=document.createElement("input");n.setAttribute("class","projectInput"),n.setAttribute("type","text"),n.setAttribute("id","newProject"),t.appendChild(n),n.focus();let i=document.createElement("div");return i.setAttribute("class","addButton"),i.setAttribute("id","projectSubmit"),i.textContent="Add",e.appendChild(i),{input:n,buttonAdd:i}}(e);n.input.addEventListener("keypress",(function(e){if("Enter"===e.key){if(!n.input.value)return;s(n.input.value)}})),n.buttonAdd.addEventListener("click",(()=>{n.input.value&&s(n.input.value)}))})),e.appendChild(t)}function s(d){t.activeProjectIndex=t.projectsList.length;let l=new n(d);t.add(l),e(t),i(),a(),c()}function a(){let e=document.querySelector("#content");e.innerHTML="";let n=t.activeProjectIndex;for(let i=0;i<t.projectsList[n].itemList.length;i++){let d=document.createElement("li");d.classList.add("listItem");let l=document.createElement("div");l.classList.add("listUpper"),l.textContent=t.projectsList[n].itemList[i].title,d.appendChild(l);let c=document.createElement("div");c.classList.add("pressZone");let s=document.createElement("div");s.classList.add("itemTriangle"),c.appendChild(s),l.appendChild(c);let a=document.createElement("div");a.classList.add("listLowerSecton"),d.appendChild(a),c.addEventListener("click",(()=>{s.classList.contains("flipped")?(s.classList.remove("flipped"),a.innerHTML=""):(s.classList.add("flipped"),o(a,t.projectsList[n].itemList[i]))})),e.appendChild(d)}!function(){let e=document.querySelector("#content"),t=document.createElement("li");t.id="newTaskButton",t.classList.add("addNewItem"),t.textContent="Add new task",e.appendChild(t),t.addEventListener("click",(()=>{(function(){let e=document.querySelector("#content"),t=document.getElementById("newTaskButton");e.removeChild(t);let n=document.createElement("li");n.setAttribute("class","addNewItemExpand"),e.appendChild(n);let i=document.createElement("input");i.setAttribute("class","main"),i.setAttribute("type","text"),i.setAttribute("id","titleInput"),n.appendChild(i);let d=document.createElement("label");d.textContent="Due Date",n.appendChild(d);let l=new Date;l=l.toISOString().slice(0,10);let c=document.createElement("input");c.setAttribute("class","date"),c.setAttribute("type","date"),c.setAttribute("id","dateDue"),c.setAttribute("placeholder","Date"),c.setAttribute("value",`${l}`),n.appendChild(c);let s=document.createElement("label");s.textContent="Priority",n.appendChild(s);let o=document.createElement("select");o.setAttribute("class","priority"),o.setAttribute("id","priority"),n.appendChild(o);let a=document.createElement("option");a.setAttribute("value","High"),a.textContent="High",o.appendChild(a);let r=document.createElement("option");r.setAttribute("value","Medium"),r.textContent="Medium",o.appendChild(r);let u=document.createElement("option");u.setAttribute("value","Low"),u.textContent="Low",o.appendChild(u);let p=document.createElement("br");n.appendChild(p);let m=document.createElement("textarea");m.setAttribute("class","notes"),m.setAttribute("id","notes"),m.setAttribute("rows","4"),m.setAttribute("cols","50"),m.setAttribute("placeholder","Notes"),n.appendChild(m);let h=document.createElement("div");h.setAttribute("class","addButton"),h.setAttribute("id","submit"),h.textContent="Add",n.appendChild(h),document.getElementById("titleInput").focus()})(),submit.addEventListener("click",d),titleInput.addEventListener("keypress",(function(e){"Enter"===e.key&&d(e)}))}))}()}e(t),i(),a(),c()}()})();