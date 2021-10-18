import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '../src'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Click me!'
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
