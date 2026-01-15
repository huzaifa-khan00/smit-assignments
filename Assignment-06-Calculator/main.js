let equalPress = 0;

function calculator(data){

   if(data == "equal"){
      equalPress++;

      let currentData = document.getElementById('current-display').innerText;

      let secValue = document.getElementById('second-display').innerText;

      document.getElementById('second-display').innerText = currentData;

      if(equalPress >= 2){
         document.getElementById('third-display').innerText = secValue;
         document.getElementById('current-display').innerText = currentData;
      }
      
      currentData = document.getElementById('current-display').innerText = eval(currentData);
      
      console.log(currentData)
      return;
   }if(data == "clear"){
      equalCount = 0;
      document.getElementById('current-display').innerText = '';
      document.getElementById('second-display').innerText = '';
      document.getElementById('third-display').innerText = '';
      return;
   }if(data == "del"){
      let del = document.getElementById('current-display').innerText;
      del = del.slice(0, del.length -1);
      document.getElementById('current-display').innerText = del;
      return;
   }

   document.getElementById('current-display').innerText += data;
   
}
