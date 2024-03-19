import React from 'react';
import cn from 'classnames';

import { RadioButtonChecked, RadioButtonUnchecked } from '@groww-tech/icon-store/mi';

import './radioButton.css';
import { DIRECTION, SIZES } from '../../../utils/constants';


const RadioButton = (props: Props) => {

  const {
    size,
    label,
    isSelected,
    onSelect,
    radioDirection,
    dataTestId,
    isDisabled,
    labelClassName
  } = props;

  const iconColor = isDisabled ? 'var(--gray400)' : 'var(--green500)';

  const baseClasses = cn('radioCo11Box valign-wrapper', {
    'radioCo11BoxReverse vspace-between': radioDirection === DIRECTION.RIGHT
  });

  const labelClasses = cn('contentPrimary radioLs2', {
    radioCo11LabelRight: radioDirection === DIRECTION.RIGHT,
    radioCo11LabelLeft: radioDirection === DIRECTION.LEFT,
    bodySmall: size === SIZES.SMALL || size === SIZES.XSMALL,
    bodyBase: size === SIZES.BASE,
    bodyLarge: size === SIZES.LARGE,
    bodyXLarge: size === SIZES.XLARGE
  }, labelClassName);


  const radioButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDisabled) {
      onSelect();

    } else {
      e.stopPropagation();
    }
  };

  return (
    <div
      onClick={(e) => radioButtonClick(e)}
      data-test-id={dataTestId.length ? dataTestId : null}
      className={baseClasses}
    >
      <div className='valign-wrapper'>
        {
          isSelected ? (
            <RadioButtonChecked
              size={20}
              color={iconColor}
            />
          ) : (
            <RadioButtonUnchecked
              size={20}
              color={iconColor}
            />
          )
        }
      </div>
      <div className={labelClasses}>{label}</div>
    </div>
  );
};


const defaultProps: DefaultProps = {
  size: SIZES.BASE,
  dataTestId: '',
  radioDirection: DIRECTION.LEFT,
  isDisabled: false
};


type DefaultProps = {
  size: ValueOf <typeof SIZES>;
  dataTestId: string;
  radioDirection: ValueOf <typeof DIRECTION>;
  isDisabled: boolean;
}


type RequiredProps = {
  value?: React.ReactNode;
  label: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
  labelClassName?: string;
}


RadioButton.defaultProps = defaultProps;

export type Props = RequiredProps & DefaultProps;

export default React.memo(RadioButton);
