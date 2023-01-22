=== Run information ===

Scheme:       weka.classifiers.lazy.KStar -B 20 -M a
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

KStar Beta Verion (0.1b).
Copyright (c) 1995-97 by Len Trigg (trigg@cs.waikato.ac.nz).
Java port to Weka by Abdelaziz Mahoui (am14@cs.waikato.ac.nz).

KStar options : -B 20 -M a 

Time taken to build model: 0 seconds

=== Stratified cross-validation ===
=== Summary ===

Correctly Classified Instances        2404               99.2158 %
Incorrectly Classified Instances        19                0.7842 %
Kappa statistic                          0.9841
Mean absolute error                      0.0074
Root mean squared error                  0.08  
Relative absolute error                  1.4888 %
Root relative squared error             16.0887 %
Total Number of Instances             2423     

=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0.995    0.011    0.991      0.995    0.993      0.984    0.998     0.996     Not-obfuscated
                 0.989    0.005    0.994      0.989    0.991      0.984    0.998     0.997     Obfuscated
Weighted Avg.    0.992    0.008    0.992      0.992    0.992      0.984    0.998     0.997     

=== Confusion Matrix ===

    a    b   <-- classified as
 1334    7 |    a = Not-obfuscated
   12 1070 |    b = Obfuscated

