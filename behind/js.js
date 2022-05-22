function getname() {
let name = prompt('请输入用户名。');
if(name === "云南白曜") {
  let mima = prompt('请输入密码。');
  if(mima === "我是云南白曜") {
    localStorage.setItem('name', name);
  } else {
      getname();
    }
} else {
    if(name === "神秘天王") {
      let mima = prompt('请输入密码。');
      if(mima === "我是神秘天王哈哈哈") {
        localStorage.setItem('name', name);
      } else {
          getname();
        }
    } else {
      getname();
      }
}

getname();
