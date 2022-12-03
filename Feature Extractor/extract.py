import os
print("Extracting features using AST outputs...")

o_path = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesNotObfuscated/JavascriptSamples/'
no_path = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesObfuscated/JavascriptSamplesObfuscated/'

not_obfuscated_raw_list = os.listdir(no_path)
obfuscated_raw_list = os.listdir(o_path)
