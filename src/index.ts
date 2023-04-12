import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to UnityView.web.ts
// and on native platforms to UnityView.ts
import UnityViewModule from './UnityViewModule';
import UnityView from './UnityView';
import { ChangeEventPayload, UnityViewProps } from './UnityView.types';

// Get the native constant value.
export const PI = UnityViewModule.PI;

export function hello(): string {
  return UnityViewModule.hello();
}

export async function setValueAsync(value: string) {
  return await UnityViewModule.setValueAsync(value);
}

const emitter = new EventEmitter(UnityViewModule ?? NativeModulesProxy.UnityView);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { UnityView, UnityViewProps, ChangeEventPayload };
