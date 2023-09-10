import openai
import os
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY
class Generate:
    def generate(self, topic, content_type, word_limit, content_tone):
        '''
            Function to generate the content using GPT 3.5

            args: topic(String), content_type(String), word_limit(int), content_tone(String)

            returns: response(String)
        '''
        prompt = f"You are a professional content writer. Generate a {content_type} on the topic {topic}. The content should not exceed {word_limit} words. It should have a {content_tone}. Refrain from using emojis. Keep the content as much to the point as possible. Let your imagination and creativity fly."
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", 
            messages =[ {
                "role":"user",
                "content": prompt
            }]
            )
        response = completion['choices'][0]['message']['content']
        return response
    