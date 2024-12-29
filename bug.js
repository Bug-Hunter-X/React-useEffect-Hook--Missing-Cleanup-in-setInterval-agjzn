```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: attempting to update state in a function that's not
    // associated with any component's lifecycle.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval on component unmount.
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```