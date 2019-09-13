

const filterlive = (data,condition) => {
  const resultFilterLive = data.filter(element => {

   return element.Alive === condition
  });

  return resultFilterLive.Alive;

}