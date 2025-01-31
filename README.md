# React UseEffect Infinite Loop Bug
This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook. The bug arises from incorrect state update logic inside the `useEffect`'s dependency array.

## Bug Description
The `MyComponent` attempts to reset the `count` state to 0 when it exceeds 5. However, this update triggers another render, causing the `useEffect` to run again and again in an infinite loop. This is a classic example of how to improperly use the dependency array in useEffect, resulting in unexpected behavior.

## Solution
The solution involves restructuring the conditional logic and properly managing state updates within the useEffect hook. This corrected logic prevents the infinite loop.