'use strict';

const length = 40;
const saveFibList = [0, 1];

for (let i = 0; i <= length; i++) {
  if (i >= 2) saveFibList.push(saveFibList[i - 1] + saveFibList[i - 2])
  console.log(saveFibList[i])
}