import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from typing import List


# Initialize NLTK components
def _initialize_nltk():
    try:
        nltk.data.find('tokenizers/punkt')
        nltk.data.find('corpora/stopwords')
        nltk.data.find('corpora/wordnet')
    except LookupError:
        nltk.download('punkt', quiet=True)
        nltk.download('stopwords', quiet=True)
        nltk.download('wordnet', quiet=True)


# Initialize NLTK on module import
_initialize_nltk()


def preprocess_text(text: str) -> List[str]:
    """Preprocess text for NLP tasks"""
    lemmatizer = WordNetLemmatizer()
    stop_words = set(stopwords.words('english'))

    # Tokenize
    tokens = word_tokenize(text.lower())

    # Remove stopwords and non-alphabetic tokens, then lemmatize
    processed_tokens = [
        lemmatizer.lemmatize(token)
        for token in tokens
        if token.isalpha() and token not in stop_words
    ]

    return processed_tokens


def lemmatize_word(word: str) -> str:
    """Lemmatize a single word"""
    lemmatizer = WordNetLemmatizer()
    return lemmatizer.lemmatize(word.lower())