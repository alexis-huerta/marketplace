
export class User {
    id = 0;
    email = '';
    password = '';
    type = '';

  constructor() {}

 static parse(obj: any): User {
    return new User().set(obj);
  }

 set(obj: any): this {
    this.id = Number(obj.id || this.id || 0);
    this.email = String(obj.email || this.email || '');
    this.password = String(obj.password || this.password || '');
    this.type = String(obj.type || this.type || '');
    return this;
  }

 clone(): User {
    return new User().set(this);
  }

 clear(): this {
    Object.keys(this).forEach((key) => {
      this[key] = null;
    });
    this.set({});
    return this;
  }
}
