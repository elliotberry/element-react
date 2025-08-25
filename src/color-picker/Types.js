/* @flow */

export type ColorType = {
  _hue: number,
  _saturation: number,
  _value: number,
  _alpha: number,
  enableAlpha: boolean,
  format: string,
  value: string,
  set: (props: string, value: mixed) => undefined,
  get: (props: string) => mixed,
  toRgb: () => { r: number, g: number, b: number },
  fromString: (value: string) => undefined,
  doOnChange: () => undefined
};

export type ColorPickerState = {
  value: string,
  color: ColorType,
  showPicker: false,
  showPanelColor: false
};

export type AlphaSliderState = {
  thumbLeft: number,
  thumbTop: number,
  background: ?string
};

export type HueSliderState = {
  thumbLeft: number,
  thumbTop: number
};

export type SvPanelState = {
  cursorTop: number,
  cursorLeft: number,
  background: string
};

export type DragOptions = {
  drag: (event: SyntheticMouseEvent) => undefined,
  end: (event: SyntheticMouseEvent) => undefined
};
