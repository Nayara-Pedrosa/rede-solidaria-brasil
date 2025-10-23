document.addEventListener('DOMContentLoaded',()=>{
 function maskCPF(v){return v.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2').slice(0,14)}
 function maskTel(v){v=v.replace(/\D/g,'');return v.length>10?v.replace(/(\d{2})(\d{5})(\d{4}).*/,'($1) $2-$3'):v.replace(/(\d{2})(\d{4})(\d{0,4}).*/,'($1) $2-$3')}
 function maskCEP(v){return v.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2').slice(0,9)}
 ['cpf','telefone','cep'].forEach(id=>{let el=document.getElementById(id);if(el){el.addEventListener('input',e=>{let v=e.target.value;if(id==='cpf')v=maskCPF(v);if(id==='telefone')v=maskTel(v);if(id==='cep')v=maskCEP(v);e.target.value=v;});}});
});