from features import *
import os
import csv

# Set the directory you want to list the files from
directory = '../PreprocessedPrograms/PreprocessedNotObfuscated'

# Use the listdir() function to get the list of files
files = os.listdir(directory)

# Build a list of strings from F1 to F46
fields = []
for i in range(1, 47):
    fields.append('F{}'.format(i))

# Open a file in write mode
with open('features_no.csv', 'w', newline='') as csv_file:
    # Create a CSV writer object
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(fields)

# Print the names of the files
for file in files:
    print(file)