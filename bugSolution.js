```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    if (count > 5 && mounted) {
      setCount(0); 
    }
    return () => { mounted = false;}
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```