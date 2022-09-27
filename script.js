const getSubmit = document.getElementById("button");
getSubmit.addEventListener("click",() => {

  // mengambil element input
  const inputFields = document.getElementsByClassName("input");
  let isValid = false;
  const validInputs = Array.from(inputFields).filter((input) => {
    //  jika nilai dari input kosong maka bordercolor input akan berubah menjadi merah
    if (input.value == "") {
      input.style.borderColor = "red";
      console.log(inputFields.length);
    }
  });
  // untuk memprint perintah buat mencetak di console
  console.log(validInputs);
});
