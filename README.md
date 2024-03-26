# ClassAssignment - Input Validation (Client & Server side)
prepared by Nadirah binti Ros Liza 2027832

**Description:**

1. **userdetails.html**: This is an HTML file that serves as a form where users can input their details. It contains various form fields such as name, matric number, addresses, email, and phone numbers. This form is used to collect user information.

2. **userdetials.js**: This is a JavaScript file linked to userdetails.html. It contains the client-side validation logic using regular expressions to ensure that the user inputs adhere to certain patterns or formats specified for each field. The JavaScript functions are invoked when the form is submitted, and if any of the validation checks fail, an alert message is displayed to the user, preventing the form from being submitted until valid inputs are provided.

3. **userdetails.php**: This is a PHP script referenced in the action attribute of the form in userdetails.html. When the form is submitted, the data is sent to this PHP script for further processing. In this script, the form data sent via the POST method is retrieved using the $_POST superglobal, and it can be processed, validated, stored in a database, or used for any other backend tasks. In this example, the PHP script simply echoes back the submitted data to demonstrate that it has been received.

4. **style.css**: This file is referenced in userdetails.html and contains the styling rules for the HTML elements within the page. It is used to control the visual presentation of the form and other elements on the page, ensuring a consistent and visually appealing layout.

In summary, userdetails.html serves as the main user interface where users input their details. When the form is submitted, the data is validated using JavaScript in userdetails.js. If the validation is successful, the form data is sent to userdetials.php for further processing on the server side. Finally, style.css is used to apply styling rules to the HTML elements, enhancing the visual presentation of the form.
