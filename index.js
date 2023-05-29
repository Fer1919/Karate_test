function resultado() {

    let p1, p2, p3, p4, p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20, nota;
    
     
    
    //<!-- 1ª pregunta -->
    
    if (document.getElementById('p1').checked==true) {p1=1}
    
    else {p1=0}
    
    //<!-- 2ª pregunta -->
    
    if (document.getElementById('p6').checked==true) {p2=1}
    
    else {p2=0}
    
    //<!-- 3ª pregunta -->
    
    if (document.getElementById('p11').checked==true) {p3=1}
    
    else {p3=0}
    
    //<!-- 4ª pregunta -->
    
    if (document.getElementById('p16').checked==true) {p4=1}
    
    else {p4=0}
    
    //<!-- 5ª pregunta -->
    
    if (document.getElementById('p20').checked==true) {p5=1}
    
    else {p5=0}
    
     //<!-- 6ª pregunta -->
    
    if (document.getElementById('p23').checked==true) {p6=1}
    
    else {p6=0}
    
    //<!-- 7ª pregunta -->
    
    if (document.getElementById('p25').checked==true) {p7=1}
    
    else {p7=0}
    
    //<!-- 8ª pregunta -->
    
    if (document.getElementById('p31').checked==true) {p8=1}
    
    else {p8=0}
    
    //<!-- 9ª pregunta -->
    
    if (document.getElementById('p33').checked==true) {p9=1}
    
    else {p9=0}
    
    //<!-- 10ª pregunta -->
    
    if (document.getElementById('p39').checked==true) {p10=1}
    
    else {p10=0}

    //<!-- 11ª pregunta -->

    if (document.getElementById('p43').checked==true) {p11=1}
    
    else {p11=0}

  //<!-- 12ª pregunta -->

  if (document.getElementById('p47').checked==true) {p12=1}
    
  else {p12=0}
    
  //<!-- 13ª pregunta -->

  if (document.getElementById('p52').checked==true) {p13=1}
    
  else {p13=0}


  //<!-- 14ª pregunta -->
    
  if (document.getElementById('p55').checked==true) {p14=1}
    
  else {p14=0}
  
  //<!-- 15ª pregunta -->
  
  if (document.getElementById('p59').checked==true) {p15=1}
  
  else {p15=0}
  
  //<!-- 16ª pregunta -->
  
  if (document.getElementById('p63').checked==true) {p16=1}
  
  else {p16=0}
  
  //<!-- 17ª pregunta -->
  
  if (document.getElementById('p68').checked==true) {p17=1}
  
  else {p17=0}
  
  //<!-- 18ª pregunta -->
  
  if (document.getElementById('p72').checked==true) {p18=1}
  
  else {p18=0}

   //<!-- 19ª pregunta -->
  
   if (document.getElementById('p75').checked==true) {p19=1}
  
   else {p19=0}
  
   //<!-- 20ª pregunta -->
  
  if (document.getElementById('p77').checked==true) {p20=1}
  
  else {p6=0}

       
    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12+p13+p14+p15+p16+p17+p18+p19+p20;
    
    alert(" Aciertos: " + nota);
    
    //location.reload();
    if (nota==20){
        alert ('Obtuvíste una puntuación perfecta!!!!!! //APP BY NANDO SCRIPT')
    }
    else{
        alert('Debes estudiar mas //APP BY NANDO SCRIPT')
    }
    
    }