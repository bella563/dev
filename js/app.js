(()=>{var e,t={547:()=>{},988:()=>{document.addEventListener("DOMContentLoaded",(function(){for(var e=document.querySelector(".dots-container"),t=0,n=0;n<6;n++){var r=document.createElement("div");r.classList.add("dot"),0===n&&r.classList.add("active"),e.appendChild(r)}var o=document.querySelectorAll(".dot");setInterval((function(){t=(t+1)%6,o.forEach((function(e){return e.classList.remove("active")})),o[t].classList.add("active")}),2e3)})),document.addEventListener("DOMContentLoaded",(function(){for(var e=document.querySelectorAll(".slide"),t=document.querySelector(".slider"),n=document.querySelector(".prev"),r=document.querySelector(".next"),o=document.querySelector(".dots-container"),a=0,c=e.length,i=0;i<c;i++){var d=document.createElement("div");d.classList.add("dot"),0===i&&d.classList.add("active"),o.appendChild(d)}var s=document.querySelectorAll(".dot");function l(){t.style.transform="translateX(-".concat(100*a,"%)"),s.forEach((function(e){return e.classList.remove("active")})),s[a].classList.add("active")}function u(){a=(a+1)%c,l()}r.addEventListener("click",u),n.addEventListener("click",(function(){a=(a-1+c)%c,l()})),s.forEach((function(e,t){e.addEventListener("click",(function(){a=t,l()}))})),setInterval(u,4e3)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".valeur"),t=function(){e.forEach((function(e){e.getBoundingClientRect().top<window.innerHeight-50&&(e.style.opacity=1,e.style.transform="translateY(0)")}))};e.forEach((function(e){e.style.transform="translateY(30px)",e.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out"})),window.addEventListener("scroll",t),t()}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var c=1/0;for(l=0;l<e.length;l++){for(var[n,o,a]=e[l],i=!0,d=0;d<n.length;d++)(!1&a||c>=a)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(i=!1,a<c&&(c=a));if(i){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={847:0,252:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[c,i,d]=n,s=0;if(c.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(d)var l=d(r)}for(t&&t(n);s<c.length;s++)a=c[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[252],(()=>r(988)));var o=r.O(void 0,[252],(()=>r(547)));o=r.O(o)})();
  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("toggle-services");
    const toggleContent = document.querySelector(".toggle-content");
    const showBtn = document.querySelector(".btn-label");
    const hideBtn = document.querySelector(".btn-label.btn-hide");

    // Style initial
    toggleContent.style.display = "none";
    hideBtn.style.display = "none";

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        toggleContent.style.display = "flex"; // flex pour bootstrap grid
        toggleContent.style.flexWrap = "wrap";
        showBtn.style.display = "none";
        hideBtn.style.display = "inline-block";
      } else {
        toggleContent.style.display = "none";
        showBtn.style.display = "inline-block";
        hideBtn.style.display = "none";
      }
    });
  });


  const modal = document.getElementById("passwordModal");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function verifierMotDePasse() {
  const mdp = document.getElementById("passwordInput").value;
  if (mdp === "secret2025") 
    { 
    window.location.href = "annonce.html";
  } else {
    alert("Mot de passe incorrect !");
  }
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}

