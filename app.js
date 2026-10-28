const $=s=>document.querySelector(s),bottle=$('#bottle'),dome=$('#dome');let b='Sunny Yellow',t='Golden Hour',rgb='255,214,10';
const pos=['10.5%','37.5%','63%','90%'];
function render(){dome.style.background=`radial-gradient(circle at 35% 30%,rgba(255,255,255,.7),rgba(${rgb},.35) 45%,rgba(${rgb},.6))`;dome.style.width=$('#size').value+'%';
$('#sum').textContent=`Your Sunbrelable: ${b} bottle · ${t} bubble · ${Math.round($('#size').value/100*8)} ft dome`;}
document.querySelectorAll('#bottleSw button').forEach(x=>x.onclick=()=>{document.querySelectorAll('#bottleSw button').forEach(y=>y.classList.remove('on'));x.classList.add('on');b=x.dataset.n;bottle.style.backgroundPosition=pos[x.dataset.i]+' 50%';render()});
document.querySelectorAll('#tintSw button').forEach(x=>x.onclick=()=>{document.querySelectorAll('#tintSw button').forEach(y=>y.classList.remove('on'));x.classList.add('on');t=x.dataset.n;rgb=x.dataset.c;render()});
$('#size').oninput=render;
function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('show');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('show'),2800)}
$('#add').onclick=()=>toast(`🫧 ${b} + ${t} added… to nowhere. Demo only — this product doesn't exist.`);
document.querySelectorAll('.buy').forEach(x=>x.onclick=()=>toast("☀️ Demo only — this product doesn't exist."));render();
