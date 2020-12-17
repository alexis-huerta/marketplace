
export class Product {
    id = 0;
    userId = 0;
    name = "";
    sku = "";
    quantity = 0;
    price = 0;

  constructor() {}

  static parse(obj: any): Product {
    return new Product().set(obj);
  }

  set(obj: any): this {
    this.id = Number(obj.id || this.id || 0);
    this.userId = Number(obj.user_id || this.userId || 0);
    this.name = String(obj.name || this.name || '');
    this.sku = String(obj.sku || this.sku || '');
    this.quantity = Number(obj.quantity || this.quantity || 0);
    this.price = Number(obj.price || this.price || 0);
    return this;
  }

  clone(): Product {
    return new Product().set(this);
  }

  clear(): this {
    Object.keys(this).forEach((key) => {
      this[key] = null;
    });
    this.set({});
    return this;
  }
}
