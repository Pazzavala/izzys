import React from 'react';

interface ButtonProps {
  text: string;
}

export default function Button({ text }: Readonly<ButtonProps>) {
  return <div>Button</div>;
}
