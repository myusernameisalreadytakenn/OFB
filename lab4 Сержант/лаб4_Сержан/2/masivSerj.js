
const calculateButton = document.getElementById('calculate');
const input = document.getElementById('input');


const maxEl = document.getElementById('result-1');
const minPEl = document.getElementById('result-2');
const summa = document.getElementById('result-3');

const masivVhod = document.getElementById('result-4');
const masivVihod = document.getElementById('result-5');

let array = [];

const onInputChange = () => (e) => {
  const arrayString = e.target.value;
  if (!arrayString) return;

  array = arrayString.split(',').map(n => parseInt(n, 10));
};

const onCalculateClick = () => {
  if (array.length < 2) {
    return;
  }
  masivVhod.innerHTML = array;
  let parArray = array.filter((_, index)=>index%2!=0);
  let maxElAr= Math.max.apply(null, array);
  let minElAr= Math.min.apply(null, array);


  let summaMM = maxElAr + minElAr;
  function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  var sorted = quicksort(array);
  
    maxEl.innerHTML = maxElAr;
    minPEl.innerHTML = minElAr;
    summa.innerHTML = summaMM;
    masivVihod.innerHTML = sorted;
}


input.addEventListener('change', onInputChange(array));
calculateButton.addEventListener('click', onCalculateClick);
