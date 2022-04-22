from googletrans import Translator


class TextTranslator():

    def __init__(self) -> None:
        self.translator = Translator()

    def translateText(self, text):
        return self.translator.translate(text, dest='urdu').text
