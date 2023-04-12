import * as React from 'react';

import { UnityViewProps } from './UnityView.types';

export default function UnityView(props: UnityViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
