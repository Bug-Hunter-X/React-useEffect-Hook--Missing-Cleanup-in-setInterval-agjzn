# React useEffect Hook: Missing Cleanup in setInterval

This example demonstrates a common error in React's `useEffect` hook when using `setInterval`.  Forgetting to clear the interval when the component unmounts can lead to memory leaks and unexpected behavior.

## The Bug

The provided code sets up an interval to update the component's state every second.  However, it's missing a crucial cleanup function to clear the interval when the component is unmounted. This leads to the interval continuing to run even after the component is no longer displayed, causing potential issues.

## The Solution

The solution is to add a cleanup function to clear the interval within the `useEffect` hook's return statement. This ensures that the interval is stopped when the component is unmounted, preventing memory leaks.