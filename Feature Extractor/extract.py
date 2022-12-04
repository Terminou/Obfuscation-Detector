import os
from features import *

no_path = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesNotObfuscated/JavascriptSamples/'
o_path = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesObfuscated/JavascriptSamplesObfuscated/'

print("Extracting features using AST outputs...")


not_obfuscated_raw_list = os.listdir(no_path)
obfuscated_raw_list = os.listdir(o_path)

total_number_of_lines(not_obfuscated_raw_list, no_path)
