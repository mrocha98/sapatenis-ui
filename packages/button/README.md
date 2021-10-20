# @sapatenis-ui/button

Usage example:

```tsx
import React, { useState } from 'react'

export const Example = () => {
  const [counter, setCounter] = useState(1)

  const decrement = () => setCounter((current) => current - 1)
  const increment = () => setCounter((current) => current + 1)

  return (
    <div>
      <span>{counter}<span>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={increment}>+1</Button>
    </div>
  )
}
```
