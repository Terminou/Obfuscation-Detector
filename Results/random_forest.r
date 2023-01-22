=== Run information ===

Scheme:       weka.classifiers.trees.RandomForest -P 100 -I 100 -num-slots 1 -K 0 -M 1.0 -V 0.001 -S 1
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

RandomForest

Bagging with 100 iterations and base learner

weka.classifiers.trees.RandomTree -K 0 -M 1.0 -V 0.001 -S 1 -do-not-check-capabilities

Time taken to build model: 0.28 seconds

=== Stratified cross-validation ===
=== Summary ===

Correctly Classified Instances        2411               99.5047 %
Incorrectly Classified Instances        12                0.4953 %
Kappa statistic                          0.99  
Mean absolute error                      0.0131
Root mean squared error                  0.0661
Relative absolute error                  2.6543 %
Root relative squared error             13.2883 %
Total Number of Instances             2423     

=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0.999    0.009    0.993      0.999    0.996      0.990    1.000     1.000     Not-obfuscated
                 0.991    0.001    0.998      0.991    0.994      0.990    1.000     1.000     Obfuscated
Weighted Avg.    0.995    0.006    0.995      0.995    0.995      0.990    1.000     1.000     

=== Confusion Matrix ===

    a    b   <-- classified as
 1339    2 |    a = Not-obfuscated
   10 1072 |    b = Obfuscated

