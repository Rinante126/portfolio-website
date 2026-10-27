const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const prefersReduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const fine=matchMedia('(pointer:fine)').matches;
// Editable kinetic hero typography. Press E anywhere outside a form field.
function setName(el,value){el.textContent='';el.dataset.name=value;[...value].forEach((letter,i)=>{const outer=document.createElement('span');outer.className='char-wrap';const inner=document.createElement('span');inner.className='char';inner.style.setProperty('--char-index',i);inner.textContent=letter===' '?'\u00a0':letter;outer.append(inner);el.append(outer)});if(prefersReduced) $$('.char').forEach(c=>c.style.animation='none')}
setName($('#firstName'),'RINANTE');setName($('#lastName'),'ORWA');document.addEventListener('keydown',e=>{if(e.key.toLowerCase()!=='e'||e.altKey||e.ctrlKey||e.metaKey||['INPUT','TEXTAREA'].includes(document.activeElement?.tagName))return;const value=prompt('Edit your hero name (first and last):',`${$('#firstName').dataset.name} ${$('#lastName').dataset.name}`);if(!value?.trim())return;const parts=value.trim().toUpperCase().split(/\s+/);setName($('#firstName'),parts.shift().slice(0,14));setName($('#lastName'),(parts.join(' ')||' ').slice(0,18))});
// Word reveal, using safe text nodes rather than HTML interpolation.
const manifesto=$('#manifestoStatement');const words=manifesto.textContent.trim().split(/\s+/);manifesto.textContent='';words.forEach((w,i)=>{const mask=document.createElement('span');mask.className='word-mask';const inner=document.createElement('span');inner.className='word-inner';inner.style.setProperty('--word-index',i);inner.textContent=w;mask.append(inner);manifesto.append(mask,document.createTextNode(' '))});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}})},{threshold:.2});$$('.reveal, .manifesto-statement').forEach(x=>observer.observe(x));
// Custom cursor with eased center and context labels.
let mx=innerWidth/2,my=innerHeight/2,dx=mx,dy=my,rx=mx,ry=my;const dot=$('#cursorDot'),ring=$('#cursorRing'),cursorText=$('#cursorText');let cursorLabel='';if(fine&&!prefersReduced){document.body.classList.add('cursor-ready');window.addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;let target=e.target.closest('.project,.marquee,.work-track-viewport,a,button');cursorLabel=target?.classList.contains('project')?'VIEW':target?.classList.contains('marquee')?'LAB':target?.classList.contains('work-track-viewport')?'DRAG':target?'↗':'';cursorText.textContent=cursorLabel;ring.classList.toggle('active',!!target)},{passive:true});window.addEventListener('blur',()=>{dot.style.opacity=ring.style.opacity=0});window.addEventListener('focus',()=>{dot.style.opacity=ring.style.opacity=1})}
// Scroll physics provide a smoothed value for effects without hijacking native accessible scroll.
let smoothScroll=window.scrollY,scrollValue=window.scrollY;let progress=$('#progress');window.addEventListener('scroll',()=>{scrollValue=window.scrollY},{passive:true});
// Magnetic buttons within 120px of each center.
const magnets=$$('.magnetic');let magneticEnabled=fine&&!prefersReduced;function updateMagnets(){if(!magneticEnabled)return;for(const el of magnets){const r=el.getBoundingClientRect();const x=mx-(r.left+r.width/2),y=my-(r.top+r.height/2);const dist=Math.hypot(x,y);el.style.transform=dist<120?`translate3d(${x*.35}px,${y*.35}px,0)`:'translate3d(0,0,0)'}}
// Live fluid canvas: three soft radial blobs, moving on sinusoidal orbits and following the pointer.
const canvas=$('#fluidCanvas'),ctx=canvas.getContext('2d',{alpha:true});let cw=0,ch=0,dpr=1,blobMX=.5,blobMY=.5,targetBlobX=.5,targetBlobY=.5;function resizeCanvas(){const r=canvas.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,2);cw=r.width;ch=r.height;canvas.width=Math.round(cw*dpr);canvas.height=Math.round(ch*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)}resizeCanvas();new ResizeObserver(resizeCanvas).observe(canvas);window.addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect();targetBlobX=(e.clientX-r.left)/Math.max(r.width,1);targetBlobY=(e.clientY-r.top)/Math.max(r.height,1)},{passive:true});function drawFluid(t){if(!cw||!ch)return;blobMX+=(targetBlobX-blobMX)*.06;blobMY+=(targetBlobY-blobMY)*.06;ctx.clearRect(0,0,cw,ch);const scale=Math.min(cw,ch),sec=t*.001;const blobs=[{c:[229,255,0],x:.43,y:.38,r:.45,ph:0},{c:[139,92,246],x:.63,y:.53,r:.42,ph:2.1},{c:[6,182,212],x:.36,y:.63,r:.39,ph:4.3}];ctx.save();ctx.filter='blur(40px)';ctx.globalCompositeOperation='screen';for(const b of blobs){const x=cw*(b.x+(blobMX-.5)*.22)+Math.cos(sec*.45+b.ph)*Math.min(scale*.19,100);const y=ch*(b.y+(blobMY-.5)*.20)+Math.sin(sec*.57+b.ph)*Math.min(scale*.18,100);const radius=scale*b.r*(1+Math.sin(sec*.8+b.ph)*.07);const g=ctx.createRadialGradient(x,y,0,x,y,radius);g.addColorStop(0,`rgba(${b.c.join(',')},.93)`);g.addColorStop(.35,`rgba(${b.c.join(',')},.68)`);g.addColorStop(1,`rgba(${b.c.join(',')},0)`);ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fill()}ctx.restore()}
// Horizontal gallery: pointer drag + friction/momentum, keyboard-accessible arrow buttons.
const viewport=$('#workViewport'),track=$('#workTrack');let pos=0,velocity=0,dragging=false,lastX=0,lastT=0,dragDistance=0;function bounds(){return Math.max(0,track.scrollWidth-viewport.clientWidth)}function clampPos(v){return Math.max(-bounds(),Math.min(0,v))}function moveGallery(delta){pos=clampPos(pos+delta);velocity=0;track.style.transform=`translate3d(${pos}px,0,0)`}$('#workPrev').addEventListener('click',()=>moveGallery(Math.min(450,viewport.clientWidth*.85)));$('#workNext').addEventListener('click',()=>moveGallery(-Math.min(450,viewport.clientWidth*.85)));viewport.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;dragging=true;dragDistance=0;lastX=e.clientX;lastT=performance.now();velocity=0;viewport.classList.add('dragging');viewport.setPointerCapture(e.pointerId)});viewport.addEventListener('pointermove',e=>{if(!dragging)return;const now=performance.now(),dx=e.clientX-lastX,dt=Math.max(1,now-lastT);dragDistance+=Math.abs(dx);pos=clampPos(pos+dx);velocity=dx/Math.max(1,dt/16);lastX=e.clientX;lastT=now;track.style.transform=`translate3d(${pos}px,0,0)`});function endDrag(){dragging=false;viewport.classList.remove('dragging')}viewport.addEventListener('pointerup',endDrag);viewport.addEventListener('pointercancel',endDrag);viewport.addEventListener('lostpointercapture',endDrag);viewport.addEventListener('click',e=>{if(dragDistance>6){e.preventDefault();e.stopPropagation()}},true);window.addEventListener('resize',()=>{pos=clampPos(pos);track.style.transform=`translate3d(${pos}px,0,0)`});
// 3D card tilt and nested art displacement (no external assets).
$$('.project').forEach((card,i)=>{const shell=card.querySelector('.project-shell'),art=card.querySelector('.art-shape');card.addEventListener('pointermove',e=>{if(!fine||prefersReduced||dragging)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;shell.style.transform=`rotateX(${-y*12}deg) rotateY(${x*12}deg)`;if(art)art.style.translate=`${x*12}px ${y*12}px`});card.addEventListener('pointerleave',()=>{shell.style.transform='';if(art)art.style.translate=''});card.dataset.index=i});
$$('.cap-card').forEach(card=>card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--glow-x',`${e.clientX-r.left}px`);card.style.setProperty('--glow-y',`${e.clientY-r.top}px`)}));
// Two identical halves guarantee a seamless -50% animation loop.
const labItems=['PROVA OS','AUXANO EVENTS','PYTHON LAB','LEARNING VERIFICATION','SECURE APIS','FULL-STACK SYSTEMS'];function makeMarquee(el,reverse=false){const order=reverse?[...labItems].reverse():labItems;for(let k=0;k<2;k++){const group=document.createElement('div');group.style.display='flex';group.style.flexShrink='0';group.setAttribute('aria-hidden',k?'true':'false');order.forEach(label=>{const unit=document.createElement('span');unit.className='marquee-unit';const title=document.createElement('span');title.className='marquee-name';title.textContent=label;title.dataset.preview=label;const star=document.createElement('span');star.className='marquee-star';star.textContent='✳';unit.append(title,star);group.append(unit)});el.append(group)}}makeMarquee($('#marqueeA'));makeMarquee($('#marqueeB'),true);const preview=$('#labPreview');$$('.marquee-name').forEach(name=>{name.addEventListener('pointerenter',()=>{if(!fine)return;preview.textContent=name.dataset.preview;preview.classList.add('visible')});name.addEventListener('pointerleave',()=>preview.classList.remove('visible'))});window.addEventListener('pointermove',e=>{if(preview.classList.contains('visible')){preview.style.left=`${Math.min(innerWidth-120,Math.max(120,e.clientX+65))}px`;preview.style.top=`${Math.min(innerHeight-100,Math.max(110,e.clientY-90))}px`}},{passive:true});
// Footer mouse-reactive lettering.
const contactTitle=$('#contactTitle');function wrapTextNodes(node){[...node.childNodes].forEach(child=>{if(child.nodeType===3){const frag=document.createDocumentFragment();[...child.textContent].forEach(letter=>{if(letter===' '){frag.append(document.createTextNode(' '));return}const span=document.createElement('span');span.className='warp-letter';span.textContent=letter;frag.append(span)});node.replaceChild(frag,child)}else if(child.nodeType===1&&child.tagName!=='BR')wrapTextNodes(child)})}wrapTextNodes(contactTitle);contactTitle.addEventListener('pointermove',e=>{if(!fine||prefersReduced)return;const r=contactTitle.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;$$('.warp-letter').forEach((el,i)=>{el.style.transform=`translateX(${Math.sin(i*.6+x*5)*x*4}px) skewX(${x*3}deg)`})});contactTitle.addEventListener('pointerleave',()=>$$('.warp-letter').forEach(el=>el.style.transform=''));
// Budget selector and honest email-client submission: no invented server endpoint.
let chosenBudget='Not specified';$$('.budget-option').forEach(b=>b.addEventListener('click',()=>{$$('.budget-option').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));chosenBudget=b.dataset.budget}));$('#contactForm').addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const name=$('#senderName').value.trim(),email=$('#senderEmail').value.trim(),message=$('#senderMessage').value.trim();const body=`Collaboration inquiry for Rinante Orwa\nName: ${name}\nEmail: ${email}\nTopic: ${chosenBudget}\n\nMessage:\n${message}`;try{await navigator.clipboard.writeText(body);$('#formStatus').textContent='Message copied. You can paste it into an email or direct message; nothing was sent.'}catch{const box=$('#senderMessage');box.value=body;box.focus();box.select();$('#formStatus').textContent='Clipboard access unavailable. Your prepared message is selected; copy it manually.'}});
// Single animation clock for scroll, inertia, cursor and canvas.
let lastFrame=0;function frame(t){const dt=Math.min(3,(t-lastFrame)/16.67||1);lastFrame=t;const factor=prefersReduced?1:1-Math.pow(.92,dt);smoothScroll+=(scrollValue-smoothScroll)*factor;const docHeight=Math.max(1,document.documentElement.scrollHeight-innerHeight);progress.style.transform=`scaleX(${Math.min(1,scrollValue/docHeight)})`;if(fine&&!prefersReduced){dx+=(mx-dx)*.35;dy+=(my-dy)*.35;rx+=(mx-rx)*.15;ry+=(my-ry)*.15;dot.style.transform=`translate3d(${dx}px,${dy}px,0) translate(-50%,-50%)`;ring.style.transform=`translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;updateMagnets()}if(!dragging&&Math.abs(velocity)>.05){pos=clampPos(pos+velocity*dt);velocity*=Math.pow(.92,dt)}else if(!dragging)velocity=0;track.style.transform=`translate3d(${pos}px,0,0)`;if(!prefersReduced)drawFluid(t);else if(!canvas.dataset.drawn){drawFluid(0);canvas.dataset.drawn='1'}requestAnimationFrame(frame)}requestAnimationFrame(frame);

// Project interactions: real keyboard accessibility, case studies and persisted personalization.
const caseDialog=$('#caseDialog');
const caseStudies=[
 {title:'PROVA OS',category:'AI Learning Verification',year:'2026',description:'An educational software project for Philippine secondary learners, designed around a central question: how can students demonstrate understanding without relying on AI-generated answers? Work spans practice flows, progress, authentication, and learning-verification research. Development is ongoing.',tags:['Education','Learning Verification','PWA','In Development'],status:'In development',repository:'https://github.com/Rinante126/PROVA-OS'},
 {title:'AUXANO',category:'School Event Management',year:'2026',description:'A school event-management system concept for organizing activities, schedules, participants and coordination workflows. Presented as a project in planning, without claims of completed functionality.',tags:['Event Management','School Operations','Web Application','Planning'],status:'Planning',repository:null},
 {title:'TrackMyRide',category:'Student Vehicle Platform',year:'2026',description:'A planned student-oriented vehicle management system emphasizing account boundaries, data protection, practical APIs, and operational costs. The product scope and security requirements are under development.',tags:['Product Planning','Security','APIs','Concept'],status:'Planning',repository:null}
];
let modalTrigger=null;
function openCase(index){const project=caseStudies[index];if(!project)return;modalTrigger=document.activeElement;$('#caseTag').textContent=`0${index+1} / PROJECT DETAILS`;$('#caseTitle').textContent=project.title;$('#caseDescription').textContent=project.description;$('#caseStatus').textContent=project.status;const sourceImg=$$('.project-photo')[index];const caseImg=$('#caseImage');caseImg.src=sourceImg?.currentSrc||sourceImg?.src||'';caseImg.alt=sourceImg?.alt||'Project editorial image';caseImg.onerror=()=>{$('#caseMedia').style.display='none'};$('#caseMedia').style.display='';const repo=$('#caseRepo');repo.hidden=!project.repository;if(project.repository)repo.href=project.repository;$('#caseCaveat').textContent=project.repository?'Repository is an external source; features may still be under development.':'Public repository not yet supplied for this project.';const meta=$('#caseMetadata');meta.replaceChildren();[project.category,project.year,...project.tags].forEach(label=>{const el=document.createElement('span');el.textContent=label;meta.append(el)});if(!caseDialog.open)caseDialog.showModal();$('#caseClose').focus()}
$$('.project').forEach((card,index)=>{card.setAttribute('tabindex','0');card.setAttribute('role','button');card.setAttribute('aria-label',`View ${caseStudies[index].title} concept details`);card.addEventListener('click',()=>{if(dragDistance>6)return;openCase(index)});card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCase(index)}})});
$('#caseClose').addEventListener('click',()=>caseDialog.close());caseDialog.addEventListener('click',e=>{if(e.target===caseDialog)caseDialog.close()});caseDialog.addEventListener('close',()=>{if(modalTrigger?.focus)modalTrigger.focus()});
// Support arrow-key gallery controls when viewing Work, excluding form fields.
document.addEventListener('keydown',e=>{if(caseDialog.open||e.altKey||e.ctrlKey||e.metaKey||['INPUT','TEXTAREA'].includes(document.activeElement?.tagName))return;if(document.activeElement?.isContentEditable)return;if(document.activeElement&&document.activeElement!==document.body&&!viewport.contains(document.activeElement))return;const r=viewport.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;if(e.key==='ArrowRight'){e.preventDefault();moveGallery(-Math.min(450,viewport.clientWidth*.85))}else if(e.key==='ArrowLeft'){e.preventDefault();moveGallery(Math.min(450,viewport.clientWidth*.85))}});
// Local-only customization; no network transmission.
try{const saved=JSON.parse(localStorage.getItem('orwa-personal-name')||'null');if(saved&&typeof saved.first==='string'&&typeof saved.last==='string'){setName($('#firstName'),saved.first.slice(0,14));setName($('#lastName'),saved.last.slice(0,18))}}catch{}
document.addEventListener('keyup',e=>{if(e.key.toLowerCase()!=='e'||e.altKey||e.ctrlKey||e.metaKey||['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)||document.activeElement?.isContentEditable)return;try{localStorage.setItem('orwa-personal-name',JSON.stringify({first:$('#firstName').dataset.name,last:$('#lastName').dataset.name}))}catch{}});

// Gmail editor: avoid publishing a guessed personal address.
(()=>{const link=document.getElementById('publicEmail');const edit=document.getElementById('editGmail');const hint=document.getElementById('gmailHint');if(!link||!edit)return;const key='orwa_portfolio_gmail';const defaultEmail='orwarinante1@gmail.com';function render(email){if(email){link.textContent=email+' ↗';link.href='mailto:'+email;hint.textContent='Contact me directly by email for projects, collaboration, or opportunities.';}else{link.textContent='ADD YOUR GMAIL ↗';link.href='#contact';}}let saved=defaultEmail;try{saved=localStorage.getItem(key)||defaultEmail;}catch{}render(saved);function configure(){const proposed=prompt('Enter the Gmail address you want displayed publicly:',saved);if(proposed===null)return;const email=proposed.trim();if(!/^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(email)){alert('Enter a valid @gmail.com address.');return;}saved=email;try{localStorage.setItem(key,email);}catch{}render(email);}edit.addEventListener('click',configure);link.addEventListener('click',e=>{if(!saved){e.preventDefault();configure();}});})();
// one-click contact address copy, with a fallback for restricted local-file browsers.
(()=>{const btn=document.getElementById('copyMail');const feedback=document.getElementById('copyFeedback');const link=document.getElementById('publicEmail');if(!btn||!link||!feedback)return;btn.addEventListener('click',async()=>{const email=(link.getAttribute('href')||'').replace(/^mailto:/,'').split('?')[0];if(!email)return;try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(email)}else{const helper=document.createElement('textarea');helper.value=email;helper.style.position='fixed';helper.style.opacity='0';document.body.append(helper);helper.select();const copied=document.execCommand('copy');helper.remove();if(!copied)throw new Error('Clipboard unavailable')}feedback.textContent='Copied!';}catch{feedback.textContent='Select the email address above to copy it.';}})})();
// Keep gallery controls synchronized with the card nearest the viewport center.
// Recalculate only when the gallery moves or the window resizes.
function initializeWorkIndicators() {
  const buttons = [...document.querySelectorAll('[data-work-index]')];
  const cards = [...document.querySelectorAll('#workTrack .project')];
  const activeLabel = document.getElementById('workActiveName');
  if (!buttons.length || !cards.length || !viewport || !track) return;

  const projectNames = cards.map((card) =>
    card.querySelector('.project-bottom h3')?.textContent?.trim() ||
    card.querySelector('h3')?.textContent?.trim() ||
    'PROJECT'
  );
  let updateQueued = false;

  function updateActiveIndicator() {
    updateQueued = false;
    const visibleCenter = viewport.getBoundingClientRect().left + viewport.clientWidth / 2;
    let nearest = 0;
    let bestDistance = Infinity;

    cards.forEach((card, index) => {
      const bounds = card.getBoundingClientRect();
      const distance = Math.abs(bounds.left + bounds.width / 2 - visibleCenter);
      if (distance < bestDistance) {
        nearest = index;
        bestDistance = distance;
      }
    });

    buttons.forEach((button, index) => {
      button.setAttribute('aria-current', String(index === nearest));
    });
    if (activeLabel) {
      const current = String(nearest + 1).padStart(2, '0');
      const total = String(cards.length).padStart(2, '0');
      activeLabel.textContent = `${current} / ${total} — ${projectNames[nearest]}`;
    }
  }

  function requestIndicatorUpdate() {
    if (updateQueued) return;
    updateQueued = true;
    requestAnimationFrame(updateActiveIndicator);
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const card = cards[index];
      if (!card) return;
      const desired = -(card.offsetLeft + card.offsetWidth / 2 - viewport.clientWidth / 2);
      pos = clampPos(desired);
      velocity = 0;
      track.style.transform = `translate3d(${pos}px,0,0)`;
      requestIndicatorUpdate();
    });
  });

  // The gallery is transform-driven; observe transforms instead of polling geometry.
  const movementObserver = new MutationObserver(requestIndicatorUpdate);
  movementObserver.observe(track, { attributes: true, attributeFilter: ['style'] });
  window.addEventListener('resize', requestIndicatorUpdate, { passive: true });
  requestIndicatorUpdate();
}
initializeWorkIndicators();

// The mailto action opens the user's email client; it does not silently transmit messages.
(()=>{
  const button=document.getElementById('openEmailDraft');
  if(!button)return;
  button.addEventListener('click',()=>{
    const form=document.getElementById('contactForm');if(!form.reportValidity())return;
    const name=document.getElementById('senderName').value.trim();
    const sender=document.getElementById('senderEmail').value.trim();
    const message=document.getElementById('senderMessage').value.trim();
    const selected=document.querySelector('.budget-option[aria-pressed="true"]');
    const topic=selected?selected.dataset.budget:'General collaboration';
    const dest='orwarinante1@gmail.com';
    const subject='Portfolio inquiry — '+topic;
    const body='Hi Rinante,\n\n'+message+'\n\nFrom: '+name+'\nReply to: '+sender+'\nTopic: '+topic;
    const url='mailto:'+dest+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    document.getElementById('formStatus').textContent='Opening your email app with the draft. Review it before sending.';
    window.location.href=url;
  });
})();