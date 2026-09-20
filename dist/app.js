const runBtn=document.querySelector('#runBtn');const resetBtn=document.querySelector('#resetBtn');const timeline=document.querySelector('#timeline');const result=document.querySelector('#result');const balance=document.querySelector('#balance');
const steps=[
  ['Discovering service','ContractGuard supports x402 on Base Sepolia','FOUND','pay'],
  ['Requesting contract analysis','HTTP 402 Payment Required · Price: 0.05 USDC','402','wait'],
  ['Verifying delegated credential','Service allowed · Credential valid','VERIFIED','ok'],
  ['Checking spending policy','0.05 USDC < 0.10 USDC per-call limit','ALLOWED','ok'],
  ['Signing x402 payment','Payment confirmed · tx 0x4e91…a72c','PAID','pay'],
  ['Receiving intelligence','Encrypted risk report unlocked','COMPLETE','ok']
];
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function addStep(item,index){const el=document.createElement('div');el.className='step';el.innerHTML=`<span class="step-num">0${index+1}</span><div class="step-main"><b>${item[0]}</b><span>${item[1]}</span></div><span class="pill ${item[3]}">${item[2]}</span>`;timeline.appendChild(el)}
async function run(){runBtn.disabled=true;document.querySelector('#emptyState')?.remove();result.hidden=true;timeline.innerHTML='';balance.textContent='3.42';for(let i=0;i<steps.length;i++){addStep(steps[i],i);await sleep(i===0?720:850)}balance.textContent='3.37';result.hidden=false;runBtn.querySelector('span').textContent='Complete';}
function reset(){timeline.innerHTML='<div class="empty-state" id="emptyState"><div class="orb">A</div><p>Ready to analyze</p><span>The agent will discover a paid API, verify its delegated authority, and complete payment autonomously.</span></div>';result.hidden=true;balance.textContent='3.42';runBtn.disabled=false;runBtn.querySelector('span').textContent='Run agent';}
runBtn.addEventListener('click',run);resetBtn.addEventListener('click',reset);document.querySelector('#txLink').addEventListener('click',e=>e.preventDefault());
