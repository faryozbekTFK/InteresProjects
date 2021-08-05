const A = document.getElementById("a");
const B = document.getElementById("b");
const C = document.getElementById("c");
const RESULT = document.getElementById("result");
const BTN = document.getElementById("btn");

function KvTenglama() {
  let D = 0,
    x1 = 0,
    x2 = 0,
    x = 0;
  Aval = parseInt(A.value);
  Bval = parseInt(B.value);
  Cval = parseInt(C.value);
  D = Math.pow(Bval, 2) - 4 * Aval * Cval;
  if (D > 0) {
    x1 = (-Bval - Math.sqrt(D)) / (2 * Aval);
    x2 = (-Bval + Math.sqrt(D)) / (2 * Aval);
    RESULT.innerText = `D = ${D}
                        x1 = ${x1}
                        x2 = ${x2}`;
  } else if (D == 0) {
    x = -Bval / (2 * Aval);
    RESULT.innerText = `D = ${D}
                            x = ${x}`;
  } else
    RESULT.innerText = `D = ${D}
             Tenglama ildizga ega emas.`;
}

BTN.onclick = function () {
    if (A.value&&B.value&&C.value) KvTenglama(); else
    RESULT.innerText = "Qiymatlarni kiriting.";
};
