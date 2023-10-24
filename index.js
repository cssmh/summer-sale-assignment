let totalAmount = 0;
// document.getElementById('kitchen-one').addEventListener('click', function(){
//     const value = document.getElementById('kitchen-one-price').innerText;
//     const floatValue = parseFloat(value);
//     totalAmount = totalAmount + floatValue;
//     const fixer = totalAmount.toFixed(2);

//     const getTotalFirstFloat = document.getElementById('first-total-price')
//     getTotalFirstFloat.innerText = fixer;
// })
function Momen(btnId, priceId) {
  document.getElementById(btnId).addEventListener("click", function () {
    const value = document.getElementById(priceId).innerText;
    const floatValue = parseFloat(value);
    totalAmount = totalAmount + floatValue;
    const fixer = totalAmount.toFixed(2);

    const getTotalFirstFloat = document.getElementById("first-total-price");
    getTotalFirstFloat.innerText = fixer;
  });
}
Momen('kitchen-one', 'kitchen-one-price')
Momen('kitchen-two', 'kitchen-two-price')
Momen('cooker', 'cooker-price')
Momen('cap', 'cap-price')
Momen('jersey', 'jersey-price')
Momen('cates', 'cates-price')
Momen('relax-chair', 'relax-chair-price')
Momen('children-play', 'children-play-price')
Momen('sofa', 'sofa-price')
// First total amount added done

