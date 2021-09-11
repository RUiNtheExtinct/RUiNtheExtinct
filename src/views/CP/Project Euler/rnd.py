# import decimal as dec
# import itertools as it
# import collections as coll
import sys
import math as mt

# import random as rd
# import bisect as bi
import time

sys.setrecursionlimit(1000000)

# import numpy as np


def uno():
    return int(sys.stdin.readline().strip())


def dos():
    return sys.stdin.readline().strip()


def tres():
    return map(int, sys.stdin.readline().strip().split())


def cuatro():
    return sys.stdin.readline().strip().split()


# Starting Time
time1 = time.time()


######## ? CODE STARTS FROM HERE ########
f1 = open(
    r"C:/RUiN/Projects/BEIT/Imp/RUiNtheExtinct/src/views/CP/Project Euler/ww.txt", "r"
)
f2 = open(
    r"C:/RUiN/Projects/BEIT/Imp/RUiNtheExtinct/src/views/CP/Project Euler/ww2.txt", "w"
)
lst = f1.readlines()
data = []
for i in range(len(lst)):
    lst[i] = lst[i][: len(lst[i]) - 1]
    # lst[i] = [lst[i], int(lst[i][:3])]
lst.sort(key=lambda elem: int(elem[:3]))
for i in range(len(lst)):
    y = int(lst[i][:3])
    x = lst[i][5:12] + "20" + lst[i][12:14] + " " + lst[i][16:21] + ":00 GMT"
    f2.write("{\n")
    f2.write(f'x: "{x}",\n')
    f2.write(f"y: {y},\n")
    f2.write("},\n")
f1.close()
f2.close()


# End Time
time2 = time.time()
time = (
    str(round((time2 - time1) * 1000, 3)) + "ms"
    if (round((time2 - time1) * 1000, 3)) < 1000
    else str(round(time2 - time1, 3)) + "s"
)
print("\nTime Taken:", time)
