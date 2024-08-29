/* Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, 
we’ll return to tool in the next step.

Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen' */


let tool = '';

tool = 'marker';

// Use short circuit evaluation to assign writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);