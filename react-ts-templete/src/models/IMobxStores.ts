// 创建store类型接口
export interface IMobxStores {
  name: string;
  greeting: string;
  setName (name: string): void
}
