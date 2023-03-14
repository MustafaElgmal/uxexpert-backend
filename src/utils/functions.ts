import natural from 'natural'
export const classifySentence = (sentence:string) => {
    const classifier = new natural.BayesClassifier();
    classifier.addDocument("medical hospital doctor nurse patient", "medical");
    classifier.addDocument("pizza burger restaurant  food", "food");
    classifier.addDocument("teacher student teaching learning school", "elearning");
    classifier.addDocument("", "notFound");
    // Train
    classifier.train();
    // Apply/Predict
    return classifier.classify(sentence);
  };