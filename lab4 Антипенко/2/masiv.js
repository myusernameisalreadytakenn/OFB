
const calculateButton = document.getElementById('calculate');
const input = document.getElementById('input');


const maxPar = document.getElementById('result-1');
const minPar = document.getElementById('result-2');

const masivVhod = document.getElementById('result-3');
const masivVihod = document.getElementById('result-4');

let array = [];

const onInputChange = () => (e) => {
  const arrayString = e.target.value;
  if (!arrayString) return;

  array = arrayString.split(',');
};

const onCalculateClick = () => {
  if (array.length < 2) {
    return;
  }
  masivVhod.innerHTML = array;
  console.log(array);
  let parArray = array.filter((_, index)=>index%2==0);
  console.log(parArray);
  let maxEl= Math.max.apply(null, parArray);
  console.log(maxEl);
  let minEl= Math.min.apply(null, parArray);
  console.log(minEl);

  let index1 = array.indexOf(maxEl.toString());
  let index2 = array.indexOf(minEl.toString());
  let newArray = array;

    if (index1 !== -1) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    console.log(newArray);

    maxPar.innerHTML = maxEl;
    minPar.innerHTML = minEl;
    masivVihod.innerHTML = newArray;
}


input.addEventListener('change', onInputChange(array));
calculateButton.addEventListener('click', onCalculateClick);
