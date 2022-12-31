import math
from collections import Counter

import math


def shannon_entropy(string):
    "Calculates the Shannon entropy of a string"

    # get probability of chars in string
    prob = [ float(string.count(c)) / len(string) for c in dict.fromkeys(list(string)) ]

    # calculate the entropy
    entropy = - sum([ p * math.log(p) / math.log(2.0) for p in prob ])

    return entropy


def symbol_frequency(symbol_set):
    bit_set = [round(symbol_set[symbol] * math.log2(symbol_set[symbol]), 5)
               for symbol in symbol_set]
    entropy = -1 * (round(sum(bit_set), 5))
    return entropy


if __name__ == "__main__":
    m = input("\nEnter the message: ")
    bits = shannon_entropy(m)
    print(
        "\nH(X) = {0} bits. Rounded to {1} bits/symbol, ".format(bits, round(bits)))
    print("it will take {0} bits to optimally encode '{1}'".format(
        len(m) * round(bits), m))
    print("\nMetric entropy: %.5f" % (bits / len(m)))
