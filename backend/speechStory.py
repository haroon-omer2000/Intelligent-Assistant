import azure.cognitiveservices.speech as speechsdk


class speechStory():

    def __init__(self, voice) -> None:
        print("data reached", voice)
        self.speech_config = speechsdk.SpeechConfig(
            subscription="19f533892d02447092300dc081b330af", region="eastus")
        self.audio_config = speechsdk.audio.AudioOutputConfig(
            use_default_speaker=True)

        self.speech_config.speech_synthesis_voice_name = voice

        self.speech_synthesizer = speechsdk.SpeechSynthesizer(
            speech_config=self.speech_config, audio_config=self.audio_config)

    def generateSpeech(self, text):

        speech_synthesis_result = self.speech_synthesizer.speak_text_async(
            text).get()

        if speech_synthesis_result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
            print("Speech synthesized for text [{}]".format(text))
        elif speech_synthesis_result.reason == speechsdk.ResultReason.Canceled:
            cancellation_details = speech_synthesis_result.cancellation_details
            print("Speech synthesis canceled: {}".format(
                cancellation_details.reason))
            if cancellation_details.reason == speechsdk.CancellationReason.Error:
                if cancellation_details.error_details:
                    print("Error details: {}".format(
                        cancellation_details.error_details))
                    print("Did you set the speech resource key and region values?")
