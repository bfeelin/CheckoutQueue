Reference: https://www.youtube.com/watch?v=B9fmr1TpKHE

1. User Interface (UI):
Create an input field for the user to enter the number of items they have.
Implement a "Checkout" button for the user to initiate the checkout process.

2. Checkout Logic:
When the user clicks the "Checkout" button, the system should:
a. Identify the checkout queue with the lowest number of people (shoppers).
b. Add the user to the identified queue.

3. Checkout Queue Visualization:
Visualize checkout queues, represented as rows with shoppers.
Each shopper in the queue should be represented by a number indicating the number of items they have.

4. Item Removal Simulation:
Every half a second, simulate the removal of one item from the first shopper in the queue.
Continue this process until the first shopper's items are reduced to zero.
Remove the first shopper from the queue after their items are all gone.

5. Queue Management:
After removing a shopper, shift the remaining shoppers in the queue up to fill the vacant space.
If all queues are filled, add the user to the queue with the least number of items again.

6. React Implementation:
Implement this feature in a React application for an interactive user experience.
Ensure real-time updates on the UI to reflect changes in the checkout queues and item removal.

7. User Interaction:
Provide feedback to the user through the UI, such as visual cues for the checkout process.
Allow users to input the number of items and initiate the process with the "Checkout" button.

8. Edge Cases:
Handle scenarios where all queues are filled, and implement logic for selecting the least crowded queue.

9. Deletion:
Ensure shoppers are removed from the queue when their item count reaches zero, and shift the remaining shoppers accordingly.

Use array of arrays to keep track of number of shoppers in each line
useEffect/setTimeout to handle removing 1 item every half second