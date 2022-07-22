<!-- Must do -->
- Convert phone number to correct format


<!-- Updates -->
- Possibly remove padding from class 'card' for card divs. This will allow for clicking of full box, instead of cutting off part of the box.
- Remove modal when clicking outside of modal (in addition to clicking the X)


<!-- Questions -->
- Is there an easier way to construct the classes, rather than manually?

- How to overlay an event listener on the parent object, and disregard event targets on the child nodes?
    * E.g. On the `id="modal-close-btn"` I want to place event listener on the button, but still want event to fire if I click the `<strong>X</strong>`

- Doesn't it make more sense to format each phone # based on the location? Not all numbers can be formatted the same as US. Will this ding me on the submission?


<!-- Difficulties -->
- filtering through objects!

<!-- WIP -->
- Change display users to accept the NEW employee object, instead of default json object.
    * Add another function to create new Employee, and then return the array, passing into displayUsers