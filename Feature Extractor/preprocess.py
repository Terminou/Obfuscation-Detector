import os
import esprima
# Set the directory you want to list the files from
directory = '../Dataset/JavascriptSamplesObfuscated/JavascriptSamplesObfuscated/'
write_path = '../PreprocessedPrograms/PreprocessedObfuscated/'
# Use the listdir() function to get the list of files
files = os.listdir(directory)

for file in files:
    input_file = directory + file

    try:
        f = open(input_file)
        data = f.read()
        f.close()
        esprima.parse(data)
        esprima.tokenize(data)
        esprima.parseScript(data)
        f = open(write_path + file, "w")
        f.write(data)
    except:
        print("Error")
        continue
