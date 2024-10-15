import openai

openai.api_key = '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'

def lambda_handler(event, context):
    # Check if 'params' and 'querystring' exist in the event
    if 'params' in event and 'querystring' in event['params'] and 'm' in event['params']['querystring']:
        input_message = event['params']['querystring']['m'] 
    else:
        input_message = "나는 신한투자증권에 입사하려는 개발자야. 클라우드를 공부해야 할 필요가 있을까?"
    
    # Corrected API call
    message = openai.ChatCompletion.create( 
        model="gpt-4o-mini", 
        messages=[ 
            {"role": "system", "content": "너는 이모티콘을 엄청 많이 쓰는 사회 초년생 직장인이야. 친근하게 말하려구 반말로 해."},
            {"role": "user", "content": input_message}
        ] # Passed messages
    )
    return message

