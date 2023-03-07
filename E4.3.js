function getKeysObj(obj) {
  for(let key in obj){
    if (obj.hasOwnProperty(key)){
      console.log(key, obj[key])
    }
  }
}

const setr = {
  a:1,
  b:2
}

const setr1 = Object.create(setr)

setr1.c = 2

getKeysObj(setr1)





function hasProperty(propName, obj) {
  return propName in obj;
}


const setr = {
  asd:1,
  zxc:2
}

getProp('zxc', setr)





function createObject() {
  const user = Object.create(null)
  return user
}

let newUser = createObject()