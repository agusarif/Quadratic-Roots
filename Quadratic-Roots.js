/**
 * Quadratic-Roots.js: A Javascript to calculate the roots of a quadratic
 *                     equation which observes tree kinds of roots. Also,
 *                     there is a chance to validate the solutions.
 * Agus Arif, 07-10-2011.
 */

// Title and explanation of the script
alert("A Javascript to Compute the Roots of a Quadratic Equation\n\nThe standard form of a quadratic equation: A x^2 + B x + C = 0.\n\nPlease supply the values of coefficient A, B, and C in the following\nthree dialog boxes. Thanks!");

// Input of the three coefficients
var A = prompt("Value of coefficient A", "1");
var B = prompt("Value of coefficient B", "2");
var C = prompt("Value of coefficient C", "3");

// Calculation of the discriminant
var D = B * B - 4 * A * C;

// Calculation of three kinds of quadratic roots
if (D > 0) { /* the roots are real and different */
  var X1 = (-B - Math.sqrt(D)) / (2 * A);
  var X2 = (-B + Math.sqrt(D)) / (2 * A);
  var ans = confirm("Discriminant D of the quadratic equation: " + D + "\n\nThe first real root of the equation: " + X1 + "\nThe second real root of the equation: " + X2 + "\n\nWould you like to validate the solutions?");
}
else if (D == 0) { /* the roots are real and equal */
  var X = -B / (2 * A);
  var ans = confirm("Discriminant D of the quadratic equation: " + D + "\n\nThe double real roots of the equation: " + X + "\n\nWould you like to validate the solutions?");
}
else { /* the roots are complex */
  var realX = -B / (2 * A);
  var imagX = Math.sqrt(-D) / (2 * A);
  imagX = Math.abs(imagX);
  var ans = confirm("Discriminant D of the quadratic equation: " + D + "\n\nThe first complex root of the equation: " + realX + " + i " + imagX + "\nThe second complex root of the equation: " + realX + " - i " + imagX + "\n\nWould you like to validate the solutions?");
}

// Validation of the roots
var A1 = A;  /* coefficients to be validated */
var B1 = 0;  C1 = 0;
if (ans == true) {
  if (D > 0) {
    B1 = A1 * ((-X1) + (-X2));
    C1 = A1 * ((-X1) * (-X2));
  }
  else if (D == 0) {
    B1 = A1 * (2 * (-X));
    C1 = A1 * ((-X) * (-X));
  }
  else {
    B1 = A1 * (2 * (-realX));
    C1 = A1 * ((-realX) * (-realX) + imagX * imagX));
  }
  alert("Based on the computed roots, the coefficients of the quadratic equations should be\n  A = " + A1 + "(" + A + ")\n  B = " + B1 + "(" + B ")\n  C = " + C1 + "(" + C + ")");
}
