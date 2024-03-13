import google.generativeai as genai

import os
class Generate:
    def __init__(self):
        self.GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
        genai.configure(api_key=self.GEMINI_API_KEY)
        self.modelText = genai.GenerativeModel('gemini-pro')
        self.GEMINI_PROMPT = os.environ.get("PROMPT")
    def generate(self, topic, content_type, word_limit, content_tone):
        '''
            Function to generate the content using GPT 3.5

            args: topic(String), content_type(String), word_limit(int), content_tone(String)

            returns: response(String) 
        '''
        prompt = eval(f'f"{self.GEMINI_PROMPT}"')
        response = self.modelText.generate_content(prompt)
        return response.text
    