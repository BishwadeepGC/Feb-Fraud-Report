// Shared nav + modal + scroll reveal
(function(){
  // Reveal on scroll
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  },{threshold:0.08});
  document.querySelectorAll('.fi').forEach(el=>io.observe(el));

  // Immediate visible
  window.addEventListener('load',()=>{
    document.querySelectorAll('.fi').forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in');
    });
  });

  // Modal close on overlay click
  document.addEventListener('click',e=>{
    if(e.target.classList.contains('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });
})();

function openModal(id){ document.getElementById(id).classList.add('open'); document.body.style.overflow='hidden'; }
function closeModal(){ document.querySelectorAll('.modal-overlay').forEach(m=>m.classList.remove('open')); document.body.style.overflow=''; }

// Counter
function counter(el, target, prefix='', suffix='', dur=1800){
  let start=null;
  const step=ts=>{
    if(!start)start=ts;
    const p=Math.min((ts-start)/dur,1);
    const e=1-Math.pow(1-p,4);
    const v=Math.floor(e*target);
    el.textContent=prefix+(v>=1000?v.toLocaleString():v)+suffix;
    if(p<1)requestAnimationFrame(step);
    else el.textContent=prefix+target.toLocaleString()+suffix;
  };
  requestAnimationFrame(step);
}

// Chart defaults
if(typeof Chart!=='undefined'){
  Chart.defaults.font.family="'Outfit',sans-serif";
  Chart.defaults.color='#8899b0';
  Chart.defaults.plugins.legend.labels.padding=16;
  Chart.defaults.plugins.legend.labels.usePointStyle=true;
  Chart.defaults.plugins.legend.labels.pointStyleWidth=10;
}
const gc='rgba(26,40,64,0.7)'; // grid color
