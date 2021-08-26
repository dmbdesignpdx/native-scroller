export type Prop = (value?: string)
  => (target: Record<string, any>, key: string) => void;
