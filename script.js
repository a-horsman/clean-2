  document.getElementById('y').textContent=new Date().getFullYear();
  document.getElementById('f').addEventListener('submit',e=>{
    e.preventDefault();
    const g=id=>document.getElementById(id).value.trim();
    if(!g('n')||!g('p')){document.getElementById(g('n')?'p':'n').focus();return;}
    document.getElementById('out').textContent='Name: '+g('n')+'\nPhone: '+g('p')+'\nService: '+g('s')+(g('m')?'\nNotes: '+g('m'):'');
    document.getElementById('done').style.display='block';
  });
