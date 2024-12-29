```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function: clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```