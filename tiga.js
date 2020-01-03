

function hartaKarun(value1, weight1, value2, weight2, maxKeranjang) {

    if (value1 <= 1 || value1 >= 20) {
        return 'value 1 harus lebih besar dari satu dan lebih kecil dari 20'
    }
    if (value2 <= 1 || value2 >= 20) {
        return 'value 2 harus lebih besar dari satu dan lebih kecil dari 20'
    }
    if (weight1 <= 1 || weight1 >= 20) {
        return 'weight 1 harus lebih besar dari satu dan lebih kecil dari 20'
    }
    if (weight2 <= 1 || weight1 >= 20) {
        return 'weight 2 harus lebih besar dari satu dan lebih kecil dari 20'
    }
    if (maxKeranjang <= 0 || maxKeranjang >= 20) {
        return 'maxKeranjang 2 harus lebih besar dari satu dan lebih kecil dari 20'
    }

    const totalWeight = weight2 + weight2

    if (totalWeight > maxKeranjang) {
        const result = value1 > value2 ? value1 : value2
        return result
    } else {
        return value1 + value2
    }

}

const test = hartaKarun(7, 4, 12, 6, 8)
console.log(test)