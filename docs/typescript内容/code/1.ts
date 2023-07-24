// 是JavaScript的超集，主要为js提供可选的静态类型和基于类的面向对象编程，解决大型项目代码复杂性的
// Record
const testObj = Record<k, v>; //k:key的类型 v:value的类型
// keyof
取对象的key的类型组成联合类型;
// omit 忽略type的某个类型
type resType = Omit<PersonType, "name">;
// in 类型检测，必选其中几项类型
type name = "firstName" | "lastName";
type TName = {
  [key in name]: string;
};
