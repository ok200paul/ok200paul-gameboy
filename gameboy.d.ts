/* tslint:disable */
/* eslint-disable */
/**
 * Build the full Game Boy UI inside the target element and wire up file
 * input + play button. Call with a target element ID (e.g. `"environment"`).
 * If `target_id` is `None`, defaults to `"game"`.
 */
export function mount(target_id?: string): void;
/**
 * Direct render with a ROM already in memory. Injects UI into target element
 * and immediately starts emulation.
 */
export function render(rom: Uint8Array, target_id?: string): Promise<void>;
export function start(): Promise<void>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly load: (a: number, b: number) => void;
  readonly frame: () => void;
  readonly keydown: (a: number) => void;
  readonly keyup: (a: number) => void;
  readonly image: (a: number) => void;
  readonly mount: (a: number, b: number, c: number) => void;
  readonly render: (a: number, b: number, c: number, d: number) => number;
  readonly start: () => void;
  readonly __wbindgen_export_0: (a: number) => void;
  readonly __wbindgen_export_1: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_2: (a: number, b: number) => number;
  readonly __wbindgen_export_3: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_4: WebAssembly.Table;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_export_5: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_6: (a: number, b: number) => void;
  readonly __wbindgen_export_7: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_8: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
