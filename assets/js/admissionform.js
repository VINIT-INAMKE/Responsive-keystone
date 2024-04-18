document.addEventListener("DOMContentLoaded", function () {
  const admissionYearSelect = document.getElementById("adm-admission-year");
  const additionalFieldsContainer =
    document.getElementById("additional-fields");

  admissionYearSelect.addEventListener("change", function () {
    const selectedOption = this.value;
    additionalFieldsContainer.innerHTML = ""; // Clear previous fields

    if (selectedOption === "first-year") {
      // Add fields for Bachelor of Engineering (First Year)
      const selectCourseHeader = document.createElement("h4");
      selectCourseHeader.textContent = "Select Course";
      selectCourseHeader.classList.add("adm-h4"); // Add class name
      additionalFieldsContainer.appendChild(selectCourseHeader);

      const courseCheckboxes = [
        "Computer Engineering",
        "Electronics and Telecommunications Engineering",
        "Mechanical Engineering",
        "AIDS Engineering",
      ];
      courseCheckboxes.forEach((course) => {
        const checkboxLabel = document.createElement("label");
        checkboxLabel.innerHTML = `<input type="checkbox" name="${course
          .toLowerCase()
          .replace(/\s/g, "-")}" value="${course}" class="adm-input">${course}`;
        additionalFieldsContainer.appendChild(checkboxLabel);
      });

      const pcmMarksInput = document.createElement("div");
      pcmMarksInput.innerHTML =
        '<label for="adm-pcm-marks" class="adm-label">PCM Marks</label><input type="text" id="adm-pcm-marks" name="pcm-marks" class="adm-input">';
      additionalFieldsContainer.appendChild(pcmMarksInput);

      const mhtCETStatusSelect = document.createElement("div");
      mhtCETStatusSelect.innerHTML = `
          <label for="adm-mht-cet-status" class="adm-label">MHT-CET Status</label>
          <select id="adm-mht-cet-status" name="mht-cet-status" class="adm-select">
            <option value="appeared">Appeared</option>
            <option value="not-appeared">Not Appeared</option>
          </select>`;
      additionalFieldsContainer.appendChild(mhtCETStatusSelect);

      const jeeStatusSelect = document.createElement("div");
      jeeStatusSelect.innerHTML = `
          <label for="adm-jee-status" class="adm-label">JEE Status</label>
          <select id="adm-jee-status" name="jee-status" class="adm-select">
            <option value="appeared">Appeared</option>
            <option value="not-appeared">Not Appeared</option>
          </select>`;
      additionalFieldsContainer.appendChild(jeeStatusSelect);
    } else if (selectedOption === "direct-second-year") {
      // Add fields for Bachelor of Engineering (Direct Second Year)
      const selectCourseHeader = document.createElement("h4");
      selectCourseHeader.textContent = "Select Course";
      selectCourseHeader.classList.add("adm-h4"); // Add class name
      additionalFieldsContainer.appendChild(selectCourseHeader);

      const courseCheckboxes = [
        "Computer Engineering",
        "Electronics and Telecommunications Engineering",
        "Mechanical Engineering",
        "AIDS Engineering",
      ];
      courseCheckboxes.forEach((course) => {
        const checkboxLabel = document.createElement("label");
        checkboxLabel.innerHTML = `<input type="checkbox" name="${course
          .toLowerCase()
          .replace(/\s/g, "-")}" value="${course}" class="adm-input">${course}`;
        additionalFieldsContainer.appendChild(checkboxLabel);
      });

      const diplomaPercentageInput = document.createElement("div");
      diplomaPercentageInput.innerHTML =
        '<label for="adm-diploma-percentage" class="adm-label">Diploma/B.Sc Percentage</label><input type="text" id="adm-diploma-percentage" name="diploma-percentage" class="adm-input">';
      additionalFieldsContainer.appendChild(diplomaPercentageInput);

      // Add class names to the dynamically created elements
      const checkboxes = additionalFieldsContainer.querySelectorAll(
        '.adm-input[type="checkbox"]'
      );
      checkboxes.forEach((checkbox) => {
        checkbox.classList.add("adm-input");
      });
    }
  });
});
