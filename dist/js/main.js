"use strict";(function a(){if(chrome.runtime.lastError)return console.warn(chrome.runtime.lastError.message),void setTimeout(a,1e3);const b=window.location;b.pathname.startsWith("/user/")?extendUserPage():b.pathname.startsWith("/status")?extendStatusPage():b.pathname.startsWith("/group/list")?extendGroupListPage():b.pathname.startsWith("/group/member/")?extendGroupMemberPage():b.pathname.startsWith("/board/")?extendBoardPage():b.pathname.startsWith("/vs/")?extendVs():function(a){return a.startsWith("/my/files")||a.startsWith("/modify")||a.startsWith("/password/change")||a.startsWith("/setting/")||a.startsWith("/support")}(b.pathname)&&extendSettingPage(),extendTheme(),extendWide(),function(){function a(a){for(let b=0;3>b;++b){if(a.classList.contains("result-text"))return a;a=a.parentNode}return null}function b(a,b){const c=new MutationObserver(function(a){a.forEach(function(a){b(a.target)})});c.observe(a,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}function c(a,b){a.parentNode.appendChild(b);const c=Utils.createElement("span",{class:"result-latest",style:"float: right;color: #dd4124;"});a.parentNode.appendChild(c)}function d(a,b){const c=(a.getAttribute("class")||"").trim();if(!c.startsWith("result-"))return;const d=a.innerText,e=a.closest("td");Config.load(c,c=>{if(!c)e&&e.setAttribute("class","result"),a.style.display="",b.style.display="none";else{e&&e.setAttribute("class","result has-fake"),a.style.display="none",b.style.display="";const f=(d.match(/[+-]?\d+(\.\d+)?/g)||[""])[0],g=":number:";if(-1!==c.indexOf(g))b.innerHTML=c.replaceAll(g,f);else if(""!==f){const a=(d.match(/점|%/)||[""])[0],e=c.lastIndexOf("</");b.innerHTML=c.substring(0,e)+" ("+f+a+")"+c.substring(e,c.length)}else b.innerHTML=c}});const f=a.closest("tr").id,g=e.querySelector(".result-latest");g.innerText=a.classList.contains("result-ac")||a.classList.contains("result-pac")?"":window.bojext&&void 0!==window.bojext[f]?"("+window.bojext[f]+"%)":""}document.querySelectorAll("span[class^=result-]").forEach(e=>{if(e.classList.contains("result-text"))return;const f=document.createElement("span");f.setAttribute("class","result-fake-text");const g=a(e);null===g?c(e,f):(c(g,f),b(g,a=>{const b=a.querySelector("span")||a;if(b.classList.contains("result-judging")){const a=b.closest("tr").id,c=parseInt(b.innerText.match(/\d+/))||null;window.bojext||(window.bojext={}),null!==c&&(window.bojext[a]=c)}d(b,f)})),d(e,f)})}(),extendProblemPage()})();