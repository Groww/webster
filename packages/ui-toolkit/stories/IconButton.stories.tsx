import React, { useState } from 'react';
import { Story } from '@storybook/react';

import { IconButton } from '../src/components/atoms/IconButton';
import { Props as IconButtonProps } from '../src/components/atoms/IconButton/IconButton';
import { Search } from '@groww-tech/icon-store/mi';


export default {
  title: 'IconButton',
  component: IconButton
};


const Template: Story<IconButtonProps> = (args) => {
  const [ isSelected, setSelected ] = useState(false);

  return (
    <div style={{ margin: 8 }}>
      <IconButton
        {...args}
        onClick={() => setSelected(!isSelected)}
      />
    </div>
  );
};

export const IconButtonArgs = Template.bind({});
IconButtonArgs.args = {
  iconComponent: (iconProps: any) => (<Search
    {...iconProps}
  />),
  size: 'Base',
  isDisabled: false,
  isSelected: false,
  isLoading: false
};
