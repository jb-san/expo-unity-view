import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { UnityViewProps } from './UnityView.types';

const NativeView: React.ComponentType<UnityViewProps> =
  requireNativeViewManager('UnityView');

export default function UnityView(props: UnityViewProps) {
  return <NativeView {...props} />;
}
