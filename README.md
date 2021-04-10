# react-input-date-mask

[comment]: <> ([![Build Status]&#40;https://img.shields.io/travis/sanniassin/react-input-mask/master.svg?style=flat&#41;]&#40;https://travis-ci.org/sanniassin/react-input-mask&#41; [![npm version]&#40;https://img.shields.io/npm/v/react-input-mask.svg?style=flat&#41;]&#40;https://www.npmjs.com/package/react-input-mask&#41; [![npm downloads]&#40;https://img.shields.io/npm/dm/react-input-mask.svg?style=flat&#41;]&#40;https://www.npmjs.com/package/react-input-mask&#41;)

Input date masking component for React. React-input-date-mask requires React 16.8.0 or later.


# Table of Contents
* [Install](#install)
* [Usage](#usage)
* [Properties](#properties)
* [Examples](#examples)

# Install
```npm install react-input-date-mask --save```

# Usage
```jsx
import React from 'react';
import ReactInputDateMask from 'react-input-date-mask';

function DateInput(props) {
    return <ReactInputDateMask  mask='dd/mm/yyyy' showMaskOnFocus={true}  className={props.className} value={props.value} onChange={props.onChange} showMaskOnHover={true} />;
  
}
```

# Properties
|                           Name                            |               Type                | Default | Description |
|        :-----------------------------------------:        |    :-------------------------:    | :-----: | :--------------------------------------------------------------------- |
|                    **[`mask`](#mask)**                    |       `{String}`          |   'dd.mm.yyyy'   | Mask format |
|          **[`showMaskOnFocus`](#showMaskOnFocus)**        |       `{Boolean}`         |     `false`      | If true, mask will appear only when input gets focus|
| **[`showMaskOnHover`](#showMaskOnHover)**                 |       `{Boolean}`         |     `false`      |  If true, when you mouse over the input, the mask appears, when you mouse  leave the input, the mask disappears
|                **[`className`](#properties)**              |     `{String}`            |               |  |
|                **[`onChange`](#properties)**              |     `{Function}`            |               |  |
|                **[`disabled`](#properties)**              |     `{Boolean}`            |       `false`        |  |
|                **[`readOnly`](#properties)**              |     `{Boolean}`            |      `false`         |  |
|                **[`ref`](#properties)**                   |     `{ref}`            |               | Allows to call focus and select methods of native input element | 
### `mask`
Mask format. Can be a string. There are two options. The first option by default: 'dd.mm.yyyy'. The second options: 'mm.dd.yyyy'. As a separator, you can use `/` or `.` <br /><br />
```jsx
 <ReactInputDateMask mask='mm.dd.yyyy' or <ReactInputDateMask mask='dd.mm.yyyy'
```
```jsx
 <ReactInputDateMask mask='mm/dd/yyyy' or <ReactInputDateMask mask='dd/mm/yyyy'
```
