import React from 'react'

import { Button } from 'artbuttonui'
import 'artbuttonui/dist/index.css'

const App = () => {
  return <div>
    <Button type="primary" text="Click Me! 😄" />
    <Button type="default" text="Click Me! 😄" />
    <Button type="dashed" text="Click Me! 😄" />
    <Button type="text" text="Click Me! 😄" />
    <Button type="link" text="Click Me! 😄" />
  </div>
}

export default App
