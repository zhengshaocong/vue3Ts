const reactiveHandler = {
  get(targer, prop) {
    if (prop === "_is_reactive") return true;
    const result = Reflect.get(targer, prop);
    console.log("拦截读取数据", prop, result);
    return result;
  },
  set(targer, prop, value) {
    const result = Reflect.set(targer, prop, value);
    console.log("拦截添加修改数据", prop, value);
    return result;
  },
  deleteProperty(targer, prop) {
    const result = Reflect.deleteProperty(targer, prop);
    console.log("拦截删除对象", prop);
    return result;
  },
};

function shallowReactive(target) {
  if (target && typeof target === "object") {
    return new Proxy(target, reactiveHandler);
  }
  return target;
}

function reactive(target) {
  if (target && typeof target === "object") {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = reactive(item);
      });
    } else {
      Object.keys(target).forEach((key) => {
        target[key] = reactive(target[key]);
      });
    }
    return new Proxy(target, reactiveHandler);
  }
  return target;
}

//=============================================
const readonlyHandler = {
  get(target, prop) {
    if (prop === "_is_readonly") return true;
    const result = Reflect.get(target, prop);
    console.log("拦截读取", prop, result);
    return result;
  },
  set(target, prop, value) {
    console.log("只能读取，不能修改", prop);
    return true;
  },
  deleteProperty(target, prop) {
    console.log("只能读取，不能删除", prop);
    return true;
  },
};
function shallowReadonly(target) {
  if (target && typeof target === "object") {
    return new Proxy(target, readonlyHandler);
  }

  return target;
}

function readonly(target) {
  if (target && typeof target === "object") {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = readonly(item);
      });
    } else {
      Object.keys(target).forEach((key) => {
        target[key] = readonly(target[key]);
      });
    }
    return new Proxy(target, readonlyHandler);
  }

  return target;
}

//=============================================
function shallowRef(target) {
  return {
    _value: target,
    get value() {
      console.log("劫持到了读取数据");
      return this._value;
    },
    set value(val) {
      console.log("劫持到了修改数据，准备更新界面", val);
      this._value = val;
    },
  };
}

function ref(target) {
  target = reactive(target);
  return {
    _is_ref: true,
    _value: target,
    get value() {
      console.log("劫持到了读取数据", target);
      return this._value;
    },
    set value(val) {
      console.log("劫持到了修改数据，准备更新界面", val);
      this._value = val;
    },
  };
}
