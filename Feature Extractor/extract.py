import os

o_path = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesNotObfuscated/JavascriptSamples/'
no_path = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesObfuscated/JavascriptSamplesObfuscated/'


def total_number_of_lines(not_obfuscated_raw_list):
    for data in not_obfuscated_raw_list:
        f = open(no_path + data)
        print(f.read())


print("Extracting features using AST outputs...")


not_obfuscated_raw_list = os.listdir(no_path)
obfuscated_raw_list = os.listdir(o_path)

total_number_of_lines(not_obfuscated_raw_list)
