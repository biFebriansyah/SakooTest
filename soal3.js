const hitung = (v1, w1, v2, w2, mW) => {
  const tot_w = w1 + w2

  if (tot_w > mW) {
    if (w1 > w2) {
      return v1
    } else {
      return v2
    }
  } else {
    return v1+v2
  }
}

console.log(hitung(8,8,1,1,9))