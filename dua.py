import math


def pengendaraMalam(n):
    houre = n / 60
    theHoure = math.floor(houre)
    minute = (houre - theHoure) * 60
    theMinute = round(minute)
    combine = str(theHoure) + str(theMinute)
    result = 0
    for i in combine:
        do = int(i) + result
        result = do

    return result


if __name__ == "__main__":
    test = pengendaraMalam(120)
    print(test)
