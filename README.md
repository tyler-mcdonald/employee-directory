
# Company Employee Directory

### A mock company employee directory using public API

Each time the page is loaded, a new list of random employee information is returned from the HTTP request at [Random User Generator](https://randomuser.me/) and displayed on the page. Users can then filter through names, or click an employee to view a modal of additional information.

### Project highlights
#### Working with APIs
Project uses HTTP requests to an API using combination of async/await, fetch, and promise chaining.

#### Filtering
Search bar to filter through employee names in real-time using `keyup`.

#### Modals
Click any user to display their modal view, and then browse through each user's modal from the modal window using prev and next buttons.

### Styling Updates
The following styles were changed from the default `styles.css` file:
1. `.card`: `max-width` was changed to 400px primarily due to some users with long names not fitting on the card.
2. `.card-img`: `border-radius` was changed to 75%; `border` property was added
3. `.modal-close-btn`: `color` updated; `background` updated; `border-radius` updated
4. `.modal.img`: added `border` property
5. `modal-btn-container`: removed `border`

Thank you [Treehouse](https://teamtreehouse.com/) staff for the default styling!
