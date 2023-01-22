# Obfuscation Detector

A binary classification model that detects whether the given JS program is obfuscated or not.

Dataset is taken from https://www.kaggle.com/datasets/fanbyprinciple/obfuscated-javascript-dataset

| Obfuscated      | Not Obfuscated |
| -----------     | -------------- |
|    1477         |      1857      |


# Results

The features were trained using Weka and the obtained results as follow.


| ML Algorithm           | Accuracy |
|------------------------|----------|
| Naive Bayes            | 94.84%   |
| Logistic Regression    | 98.64%   |
| Support Vector Machine | 99.01%   |
| Random Forest          | 99.50%   |
| Ada Boost              | 99.13%   |
| Lazy k-star            | 99.22%   |