import { type ReactNode } from 'react';
interface IPlanningRuntimeProps {
    children: ReactNode;
}
export declare function PlanningRuntime({ children }: IPlanningRuntimeProps): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
export {};
