const button = document.getElementById("build");
const output = document.getElementById("output");

button.addEventListener("click", buildTable);
document.addEventListener("keydown", keyDown);

function validate(id) {
  const element = document.getElementById(id);
  return element.checkValidity() ? Number(element.value) : Number.Nan;
}

function buildTable() {
  /* To-do #1 - Set and validate circle parameters r, x0 and y0
                - follow the example of parameter n below

            const n = validate('n'); // Number of points
            const r = validate(...); // Radius
            const x0 = validate(...); // Center abscissa
            const y0 = validate(...); // Center ordinate */

  const n = validate("n"); // Number of points
  const r = validate("r"); // Radius
  const x0 = validate("x0"); // Center abscissa
  const y0 = validate("y0"); // Center ordinate

  console.log("Validations done! (To-do #1)");

  if (
    !Number.isNaN(n) &&
    !Number.isNaN(r) &&
    !Number.isNaN(x0) &&
    !Number.isNaN(y0)
  ) {
    // Delete the previous output table (if applicable)
    while (output.rows.length > 1) {
      output.deleteRow(-1);
    }

    // Create the output table
    /* To-do #2 - Set the values of the starting angle and angle increment (in radians)
                ... */

    const start_angle = 0;
    const angle_increment = (Math.PI * 2) / n;
    // console.log(angle_increment);

    /* To-do #3 - Set the for () loop parameters
                for (...) { */

    for (let i = 0; i < n; i += 1) {
      // console.log(i);

      /* To-do #4 - Compute the values of point coordinates x and y
                ...
                let row = output.insertRow(-1);
                let cell = row.insertCell(-1);
                cell.className = 'output'; */

      let row = output.insertRow(-1);
      let cell = row.insertCell(-1);
      cell.className = "output";

      /* To-do #5 - Add the value of i (0, 1, 2, etc.) to the newly created cell contents
                cell.innerHTML = ...;
                cell = row.insertCell(-1);
                cell.className = 'output'; */

      cell.innerHTML = i;
      cell = row.insertCell(-1);
      cell.className = "output";

      /* To-do #6 - Add the value of angle (in degrees) to the newly created cell contents
                cell.innerHTML = ....toFixed(2);
                cell = row.insertCell(-1);
                cell.className = 'output'; */

      var rads = start_angle + angle_increment * i;
      var degrees = rads * (180 / Math.PI);

      cell.innerHTML = degrees.toFixed(2);
      cell = row.insertCell(-1);
      cell.className = "output";

      /* To-do #7 - Add the value of point coordinate x to the newly created cell contents
                cell.innerHTML = ....toFixed(4);
                cell = row.insertCell(-1);
                cell.className = 'output'; */

      cell.innerHTML = (r * Math.cos(rads) + x0).toFixed(4);
      cell = row.insertCell(-1);
      cell.className = "output";

      /* To-do #8 - Add the value of point coordinate y to the newly created cell contents
                cell.innerHTML = ....toFixed(4); */

      cell.innerHTML = (r * Math.sin(rads) + y0).toFixed(4);

      /* To-do #9 - Update the value of angle
                ... */
    }
  }
}

function keyDown(event) {
  if (!event.repeat && event.code == "Enter") {
    buildTable();
  }
}
