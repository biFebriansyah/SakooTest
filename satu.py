
def lingkaranBulat(n, number):

    if n < 4 or n >= 20:
        return 'n is not valid'
    elif n % 2 != 0:
        return 'n must be even number'
    elif number <= 0 and number >= (n-1):
        return 'number not valid'
    else:
        plus = n / 2
        plus2 = number + plus
        val = plus2 % n
        return int(val)


if __name__ == "__main__":
    hasil = lingkaranBulat(12, 11)
    print(hasil)
