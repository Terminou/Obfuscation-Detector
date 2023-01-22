=== Run information ===

Scheme:       weka.classifiers.functions.Logistic -R 1.0E-8 -M -1 -num-decimal-places 4
Relation:     features
Instances:    2423
Attributes:   48
              F1
              F2
              F3
              F4
              F5
              F6
              F7
              F8
              F9
              F10
              F11
              F12
              F13
              F14
              F15
              F16
              F17
              F18
              F19
              F20
              F21
              F22
              F23
              F24
              F25
              F26
              F27
              F28
              F29
              F30
              F31
              F32
              F33
              F34
              F35
              F36
              F37
              F38
              F39
              F40
              F41
              F42
              F43
              F44
              F45
              F46
              F47
              Class
Test mode:    10-fold cross-validation

=== Classifier model (full training set) ===

Logistic Regression with ridge parameter of 1.0E-8
Coefficients...
                             Class
Variable            Not-obfuscated
==================================
F1                          0.0507
F2                         -0.0033
F3                         -0.0008
F4                         -0.6958
F5                         -3.2779
F6                          0.0166
F7                         -4.2699
F8                          4.0742
F9                        -16.2857
F10                     63540.4116
F11                         0.0107
F12                        -4.3892
F13                        -0.0987
F14                      1312.9969
F18                       -30.0969
F19                       416.2424
F20                       140.8008
F21                           1.23
F22                        -1.3391
F23                         2.7227
F24                        -2.3546
F25                          21.09
F26                         0.4897
F28                         6.6582
F29                          0.604
F30                         0.0308
F31                        -0.7548
F32                          0.182
F34                         0.0525
F35                         1.3577
F36                         0.0056
F37                          0.096
F39                        -1.4403
F40                          0.075
F41                        -0.1898
F42                        -6.4067
F46                        47.6805
F47                        65.2971
Intercept                   0.9779


Odds Ratios...
                             Class
Variable            Not-obfuscated
==================================
F1                          1.0521
F2                          0.9967
F3                          0.9992
F4                          0.4987
F5                          0.0377
F6                          1.0167
F7                           0.014
F8                         58.8011
F9                               0
F10                       Infinity
F11                         1.0108
F12                         0.0124
F13                          0.906
F14                       Infinity
F18                              0
F19          5.912876985066731E180
F20          1.4093099213553118E61
F21                         3.4214
F22                         0.2621
F23                         15.221
F24                         0.0949
F25                1442946026.0766
F26                         1.6318
F28                       779.1652
F29                         1.8294
F30                         1.0313
F31                         0.4701
F32                         1.1996
F34                          1.054
F35                         3.8873
F36                         1.0056
F37                         1.1007
F39                         0.2369
F40                         1.0779
F41                         0.8271
F42                         0.0017
F46           5.097721704593612E20
F47          2.2813250358963205E28


Time taken to build model: 0.41 seconds

=== Stratified cross-validation ===
=== Summary ===

Correctly Classified Instances        2390               98.6381 %
Incorrectly Classified Instances        33                1.3619 %
Kappa statistic                          0.9724
Mean absolute error                      0.0153
Root mean squared error                  0.1095
Relative absolute error                  3.0936 %
Root relative squared error             22.0319 %
Total Number of Instances             2423     

=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0.990    0.018    0.986      0.990    0.988      0.972    0.991     0.987     Not-obfuscated
                 0.982    0.010    0.987      0.982    0.985      0.972    0.991     0.989     Obfuscated
Weighted Avg.    0.986    0.014    0.986      0.986    0.986      0.972    0.991     0.988     

=== Confusion Matrix ===

    a    b   <-- classified as
 1327   14 |    a = Not-obfuscated
   19 1063 |    b = Obfuscated

