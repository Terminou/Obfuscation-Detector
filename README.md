# Obfuscation Detector

A binary classification model that detects whether the given JS program is obfuscated or not.

Dataset is taken from https://www.kaggle.com/datasets/fanbyprinciple/obfuscated-javascript-dataset

| Obfuscated      | Not Obfuscated |
| -----------     | -------------- |
|    1477         |      1857      |


# Results

The features were trained using Weka and the obtained results as follow.


| ML Algorithm           | Accuracy (45 features)| Accuracy (47 features)|
|------------------------|-----------------------|-----------------------|
| Naive Bayes            | 94.47%                | 96.20%                |
| Logistic Regression    | 98.47%                | 98.76%                | 
| Support Vector Machine | 97.65%                | 99.13%                |
| Ada Boost              | 99.01%                | 99.17%                |
| Lazy k-star            | 98.97%                | 99.22%                |
| Boosted Decision Tree  | 99.17%                | 99.30%                |
| Random Forest          | 99.20%                | 99.55%                |
