import { Component, JSX } from 'solid-js';
export type ParentProps<P = {}> = P & { children?: JSX.Element };
export type SolidComponent<P = {}> = Component<ParentProps<P>>;
