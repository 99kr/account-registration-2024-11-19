# Account Registration

In this exercise you will build a form in which you can simulate a creation of an account to some web application. The purpose of this exercise is to practise on using different event listeners _( several are needed )_ but also to create a basic application that is comprised of HTML, CSS and JavaScript.

You are more then welcome to work together on this one. It's important that you challenge yourself and try out new things.

REMEMBER, events can be a tricky endevour, sometimes it's easier to have fewer events the more. Lift up the event listeners and rely on DOM-manipulation in order to interact with the different elements. Use `event.target` in order to get information on which element that triggered the element and so on.

Here are some usefull links and tips in order to complete the assignment.

-   [List of all the available events in JS](https://www.w3schools.com/jsref/dom_obj_event.asp)
-   [List of DOM manipulating methods on elements](https://www.w3schools.com/jsref/dom_obj_all.asp)
-   [querySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp)
-   [classList, and how to use it](https://www.w3schools.com/jsref/prop_element_classlist.asp)
-   [array methods in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
-   Events you can or might use:
    -   "click", "submit" "input", "focus", "focusin", "focusout", "blur"

The form should have to following content and functionlity.

-   Five inputs must be included and they should reside within a `<form>`. `name`and `username` which must be of type text. One input for `email` that is of type email and two inputs for `password` and `confirm password`. They should of course be of type password.

-   One input or button for submitting the form.

-   Every input should be accompanied by a label and they must be connected. That means that if you click on the label, the corresponding input gets selected _( focus )_. You are **NOT!** allowed to use the `for` attribute on the label in combination with the `id` attribute on the input in order to solve this.

     <details>
     <summary><i>Hint...</i></summary>

    <i>Use a click event on the label ( or the entire form-tag ), and invoke the focus()-method on the corresponding input element.</i>
     </details>

-   All of the inputs must be mandatory, meaning that you shouldn't be able to submit the form if one of the inputs is missing a value.

     <details>
     <summary><i>Hint...</i></summary>

    <i>Create a function that checks if every input has a value. Make the submit button disabled from the beginning and invoke this function every time you validate the password inputs.</i>
     </details>

-   The `password` must be atleast 8 characters long. If the password is not of length, the input should receive appropriate styling to visualize this for the user. When the passwords is long enough the styling returns to normal _( or to an affirmative state if you would like )_.

     <details>
     <summary><i>Hint...</i></summary>

    <i>Create a function that validates the password and invoke it every time you type in a letter in the password input. Modify the classList of the input, or ay surrounding wrapper element to add or remove styling.</i>
     </details>

-   The `confirm password` must be validated to be identical as the `password`. If that's not the case, the input should receive appropriate styling to visualize this for the user, much like the previous part.

     <details>
     <summary><i>Hint...</i></summary>

    <i>Create a function that validates the confirmPassword and invoke it every time you type in a letter in the confirmPassword input. Modify the classList of the input, or ay surrounding wrapper element to add or remove styling.</i>
     </details>

-   If the `password` or the `confirm password` has not been correctly typed, the submit button should be disabled.

-   There must be a submit event in the application. When the form is submitted all of the data should be presented in an object like this:

    ```js
    const registrationData = {
    	name: 'first name last name',
    	username: 'username',
    	email: 'email@email.com',
    	password: 'password',
    }
    ```

    This object is to be written to the console or written in an alert. The values should of course be corresponding to the values that the user have typed.

-   I would like that you also focus on writing clean code and use decent, thought-through, stylings.

_( The image below is just AN EXAMPLE on how it CAN look! You have free reins on the design. )_

<figure style="text-align: center;"><img src="example-img.png">
<figcaption>Example</figcaption></figure>
