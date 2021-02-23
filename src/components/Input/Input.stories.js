/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Input from './Input';

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size='small'/>

export const Medium = () => <Input size='medium'/>

export const Large = () => <Input size='large'/>