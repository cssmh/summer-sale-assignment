function reloadNow() {
  location.reload();
}
const totalTaka = document.getElementById("first-total-price");
const purchaseBtn = document.getElementById("purchase-btn");
// apply
const applyBtn = document.getElementById("apply-btn");
const discountPrice = document.getElementById("discount-price");
const finalPrice = document.getElementById("final-price");
// apply
let totalAmount = 0;

function Momen(btnId, priceId) {
  document.getElementById(btnId).addEventListener("click", function () {
    const value = document.getElementById(priceId).innerText;
    const floatValue = parseFloat(value);
    totalAmount = totalAmount + floatValue;
    const fixer = totalAmount.toFixed(2);

    const getTotalFirstFloat = document.getElementById("first-total-price");
    const finalPrice = document.getElementById("final-price");
    finalPrice.innerText = fixer;
    getTotalFirstFloat.innerText = fixer;

    // Purchase disable
    if (getTotalFirstFloat.innerText > 0) {
      purchaseBtn.disabled = false;
    } else {
      purchaseBtn.disabled = true;
    }
    // Purchase disable
    if (getTotalFirstFloat.innerText >= 200) {
      applyBtn.disabled = false;
    } else {
      applyBtn.disabled = true;
    }
  });
}
Momen("kitchen-one", "kitchen-one-price");
Momen("kitchen-two", "kitchen-two-price");
Momen("cooker", "cooker-price");
Momen("cap", "cap-price");
Momen("jersey", "jersey-price");
Momen("cates", "cates-price");
Momen("relax-chair", "relax-chair-price");
Momen("children-play", "children-play-price");
Momen("sofa", "sofa-price");
// First total amount added done

function Momin(idBtn, titleId) {
  document.getElementById(idBtn).addEventListener("click", function () {
    const li = document.createElement("li");
    const getTitle = document.getElementById(titleId).innerText;
    li.innerText = getTitle;
    const appendId = document.getElementById("append-id");
    appendId.appendChild(li);
  });
}
Momin("kitchen-one", "kitchen-one-title");
Momin("kitchen-two", "kitchen-two-title");
Momin("cooker", "cooker-title");
Momin("cap", "cap-title");
Momin("jersey", "jersey-title");
Momin("cates", "cates-title");
Momin("relax-chair", "relax-chair-title");
Momin("children-play", "children-play-title");
Momin("sofa", "sofa-title");
// append child added

// discount part
document.getElementById("apply-btn").addEventListener("click", function () {
  const discountPrice = document.getElementById("discount-price");
  const discountMathNotFixed = (20 / 100) * totalTaka.innerText;
  const discountMath = discountMathNotFixed.toFixed(2);
  const afterDiscountNotFixed = totalTaka.innerText - discountMath;
  const afterDiscount = afterDiscountNotFixed.toFixed(2);

  const finalPrice = document.getElementById("final-price");
  const couponCode = document.getElementById("coupon-code");
  const couponValue = couponCode.value;
  if (couponValue === "SELL200") {
    discountPrice.innerText = discountMath;
    finalPrice.innerText = afterDiscount;
  } else {
    return;
  }
});
// discount part end