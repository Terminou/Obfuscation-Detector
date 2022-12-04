import os

no_path = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesNotObfuscated/JavascriptSamples/'
o_path = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesObfuscated/JavascriptSamplesObfuscated/'


def total_number_of_lines(file_list):
    for data in file_list:
        f = open(no_path + data)
        nr_lines = len(f.readlines())
        print(data, "-", "Total lines", nr_lines)


print("Extracting features using AST outputs...")


not_obfuscated_raw_list = os.listdir(no_path)
obfuscated_raw_list = os.listdir(o_path)

total_number_of_lines(not_obfuscated_raw_list)
