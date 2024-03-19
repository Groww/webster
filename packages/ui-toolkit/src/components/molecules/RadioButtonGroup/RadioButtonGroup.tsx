import React from 'react';

import { RadioButton } from '../../atoms';
import { RadioButtonType } from './radioButtonGroupTypes';

import './radioButtonGroup.css';


const RadioButtonGroup = (props: Props) => {

  const {
    radioButtons,
    containerClassName,
    dataTestId,
    onSelect,
    selected
  } = props;

  return (
    <div
      id="container"
      className={containerClassName}
    >
      {
        radioButtons.map((item: RadioButtonType, index: number) => {
          const {
            value,
            parentClassName,
            label,
            size,
            labelClassName,
            radioDirection
          } = item;

          return (
            <div
              key={`${value}${index}`}
              className={parentClassName}
            >
              <RadioButton
                isSelected={selected === item.value}
                onSelect={() => onSelect(item.value)}
                label={label}
                size={size}
                labelClassName={labelClassName}
                radioDirection={radioDirection}
                dataTestId= {dataTestId ? index + '-' + dataTestId + '-radio-button' : ''}
              />
            </div>
          );
        })
      }
    </div>
  );
};


const defaultProps: DefaultProps = {
  containerClassName: '',
  dataTestId: ''
};


type DefaultProps = {
  containerClassName: string;
  dataTestId: string;
}


type RequiredProps = {
  radioButtons: RadioButtonType[];
  selected: string | number;
  onSelect: (value: string | number) => void;
}


export type Props = DefaultProps & RequiredProps;

RadioButtonGroup.defaultProps = defaultProps;

export default React.memo(RadioButtonGroup);
