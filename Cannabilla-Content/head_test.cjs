const C=require('./05-products-clean.json');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function head(url,tries=3){
  for(let a=0;a<tries;a++){
    const ctrl=new AbortController();const t=setTimeout(()=>ctrl.abort(),12000);
    try{const res=await fetch(url,{method:'HEAD',redirect:'manual',signal:ctrl.signal,headers:{'User-Agent':'Mozilla/5.0 (compatible; cannabilla-content-ref)'}});
      clearTimeout(t); if(res.status===429){await sleep(1500*(a+1));continue;} return res.status;
    }catch(e){clearTimeout(t); if(a===tries-1) return e.name==='AbortError'?'TIMEOUT':'ERR'; await sleep(1200);}
  } return 429;
}
(async()=>{
  const results=[];
  for(const p of C){
    const s=await head(p.publicUrl);
    results.push({id:p.id,slug:p.slug,enabled:p.enabled,status:s});
    process.stderr.write(s===200?'.':('['+s+']')); await sleep(550);
  }
  require('fs').writeFileSync('./_headtest.json',JSON.stringify(results,null,2));
  const ok=results.filter(r=>r.status===200).length;
  console.log('\n200:',ok,'/',results.length);
  results.filter(r=>r.status!==200).forEach(r=>console.log('  NON-200:',r.status,r.slug,'(enabled='+r.enabled+')'));
})();
