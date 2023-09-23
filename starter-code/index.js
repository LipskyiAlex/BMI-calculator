const radioForm = document.querySelector(".radioForm");
const formContainer = document.querySelector(".js-input");

radioForm.addEventListener("change", renderMarkup);

function renderMarkup() {
  const selectedOption = document.querySelector(
    'input[name="option"]:checked'
  ).value;

  formContainer.innerHTML = "";

  if (selectedOption === "Metric") {
    formContainer.innerHTML = ` <form class="input-form">
           <label for="id">Height</label>
           <input type="text" id="cm" placeholder="cm">
           <label for="kg">Weight</label>
           <input type="text" id="kg" placeholder="kg">
         </form>`;
  }

  if (selectedOption === "Imperial") {
    formContainer.innerHTML = ` <label for="weightFtAndIn">Height
        <input type="number" id="weightFt" placeholder="ft">
        <input type="number" id="weightInches" placeholder="in">
    </label>

    <label for="heightStAndLbs">Weight
        <input type="number" id="heightSt" placeholder="st">
        <input type="number" id="heightLbs" placeholder="lbs">
    </label>`;
  }
}
