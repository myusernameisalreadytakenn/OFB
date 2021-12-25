
const calculateButton = document.getElementById('calculate');
const input = document.getElementById('input');


const maxMinPar = document.getElementById('result-1');
const maxMinNePar = document.getElementById('result-2');

const masivVhod = document.getElementById('result-3');
const masivVihod = document.getElementById('result-4');

let array = [];

const onInputChange = () => (e) => {
  const arrayString = e.target.value;
  if (!arrayString) return;

  array = arrayString.split(',').map(n => parseInt(n, 10));;
};

const onCalculateClick = () => {
  if (array.length < 2) {
    return;
  }
  masivVhod.innerHTML = array;

  let parArray = array.filter((_, index)=>index%2!=0);
  let maxEl= Math.max.apply(null, parArray);
  let minEl= Math.min.apply(null, parArray);
  
  let neParArray = array.filter((_, index)=>index%2==0);
  let maxEl2= Math.max.apply(null, neParArray);
  let minEl2= Math.min.apply(null, neParArray);

  
  
  const selectionSort = arr => {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
  };
  let newArr = selectionSort(array);
  maxMinPar.innerHTML = maxEl+"  и  "+minEl;
  maxMinNePar.innerHTML = maxEl2+"  и  "+minEl2;
  masivVihod.innerHTML = newArr;
}


input.addEventListener('change', onInputChange(array));
calculateButton.addEventListener('click', onCalculateClick);
